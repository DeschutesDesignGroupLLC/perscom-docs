# Users

The User's personnel file serves as the core element within the PERSCOM.io system, encompassing all other components and features outlined
in the documentation. It consolidates records, updates, notes, fields, and various custom data points into a centralized and easily
manageable view.

Additionally, personnel files offer Custom Fields, empowering administrators to establish organization-specific custom data points stored
within each user's personnel file.

## External Integration

### API

The feature exposes the following API [endpoints](https://perscom.io/documentation/api/#/Users).

### Webhooks

The feature triggers the following events.

- user.created
- user.updated
- user.deleted

### Widgets

The feature can be embedded into a third-party service using the [Roster Widget](/external-integration/widgets/roster).

## Permissions

The following permissions are related to managing users.

- `view:user` Can view a user.
- `create:user` Can create a new user.
- `update:user` Can update an existing user.
- `delete:user` Can delete an existing user.
- `manage:billing` Can access the billing portal and update all billing related settings.
- `manage:api` Can access the external integration section of the dashboard.
- `view:log` Can view the application logs.
