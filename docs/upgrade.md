# Upgrade Guide and Changelog

Use this page to view release notes and upgrade guides as they pertain to PERSCOM Personnel Management System.

## v2.0.0 - 09-14-2024

Version 2, on the surface, literally, is a complete refresh of the UI and frontend. To achieve this, we did make some minor changes to the
backend. Be sure to let us know how you life the new refresh!

- Version 2 API released. Use `v2` in all API requests now.
- Status resource has been updated to use only one `color`.
  - `text_color` and `bg_color` have been removed.

<!-- prettier-ignore -->
::: tip 
All API keys will need to be regenerated. While current keys will continue to authenticate properly, they do not contain the correct
JWT claims to perform authorization. 
:::
