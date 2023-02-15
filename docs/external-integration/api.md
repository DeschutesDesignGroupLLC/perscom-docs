# API

The PERSCOM.io API is the backbone that allows PERSCOM.io to function and deliver the services you've come to enjoy. They also allow you to
integration of your PERSCOM.io data with third-party services.

## API Keys

API keys can be created and managed from within the External Integration section of your Dashboard. Each API key is a JSON Web Token (JWT)
that contains critical information that is used to authenticate and authorize each request. For debugging, you may use the link below to
decode your JWT to view its contents and verify your API key has the necessary claims (scopes) to make each request you intend to make.

To read more about JWT's, visit [JWT.io](http://jwt.io).

Once you have created an API key, you must pass it as a `Bearer` token within the `Authorization` header of each request. For more
information, visit the [Using The API](#using-the-api) section.

<!-- prettier-ignore -->
::: warning
You must have the `manage:api` permission assigned to your account to manage API keys.
:::

## Scopes

Each API key can be assigned scopes that define what the API key is allowed to access. The API keys scopes are an exact replica of the
permissions that can be assigned to users within your Dashboard. For a complete list of scopes, visit the permissions section of your
Dashboard.

<!-- prettier-ignore -->
::: warning
You must have the `Admin` role assigned to your account to manage and view your permissions and scopes.
:::

## Using The API

The following section describes how to use the PERSCOM.io API with examples. Documentation on each available endpoint can be found
[here](https://perscom.io/documentation/api). Each request made to the PERSCOM.io API requires an API key and your PERSCOM ID. For more
information on creating an API key, visit the [API Keys](#api-keys) section.

The following example will show making a request to the `/users` endpoint which displays all users within your organization. Your API key
will need the `view:user` scope assigned to make the following request. The `perscomId` and `apiKey` variables will also need to be replaced
in each example with the correct values.

::: code-group

```php:line-numbers [PHP]
use GuzzleHttp\Client;

// Create a client with a base URI
$client = new Client([
    'base_uri' => 'https://api.perscom.io/v1/',
    'timeout' => 2.0,
    'headers' => [
      'Accept' => 'application/json',
      'X-Perscom-Id' => $perscomId,
      'Authorization' => "Bearer ${apiKey}"
    ]
]);

// Send a request to https://api.perscom.io/v1/users
$response = $client->request('GET', 'users');
```

```js:line-numbers [Javascript (fetch)]
fetch('https//api.perscom.io/v1/users', {
  method: 'GET',
  headers: {
    'X-Perscom-Id': perscomId,
    Authorization: `Bearer ${apiKey}`,
    Accept: 'application/json'
  }
})
  .then((response) => response.json())
  .then((data) => {
    console.table(data)
  })
  .catch((e) => {
    console.log(e)
  })
```

```js:line-numbers [Javascript (axios)]
var axios = require('axios')

axios
  .get('https://api.perscom.io/v1/users', {
    headers: {
      'X-Perscom-Id': perscomId,
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json'
    }
  })
  .then(function (response) {
    console.table(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })
```

:::

## Documentation

Our software automatically generates the API documentation and is deployed for use following the OpenAPI 3.0 spec. If you notice an error,
please submit a support ticket or visit our community forums.

Click [here](https://perscom.io/documentation/api) to view the API documentation.

<!-- prettier-ignore -->
::: tip Using With Postman
The PERSCOM.io API can be imported into Postman for testing and development. To use Postman, click Import -> Link and paste the following link to import the API spec.
<br><br>
[https://api.perscom.io/v1/spec.yaml](https://api.perscom.io/v1/spec.yaml) 
:::
