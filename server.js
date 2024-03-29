const express = require("express");
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const http = require("http");
const { connectToDb } = require("./config/db");
const errorHandler = require("./middleware/error");
// const dotenv = require("dotenv");
var cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const issues = require("./router/issues");
const issue = require("./router/issue")(wss);
const activity = require("./router/activity");
const search = require("./router/search");
// const messages = require("./router/message");
const messages = require("./router/message")(wss);
const clients = {};
const connectedClients = new Set();

// WebSocket connection handling
wss.on("connection", (ws) => {
  console.log("WebSocket client connected");
  connectedClients.add(ws);

  // Handle incoming messages from WebSocket clients
  ws.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    const { action, issueId, data, isAdmin } = parsedMessage;

    switch (action) {
      case "join":
        ws.issueId = issueId;
        ws.isAdmin = isAdmin;
        console.log("user joined", isAdmin);

        break;

      case "broadcast":
        console.log("boardcasting the message", data);
        // Broadcast message to all clients in the issueId
        wss.clients.forEach((client) => {
          if (
            client !== ws &&
            client.issueId === issueId &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(JSON.stringify(data));
          }
        });
        break;

      case "leave":
        delete ws.issueId;
        break;

      default:
        console.log("Unknown action:", action);
    }
  });

  // Handle WebSocket client disconnection
  ws.on("close", () => {
    console.log("WebSocket client disconnected");
    connectedClients.delete(ws);
  });
});

// dotenv.config({ path: "./config/config.env" });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// parse application/json
app.use(bodyParser.json());

connectToDb();
app.use(errorHandler);

app.use("/api/v1", activity, messages);
app.use("/api/v1/issues", issues);
app.use("/api/v1/issue", issue);
app.use("/api/v1/search", search);
app.use(express.json());

// app.listen(8000, () => console.log("Example app is listening on port 3000."));
// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Express app with WebSocket server started on port ${PORT}`);
});
