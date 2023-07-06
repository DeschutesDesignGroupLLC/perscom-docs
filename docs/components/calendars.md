# Calendars

The calendars feature is designed to help organizations manage scheduling and events more efficiently. With this feature, users can create
and manage multiple calendars for different purposes (e.g. shift schedules, training sessions, meetings, etc.), and easily view and update
events in a centralized location. Users can also set reminders and notifications to keep everyone on schedule and ensure that important
events are not missed. The Calendars feature is fully integrated with the rest of the PERSCOM.io platform, allowing for seamless
communication and coordination across the organization.

## External Integration

### API

The feature exposes the following API [endpoints](https://perscom.io/documentation/api/#/Calendars).

### Webhooks

The feature triggers the following events.

- calendar.created
- calendar.updated
- calendar.deleted

### Widgets

The feature can be embedded into a third-party service using the [Calendar Widget](/external-integration/widgets/calendar).

## Permissions

The following permissions are related to managing calendars.

- `view:calendar` Can view a calendar.
- `create:calendar` Can create a new calendar.
- `update:calendar` Can update an existing calendar.
- `delete:calendar` Can delete an existing calendar.
