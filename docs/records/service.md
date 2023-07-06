# Service Records

Service Records are an agnostic record that allows administrators and managers to add organization-specific custom records to a user's
personnel file that may not fit under a more specific record type.

## External Integration

### API

The feature does not have any API endpoints at this time however records may be accessed via the [Users API endpoint](/components/users).

### Webhooks

The feature triggers the following events.

- servicerecord.created
- servicerecord.updated
- servicerecord.deleted

### Widgets

The feature does not integrate with any widgets at this time.

## Permissions

The following permissions are related to managing service records.

- `view:servicerecord` Can view an service record.
- `create:servicerecord` Can create a new service record.
- `update:servicerecord` Can update an existing service record.
- `delete:servicerecord` Can delete an existing service record.
