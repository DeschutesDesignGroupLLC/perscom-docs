# Rank Records

Rank Records provide a historical timeline of all promotions and demotions a person receives throughout their tenure with the organization.
They also help to establish how long a user has held a specific rank and are an integral part of a user's personnel file.

## External Integration

### API

The feature does not have any API endpoints at this time however records may be accessed via the [Users API endpoint](/components/users).

### Webhooks

The feature triggers the following events.

- rankrecord.created
- rankrecord.updated
- rankrecord.deleted

### Widgets

The feature does not integrate with any widgets at this time.

## Permissions

The following permissions are related to managing rank records.

- `view:rankrecord` Can view a rank record.
- `create:rankrecord` Can create a new rank record.
- `update:rankrecord` Can update a rank record.
- `delete:rankrecord` Can delete a rank record.
