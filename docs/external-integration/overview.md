# External Integration Overview

PERSCOM.io provides a vast array of different options to integrate your personnel data with third-party services. These services include the
PERSCOM.io [API](/external-integration/api), [Command Line Interface (CLI)](/external-integration/cli), [OAuth 2.0](/external-integration/oauth),
[OpenID Connect (OIDC)](/external-integration/oauth/oidc), [Webhooks](/external-integration/webhooks), and
[Widgets](/external-integration/widgets). Visit the individual integrations page to view more information and how-to's on how to integrate
these services.

## Choosing an Integration

Below is a brief overview of each integration and the best use cases for each.

### API

The PERSCOM.io API is a RESTful HTTP interface for interacting with your personnel data on a machine to machine level. The API would be best
used for:

- Querying personnel data for reports and analysis
- Automating business workflows
- Building custom software that will consume and display PERSCOM.io personnel data
- Updating and managing personnel data from a third-party software

### Command Line Interface (CLI)

The PERSCOM.io CLI offers a Command Line Interface option to interact with your data. Built on top of the PERSCOM.io API, the CLI provides a
robust and powerful tool that can help you integrate PERSCOM.io with any other service on the market.

- Querying personnel data for reports and analysis
- Output and manage personnel data using custom backend services
- Quick access to personnel data without the need of a web browser

### OAuth 2.0

OAuth 2.0 is an authorization protocol, built on top of the PERSCOM.io API, that enables third-party applications to access your
organization's data without giving them your username and password. Here are some common use cases where OAuth 2.0 might be used:

- Single Sign-On (SSO): OAuth 2.0 can be used to enable SSO across multiple applications. A user can authenticate once, and then use that
  authentication to access other applications without having to log in again.
- Accessing PERSCOM.io API: OAuth 2.0 can be used to allow an application to access data from PERSCOM.io via the API. This is useful when an
  application needs to access data that is not stored locally.
- Mobile and Web Applications: OAuth 2.0 can be used to secure mobile and web applications, allowing users to log in using their credentials
  from another service. This is particularly useful for mobile applications, where users may not want to enter their credentials into a
  small screen.
- Enterprise Applications: OAuth 2.0 can be used to secure enterprise applications, allowing users to access resources across multiple
  applications without having to authenticate multiple times.

### OpenID Connect (OIDC)

OIDC is an authentication protocol that is built on top of OAuth 2.0. OIDC outlines a standard protocol for providing useable data about an
authenticated user that can be used for third-party services to consume. Here are some common uses cases for OIDC:

- Single Sign-On (SSO): OIDC can be used to enable SSO across multiple applications. A user can authenticate once, and then use that
  authentication to access other applications without having to log in again. OIDC provides a standardized way for applications to verify a
  user's identity and access tokens, which can be used to access other resources.
- Identity Verification: OIDC can be used to verify a user's identity. When a user logs in, the OIDC provider sends an ID token to the
  application that contains information about the user, such as their name and email address. The application can use this information to
  verify the user's identity.
- Authorization: OIDC can be used to authorize access to resources. Applications can use OIDC to obtain access tokens that can be used to
  access protected resources.
- Mobile and Web Applications: OIDC can be used to secure mobile and web applications, allowing users to log in using their credentials from
  another service. This is particularly useful for mobile applications, where users may not want to enter their credentials into a small
  screen.

### Webhooks

Webhooks can be used to enable real-time notifications and data updates for third-party services, such as a messaging platform, an external
database or a custom reporting tool. Here are some common use cases for webhooks:

- Automated Workflows: Webhooks can be used to trigger automated workflows between applications. For example, when a new user is added to
  PERSCOM.io, a webhook can automatically trigger the creation of a new record in a project management tool.
- Notifications: Webhooks can be used to send notifications to users or applications. For example, when a user completes a form, a webhook
  can be used to send a notification to start importing the user data into other managed services.
- Data Synchronization: Webhooks can be used to keep data synchronized between applications. For example, when a user updates their contact
  information in PERSCOM.io, a webhook can be used to update the information in other connected applications.
- Real-Time Data Transfer: Webhooks allow for real-time data transfer between applications. This is useful for applications that require
  real-time data, such as chat applications or real-time analytics.

### Widgets

Widgets provide a way to display your personnel data within another third-party service via HTML and Javascript. PERSCOM.io offers the
following embeddable widgets:

1. [Roster](/external-integration/widgets/roster)
2. [Awards](/external-integration/widgets/awards)
3. [Calendar](/external-integration/widgets/calendar)
4. [Forms](/external-integration/widgets/forms)
5. [Newsfeed](/external-integration/widgets/newsfeed)
6. [Qualifications](/external-integration/widgets/qualifications)
7. [Ranks](/external-integration/widgets/ranks)
