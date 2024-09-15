# Upgrade Guide and Changelog

Use this page to view release notes and upgrade guides as they pertain to PERSCOM Personnel Management System.

## v2.0.0 - 09-14-2024

Version 2, on the surface, literally, is a complete refresh of the UI and frontend. To achieve this, we did make some minor changes to the
backend. Be sure to let us know how you like the new refresh!

- Version 2 API released. Use `v2` in all future API requests.
  - We've ensured backwards compatability both in the API schema and API keys.
  - This brings some new endpoints such as `attachments`, `comments`, `images`, and `settings`.
- Status resource has been updated to use only one `color`.
  - `text_color` and `bg_color` have been removed.
