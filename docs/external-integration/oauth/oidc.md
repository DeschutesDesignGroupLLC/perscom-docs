# OpenID Connect

OIDC stands for OpenID Connect, which is a widely-used authentication protocol built on top of OAuth 2.0. While OAuth 2.0 is primarily
designed for granting access to APIs, OIDC focuses on user authentication. OIDC allows a user to authenticate with a provider (e.g., Google,
Facebook, or your identity provider) and then receive an ID token containing information about the user. This information can be used to log
the user into a web application, among other things.

OIDC defines a set of standard [endpoints](#endpoints) that the client application can use to authenticate a user and receive the ID token
to interact with the identity provider. These endpoints include a discovery endpoint, an authorization endpoint, and a token endpoint. The
discovery endpoint allows the client to discover the endpoints and configuration of the provider, while the authorization endpoint is used
to initiate the authentication process. Finally, the token endpoint is used to exchange an authorization code for an ID token.

In summary, OIDC provides a standardized way to authenticate users and obtain information about them, making it easier to build secure and
scalable web applications as well as implement Single Sign-On (SSO) with third-party applications.

## Prerequisites

<!-- prettier-ignore -->
::: warning
You must be [subscribed](https://docs.perscom.io/pricing) to the `Enterprise` plan to use this feature.
:::

## Scopes

The following scopes are OpenID Connect (OIDC) specific and determine which claims will be included in the ID token when making a token
request. The scopes also determine which attributes will be available when calling the `userinfo` endpoint.

| Scope   | Description                                             |
| ------- | ------------------------------------------------------- |
| openid  | Must be requested in order to retrieve an ID token      |
| profile | Include a user's name, username and profile picture url |
| email   | Include a user's email and email verification status    |
| tenant  | Include a user's organization name and ID               |

## Endpoints

| Endpoint                                  |                              URL                              | Method |
| ----------------------------------------- | :-----------------------------------------------------------: | -----: |
| [Discovery Endpoint](#discovery-endpoint) | https://{your-dashboard-url}/.well-known/openid-configuration |    GET |
| Authorization Endpoint                    |         https://{your-dashboard-url}/oauth/authorize          |    GET |
| Token Endpoint                            |           https://{your-dashboard-url}/oauth/token            |   POST |
| Logout Endpoint                           |           https://{your-dashboard-url}/oauth/logout           |   POST |
| [User Info Endpoint](#user-info-endpoint) |          https://{your-dashboard-url}/oauth/userinfo          |    GET |

### Discovery Endpoint

`/.well-known/openid-configuration`

Returns OpenID Connect metadata about the PERSCOM.io authorization server. This information can be used by clients to programmatically
configure their interactions with PERSCOM.io.

```vb
curl -X GET \
"https://{your-dashboard-url}/.well-known/openid-configuration
```

#### Example Response

```json
{
  "issuer": "http://localhost",
  "authorization_endpoint": "http://localhost/oauth/authorize",
  "token_endpoint": "http://localhost/oauth/token",
  "userinfo_endpoint": "http://localhost/oauth/userinfo",
  "grant_types_supported": ["authorization_code", "implicit", "refresh_token"],
  "subject_types_supported": ["public"],
  "id_token_signing_alg_values_supported": ["RS256"],
  "scopes_supported": ["openid", "profile", "email"],
  "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"],
  "claims_supported": ["jti", "iat", "nbf", "exp", "sub", "scopes"],
  "end_session_endpoint": "http://localhost/oauth/logout"
}
```

### User Info Endpoint

`/oauth/userinfo`

Returns information about the currently signed-in user.

The `access token` must have the `openid` scope. The endpoint also excepts the `profile`, `email` and `tenant` [scopes](#scopes) that will
return the respective fields in the response but is not required. The best practice would be to include all four scopes when requesting a
token.

```vb
curl -X GET \
-H "Authorization: Bearer ${access_token}" \
"https://{your-dashboard-url}/oauth/userinfo
```

#### Example Response

```json
{
  "sub": 1,
  "email": "email@test.com",
  "email_verified": true,
  "name": "User",
  "preferred_username": "email@test.com",
  "picture": "https://perscom.s3.amazonaws.com/tenant1/iQc2HehFyKASVIUn8v99rX93jkJ2xhNtmQVL0Uwa.jpg",
  "tenant_name": "Organization Name",
  "tenant_sub": 1
}
```
