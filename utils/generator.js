const faker = require("faker");

const createRandomIssue = () => {
  const issue = {
    tags: Array.from(
      { length: faker.datatype.number({ min: 0, max: 5 }) },
      () => faker.lorem.word(faker.datatype.number({ min: 2, max: 10 }))
    ),
    "created-at-ts": faker.datatype.number(),
    publish_id: faker.datatype.number(),
    "state-text": faker.lorem.words(),
    language_code: faker.random.arrayElement(["en", "hi", "fr"]),
    platform_id: faker.datatype.uuid(),
    platform_type: faker.random.arrayElement(["android", "ios", "web"]),
    "agent-replied": faker.datatype.boolean(),
    "is-fresh": faker.datatype.boolean(),
    app_id: faker.datatype.uuid(),
    "changed-at-basic": faker.date.recent().toISOString(),
    "changed-at": faker.datatype.string(),
    state: faker.datatype.number({ min: 0, max: 5 }),
    is_chat: faker.datatype.boolean(),
    has_app_logo: faker.datatype.boolean(),
    title: faker.lorem.sentence(),
    "changed-at-ts": faker.datatype.number(),
    show_issue_mode_toggle: faker.datatype.boolean(),
    issue_mode: "async",
    id: faker.datatype.uuid(),
    "created-at-basic": faker.date.recent().toISOString(),
    score: faker.datatype.number(),
    is_user_activity: null,
    response_required: faker.datatype.number(),
    queue_id: faker.datatype.uuid(),
    "platform-label": faker.random.word(),
    app_logo: null,
    created_at: faker.date.recent().toISOString(),
  };
  return issue;
};

const generateIssueDetails = () => {
  const data = {
    feedback_bots_supported: faker.datatype.boolean(),
    "follow-up": null,
    "email-issue": faker.datatype.boolean(),
    is_original_issue: faker.datatype.boolean(),
    "conv-initiated": faker.datatype.boolean(),
    closed: faker.datatype.boolean(),
    "more-info": faker.datatype.boolean(),
    screenshot_request_text: faker.lorem.sentence(),
    reported_via: faker.random.word(),
    "languages-enabled": {
      languages: [
        {
          code: faker.random.locale(),
          displayname: faker.random.word(),
          active: faker.datatype.boolean(),
          default: faker.datatype.boolean(),
        },
      ],
    },
    meta: {
      platform: faker.random.arrayElement(["android", "ios", "web"]),
      "device-model": faker.random.word(),
      "os-version": faker.datatype.number(),
      "application-version": faker.datatype.number(),
      "device-language": faker.random.word(),
      "language-unavailable": faker.datatype.boolean(),
      sdkx: faker.datatype.boolean(),
    },
    redaction_is_allowed: faker.datatype.boolean(),
    issue: {
      "is-unassigned": faker.datatype.boolean(),
      "status-list": [
        {
          text: faker.random.word(),
          value: faker.datatype.number({ min: 1, max: 10 }),
          selected: faker.datatype.boolean(),
        },
      ],
      "updated-at": faker.date.recent().toISOString(),
      tags: {
        items: null,
        count: faker.datatype.number({ min: 1, max: 5 }),
        "is-more-than-3": faker.datatype.boolean(),
      },
      "created-at-ts": faker.datatype.number({ min: 1, max: 99999 }),
      publish_id: faker.datatype.number({ min: 1, max: 99999 }),
      "updated-at-ts": faker.datatype.number({ min: 1, max: 99999 }),
      assignees: [],
      "state-text": faker.random.word(),
      "created-at-abs": faker.date.recent(),
      language_code: faker.random.locale(),
      replied: faker.datatype.boolean(),
      meta: {
        detected_language: faker.random.locale(),
        custom_meta: "{}",
        timezone: faker.random.word(),
        sdkx: faker.datatype.boolean(),
        extra: {
          "plugin-type": faker.random.word(),
          "library-version": faker.datatype.number({ min: 1, max: 10 }),
          "chatbots-supported?": faker.datatype.boolean(),
          "webchat-library-version": faker.datatype.number({ min: 1, max: 10 }),
          "follow-up-supported-sdk?": faker.datatype.boolean(),
        },
        first_end_user_message_id: faker.datatype.uuid(),
        intent_tree_id: faker.datatype.uuid(),
        language: faker.random.word(),
        developer_set_language: faker.random.word(),
        device_info: {
          "library-version": faker.datatype.number({ min: 1, max: 10 }),
          "disk-space": {
            "free-space-phone": `${faker.datatype
              .number({ min: 100, max: 1000 })
              .toFixed(2)} GB`,
            "total-space-phone": `${faker.datatype
              .number({ min: 100, max: 1000 })
              .toFixed(2)} GB`,
          },
          "application-name": faker.random.word(),
          "battery-status": faker.random.word(),
          "device-model": faker.random.word(),
          "battery-level": `${faker.datatype.number({ min: 0, max: 100 })}%`,
          "network-type": faker.random.word(),
          "language-unavailable": faker.datatype.boolean(),
          "os-version": faker.datatype.number({ min: 10, max: 15 }),
          "application-version": faker.datatype.number({ min: 1, max: 10 }),
          "device-language": faker.random.word(),
          "application-identifier": faker.random.word(),
          platform: faker.random.arrayElement(["android", "ios", "web"]),
        },
        lite_sdk_os: faker.random.word(),
        device_language: faker.random.word(),
      },
      platform_id: faker.datatype.uuid(),
      platform_type: faker.random.word(),
      redaction: null,
      "agent-replied": faker.datatype.boolean(),
      author_presence_status: null,
      duplicate_issue_ids: [],
      "is-fresh": faker.datatype.boolean(),
      queue_name: faker.random.word(),
      app_id: faker.datatype.uuid(),
      assigned: faker.datatype.boolean(),
      "changed-at": faker.date.recent().toISOString(),
      cc: null,
      is_chat: faker.datatype.boolean(),
      created_at_epoch: faker.datatype.number({ min: 1, max: 9999999999999 }),
      has_app_logo: faker.datatype.boolean(),
      "messages-count": faker.datatype.number({ min: 1, max: 10 }),
      "created-at-db": faker.date.recent().toISOString(),
      title: faker.random.word(),
      "changed-at-ts": faker.datatype.number({ min: 1, max: 99999 }),
      "conv-initiated?": faker.datatype.boolean(),
      show_issue_mode_toggle: faker.datatype.boolean(),

      author: {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        agent_name: null,
      },
      "has-tags": null,
      issue_mode: faker.random.word(),
      "is-closed": faker.datatype.boolean(),
      "delivered-to": null,
      assignee_id: null,
      status: faker.datatype.number({ min: 0, max: 1 }),
      id: faker.datatype.uuid(),
      "created-at-basic": faker.date.recent(),
      score: faker.datatype.number({ min: 0, max: 10 }),
      status_updated_at: faker.date.recent(),
      preissue_id: faker.datatype.uuid(),
      "response-required": faker.datatype.number({ min: 0, max: 1 }),
      origin: faker.random.word(),
      queue_id: faker.datatype.uuid(),
      "platform-label": faker.random.word(),
      body: faker.lorem.text(),
      app_title: faker.random.word(),
      "created-at": faker.date.recent(),
      "status-str": faker.random.word(),
      assignee: {
        name: "Unassigned",
        agent_name: "Unassigned",
        type: null,
      },
      "status-val": faker.random.word(),
    },
    "i18n-enabled": faker.datatype.boolean(),
    chatbots_supported: faker.datatype.boolean(),
    image_files_are_unsupported: faker.datatype.boolean(),
    web_issue: faker.datatype.boolean(),
    csat_enabled: faker.datatype.boolean(),
    has_csat_permission: faker.datatype.boolean(),
    scroll_button_ux_enabled: faker.datatype.boolean(),
    has_mark_as_duplicate_permission: faker.datatype.boolean(),
    "ticket-forwarding": null,
    atai_version: faker.datatype.number((digits = 1)),
    is_admin: faker.datatype.boolean(),
    safe_thumbnails: faker.datatype.boolean(),
    ortsbo: {
      enabled: faker.datatype.boolean(),
      allowed_languages: [
        {
          name: faker.random.word(),
          code: faker.random.locale(),
        },
      ],
    },
    active_profiles: {
      typing: {},
      viewing: {},
    },
    has_old_notes: Array.from({ length: 3 }, () =>
      faker.lorem.word(faker.datatype.number({ min: 5, max: 10 }))
    ),
    auto_intent_assignment: {
      intent_auto_assigned: faker.datatype.boolean(),
      intent_details: [
        {
          intent_name: faker.lorem.sentence(),
          intent_group_name: faker.random.word(),
          confidence_score_level: faker.random.word(),
        },
      ],
    },
    "csat-warn": faker.datatype.boolean(),
    author: {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email(),
      "custom-user-id": faker.datatype.uuid(),
      can_block_email: faker.internet.email(),
    },
    original_issue_id: null,
    messages: [
      {
        is_redacted: faker.datatype.boolean(),
        "is-right": faker.datatype.boolean(),
        created_at_humanize: faker.time.recent("date"),
        attachments: [],
        created_at_unix_ts: faker.datatype.number((digits = 5)),
        render_info: {
          is_chatbot_message: faker.datatype.boolean(),
          is_human_message: faker.datatype.boolean(),
        },
        type: faker.random.arrayElement(
          (elements =
            ("txt",
            "intents_with_option_input",
            "rsp_intents_with_option_input"))
        ),
        created_at_ts: faker.time.recent(),
        read_status: {
          read_at_unix_ts: faker.datatype.number((digits = 5)),
          read_at_humanize: faker.time.recent("date"),
          read_at: faker.time.recent(),
          read_at_dt: faker.time.recent(),
        },
        restricted_attachment_count: faker.datatype.number((digits = 1)),
        created_at_epoch: faker.datatype.number((digits = 13)),
        author: {
          name: faker.name.findName(),
          avatar: faker.image.abstract(),
          id: faker.datatype.uuid(),
        },
        created_at_iso: faker.time.recent(),
        id: faker.datatype.uuid(),
        preissue_id: faker.datatype.uuid(),
        is_you: faker.datatype.boolean(),
        by_admin: faker.datatype.boolean(),
        has_attachments: faker.datatype.boolean(),
        origin: faker.random.arrayElement(
          (elements = ("admin", "mobile", "webmessenger"))
        ),
        body: faker.lorem.text(),
        "review-info": null,
        created_at: faker.time.recent(),
      },
      {
        is_redacted: faker.datatype.boolean(),
        "is-right": faker.datatype.boolean(),
        created_at_humanize: faker.random.word(),
        attachments: [],
        created_at_unix_ts: faker.datatype.number((digits = 5)),
        render_info: {
          is_chatbot_message: faker.datatype.boolean(),
          is_human_message: faker.datatype.boolean(),
        },
        type: faker.random.arrayElement(
          (elements =
            ("txt",
            "intents_with_option_input",
            "rsp_intents_with_option_input"))
        ),
        created_at_ts: faker.time.recent(),
        read_status: {
          read_at_unix_ts: faker.datatype.number((digits = 5)),
          read_at_humanize: faker.random.word(),
          read_at: faker.da,
          read_at_dt: faker.time.recent(),
        },
        restricted_attachment_count: faker.datatype.number((digits = 1)),
        created_at_epoch: faker.datatype.number((digits = 13)),
        author: {
          name: faker.name.findName(),
          avatar: faker.image.abstract(),
          id: faker.datatype.uuid(),
        },
        created_at_iso: faker.time.recent(),
        id: faker.datatype.uuid(),
        preissue_id: faker.datatype.uuid(),
        is_you: faker.datatype.boolean(),
        by_admin: faker.datatype.boolean(),
        has_attachments: faker.datatype.boolean(),
        origin: faker.random.arrayElement(
          (elements = ("admin", "mobile", "webmessenger"))
        ),
        body: faker.lorem.text(),
        "review-info": null,
        created_at: faker.time.recent(),
      },
    ],
    suggested_faqs: [],
    queues_enabled: faker.random.boolean(),
    app: {
      publish_id: faker.random.number({ digits: 3 }),
      slug: faker.random.word(),
      meta: {},
      logo: null,
      contact_us_visibility: { web: "always", sdkx: "always" },
      title: faker.random.word(),
      logo_src: null,
      section_ids: Array.from({ length: 6 }, () => faker.datatype.uuid()),
      id: faker.datatype.uuid(),
      chat_timings: {
        "business-days": Array.from({ length: 7 }, () =>
          faker.random.boolean()
        ),
        "business-hours": Array.from({ length: 7 }, () => [
          {
            from: { hours: 0, minutes: 0 },
            to: { hours: 0, minutes: 0 },
            timezone: "Etc/UTC",
          },
        ]),
      },
      platform_ids: Array.from({ length: 3 }, () => faker.datatype.uuid()),
    },
    "is-more": faker.random.boolean(),
    has_review_url: faker.random.boolean(),
    sensai_assist_enabled: faker.random.boolean(),
    scroll_to_bottom_ux_enabled: faker.random.boolean(),
    attachment_possible: faker.random.boolean(),
    me: { name: faker.name.firstName(), id: faker.datatype.uuid() },
    "has-messages": Array.from({ length: 5 }, () => ({
      is_redacted: faker.datatype.boolean(),
      "is-right": faker.datatype.boolean(),
      created_at_humanize: faker.time.recent("date"),
      attachments: [],
      created_at_unix_ts: faker.datatype.number({ digits: 5 }),
      render_info: {
        is_chatbot_message: faker.datatype.boolean(),
        is_human_message: faker.datatype.boolean(),
      },
      type: faker.random.arrayElement([
        "txt",
        "intents_with_option_input",
        "rsp_intents_with_option_input",
      ]),
      created_at_ts: faker.time.recent(),
      read_status: {
        read_at_unix_ts: faker.datatype.number({ digits: 5 }),
        read_at_humanize: faker.time.recent("date"),
        read_at: faker.time.recent(),
        read_at_dt: faker.time.recent(),
      },
      restricted_attachment_count: faker.datatype.number({ digits: 1 }),
      created_at_epoch: faker.datatype.number({ digits: 13 }),
      author: {
        name: faker.name.findName(),
        avatar: faker.image.abstract(),
        id: faker.datatype.uuid(),
      },
      created_at_iso: faker.time.recent(),
      id: faker.datatype.uuid(),
      preissue_id: faker.datatype.uuid(),
      is_you: faker.datatype.boolean(),
      by_admin: faker.datatype.boolean(),
      has_attachments: faker.datatype.boolean(),
      origin: faker.random.arrayElement(["admin", "mobile", "webmessenger"]),
      body: faker.lorem.text(),
      "review-info": null,
      created_at: faker.time.recent(),
    })),
    device_language: null,
    metadata: {
      is_device_info_present: faker.random.boolean(),
      web_or_email_issue: faker.random.boolean(),
      logs: null,
      is_custom_data_present: faker.random.boolean(),
      custom_data: [],
      are_logs_present: faker.random.boolean(),
      are_breadcrumbs_present: faker.random.boolean(),
      app_platform: {},
      device_info: [
        {
          category: "Application",
          metadata: [
            { key: "Application Identifier", value: faker.datatype.uuid() },
            {
              key: "Application Version",
              value: faker.random.number({ digits: 1 }),
            },
            { key: "Name", value: faker.random.word() },
          ],
        },
        {
          category: "Hardware",
          metadata: [
            { key: "Device Model", value: faker.random.word() },
            {
              key: "Battery Level",
              value: `${faker.random.number({ min: 0, max: 100 })}%`,
            },
            {
              key: "Battery Status",
              value: faker.random.arrayElement(["Charging", "Discharging"]),
            },
            {
              key: "Free Space (Phone)",
              value: `${faker.random
                .number({ min: 100, max: 1000 })
                .toFixed(2)} GB`,
            },
            {
              key: "Total Space (Phone)",
              value: `${faker.random
                .number({ min: 100, max: 1000 })
                .toFixed(2)} GB`,
            },
          ],
        },
        {
          category: "Other",
          metadata: [
            {
              key: "OS Version",
              value: faker.random.number({ min: 10, max: 15 }),
            },
            {
              key: "Platform",
              value: faker.random.arrayElement(["android", "ios"]),
            },
            {
              key: "Network Type",
              value: faker.random.arrayElement(["WIFI", "Cellular"]),
            },
            { key: "Language", value: faker.random.locale() },
            {
              key: "Helpshift SDK Version",
              value: `${faker.random.number({
                min: 9,
                max: 12,
              })}.${faker.random.number({ min: 0, max: 9 })}`,
            },
            {
              key: "Full Privacy mode",
              value: faker.random.arrayElement(["ON", "OFF"]),
            },
          ],
        },
      ],
      breadcrumbs: [],
    },
    sensai_predict_enabled: faker.random.boolean(),
    review_info: null,
    original_issue_pid: null,
    is_atai_supported: faker.random.boolean(),
  };
  return data;
};

// Export them
module.exports = {
  createRandomIssue,
  generateIssueDetails,
};
