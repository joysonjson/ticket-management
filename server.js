const express = require("express");

const app = express();

const issues = require("./router/issues");
const issue = require("./router/issue");

app.use("/api/v1/issues", issues);
app.use("/api/v1/issue", issue);

app.use(express.json());

app.listen(8000, () => console.log("Example app is listening on port 3000."));
