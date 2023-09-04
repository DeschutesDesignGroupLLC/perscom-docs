# OAuth 2.0

OAuth 2.0 is an authorization protocol, built on top of the PERSCOM.io API, that enables third-party applications to access your
organization's data without giving them your username and password. When you grant permission to an application using OAuth 2.0, you are
essentially allowing it to access specific parts of your data on your behalf. This can be beneficial in several ways. For example, if you
use an external timekeeping or scheduling software, you can use our OAuth 2.0 feature to allow that software to access your organization's
personnel data. This can save you time and effort by automating the data transfer process and reducing manual data entry errors. With OAuth
2.0, you can have more control over which third-party applications can access your organization's data, and you can revoke their access at
any time if needed.

## Grants

In OAuth 2.0, there are several types of authorization grants that can be used to obtain an access token, which is used to authenticate and
authorize access to protected resources. The four main types of authorization grants are:

- Authorization code grant: This is the most common grant type, which is used when an application needs to access a user's protected
  resources, such as their contacts or files. It involves the user granting access to the application through a consent screen, and then the
  application exchanging an authorization code for an access token.
- Implicit grant: This grant type is similar to the authorization code grant, but is used for browser-based applications where the client
  secret cannot be kept secret. The access token is returned directly to the client instead of being exchanged for an authorization code.
- Resource owner password credentials grant: This grant type is used when the client already has the user's username and password and needs
  to obtain an access token directly from the authorization server.
- Client credentials grant: This grant type is used when the client needs to access its own resources, rather than a user's resources. It
  involves the client providing its own credentials to the authorization server to obtain an access token.

## Scopes

In the context of OAuth 2.0, scopes are used to specify the level of access that a client application has to a protected resource. When a
client application requests authorization to access a protected resource, it specifies one or more scopes that it requires. The
authorization server then grants an access token that has permission to access only the specified scopes. Scopes provide a way to limit the
access granted to a client application, reducing the risk of unauthorized access to sensitive data. For example, an application that needs
to read a user's email address may request access to the "view:user" scope, but not to other sensitive scopes such as "update:user" or
"delete:user".

For a list of available scopes, visit the Permissions section of your dashboard. In the context of PERSCOM.io, the word Scope and Permission
are interchangeable.

## Access Token

An access token is a type of security token that is used to grant authorized access to a specific resource or system. In the context of
OAuth 2.0, an access token is issued by an authorization server (PERSCOM.io) to an authenticated client after the client successfully
presents its client credentials and an authorization grant. The access token represents the client's authorization to access a protected
resource, and is presented by the client to the resource server when requesting access to that resource.

In PERSCOM.io, we require the access token to be passed as a Bearer token in the Authorization header of any requests made to our APIs. This
ensures that the request is authenticated and authorized to access the protected resource. The access token has a limited lifespan and must
be periodically refreshed to maintain access to the protected resource.

## Refresh Token

When an access token expires, you need to obtain a new access token in order to continue accessing protected resources. You can do this by
using the refresh token grant in OAuth 2.0. To refresh an access token, you need to make a POST request to the token endpoint with the
`grant_type` set to `refresh_token`, along with the `client_id`, `client_secret`, `refresh_token`, and scope parameters. The `refresh_token`
parameter is the refresh token that you received when you first obtained the access token. The `scope` parameter should contain the same
scope(s) that were requested when the access token was initially obtained.

## Endpoints

| Endpoint               |                     URL                      | Method |
| ---------------------- | :------------------------------------------: | -----: |
| Authorization Endpoint | https://{your-dashboard-url}/oauth/authorize |    GET |
| Token Endpoint         |   https://{your-dashboard-url}/oauth/token   |   POST |
| Refresh Token Endpoint |   https://{your-dashboard-url}/oauth/token   |   POST |

## Examples

### Authorization Request

First, make an authorization request to obtain an authorization code:

**cURL**:

```vb
curl -X GET \
  'https://DASHBOARD_URL/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=SCOPES&state=STATE'
```

**HTTP**:

```http
GET /authorize?
response_type=code&
client_id=CLIENT_ID&
redirect_uri=REDIRECT_URI&
scope=SCOPES&
state=STATE&
nonce=NONCE HTTP/1.1
Host: DASHBOARD_URL
```

Replace `DASHBOARD_URL` with your actual dashboard URL, and `CLIENT_ID`, `REDIRECT_URI`, `SCOPES`, and `STATE` with your actual values. Note
that the specific parameters and endpoint URLs may vary depending on the OAuth 2.0 implementation.

### Token Request

After the user approves the request, exchange the authorization code for an access token:

**cURL**:

```vb
curl -X POST \
  'https://DASHBOARD_URL/oauth/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=REDIRECT_URI&client_id=CLIENT_ID&client_secret=CLIENT_SECRET'
```

**HTTP**:

```http
POST /token HTTP/1.1
Host: DASHBOARD_URL
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTHORIZATION_CODE&
redirect_uri=REDIRECT_URI&
client_id=CLIENT_ID&
client_secret=CLIENT_SECRET
```

Replace `DASHBOARD_URL` with your actual dashboard URL, and `AUTHORIZATION_CODE`, `REDIRECT_URI`, `CLIENT_ID`, and `CLIENT_SECRET` with your
actual values. Note that the specific parameters and endpoint URLs may vary depending on the OAuth 2.0 implementation.

### Refresh Token Request

To refresh your access token after it expires:

**cURL**:

```vb
curl -X POST \
  'https://DASHBOARD_URL/oauth/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=refresh_token&refresh_token=REFRESH_TOKEN&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&scope=SCOPES'
```

**HTTP**:

```http
POST /token HTTP/1.1
Host: DASHBOARD_URL
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&
refresh_token=REFRESH_TOKEN&
client_id=CLIENT_ID&
client_secret=CLIENT_SECRET&
scope=SCOPES
```

Replace `DASHBOARD_URL` with your actual dashboard URL, and `REFRESH_TOKEN`, `CLIENT_ID`, `CLIENT_SECRET`, and `SCOPES` with your actual
values. Note that the specific parameters and endpoint URLs may vary depending on the OAuth 2.0 implementation.
