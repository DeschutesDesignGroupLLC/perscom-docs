# API

The PERSCOM.io API is the backbone that allows PERSCOM.io to function and deliver the services you've come to enjoy. The API also allow you
to integrate your PERSCOM.io data with third-party services.

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

## PERSCOM ID

Your account is assigned a PERSCOM ID when you first register that helps identify your organization when making a request to an API
endpoint. You may view your PERSCOM ID from the Settings menu within your Dashboard. Your PERSCOM ID will need to be included with each
request to an API endpoint utilizing the `X-Perscom-Id` header. This can be seen in the examples below.

## Scopes

Each API key can be assigned scopes that define what the API key is allowed to access. The API keys scopes are an exact replica of the
permissions that can be assigned to users within your Dashboard. For a complete list of scopes, visit the permissions section of your
Dashboard.

You may also visit each component listed within this documentation to view the necessary permissions/scopes needed to interact with the
component.

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

```vb:line-numbers [cURL]
curl -X GET \
     -H "Authorization: Bearer apiKey" \
     -H "Accept: application/json" \
     -H "X-Perscom-Id: perscomId" \
     https://api.perscom.io/v1/users
```

```go:line-numbers [Go]
package main

import (
    "fmt"
    "net/http"
)

func main() {
    req, err := http.NewRequest("GET", "https//api.perscom.io/v1/users", nil)
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }

    req.Header.Add("Authorization", "Bearer apiKey")
    req.Header.Add("Accept", "application/json")
    req.Header.Add("X-Perscom-Id", "perscomId")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Status code:", resp.StatusCode)
}
```

```http:line-numbers [HTTP]
GET /v1/users HTTP/1.1
Host: api.perscom.io
Authorization: Bearer apiKey
Accept: application/json
X-Perscom-Id: perscomId
```

```java:line-numbers [Java]
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://api.perscom.io/v1/users");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Authorization", "Bearer apiKey");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("X-Perscom-Id", "perscomId");

            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            int statusCode = conn.getResponseCode();
            System.out.println("Status code: " + statusCode);
            System.out.println("Response body: " + response.toString());
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

```js:line-numbers [Javascript (fetch)]
fetch('https://api.perscom.io/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer apiKey',
    'Accept': 'application/json',
    'X-Perscom-Id': 'perscomId'
  }
})
  .then(response => {
    console.log('Status code:', response.status);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

```js:line-numbers [Javascript (axios)]
axios.get('https://api.perscom.io/v1/users', {
  headers: {
    'Authorization': 'Bearer apiKey',
    'Accept': 'application/json',
    'X-Perscom-Id': 'perscomId'
  }
})
  .then(response => {
    console.log('Status code:', response.status);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

```php:line-numbers [PHP (cURL)]
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.perscom.io/v1/users");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer apiKey",
  "Accept: application/json",
  "X-Perscom-Id: perscomId"
));
$result = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "Status code: $status_code\n";
echo "Response body: $result\n";
```

```php:line-numbers [PHP (Guzzle)]
use GuzzleHttp\Client;

$client = new Client();

$headers = [
    'Accept' => 'application/json',
    'X-Perscom-Id' => $perscomId,
    'Authorization' => "Bearer ${apiKey}"
];

$response = $client->request('GET', 'https://api.perscom.io/v1/users', [
    'headers' => $headers
]);

echo 'Status code: ' . $response->getStatusCode();
```

```python:line-numbers [Python]
import requests

url = 'https://api.perscom.io/v1/users'
headers = {
    'Authorization': 'Bearer apiKey',
    'Accept': 'application/json',
    'X-Perscom-Id': 'perscomId'
}
response = requests.get(url, headers=headers)

print(f'Status code: {response.status_code}')
print(f'Response body: {response.text}')
```

```ruby:line-numbers [Ruby]
require 'net/http'

uri = URI('https://api.perscom.io/v1/users')
req = Net::HTTP::Get.new(uri)
req['Authorization'] = 'Bearer apiKey'
req['Accept'] = 'application/json'
req['X-Perscom-Id'] = 'perscomId'

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

puts "Status code: #{res.code}"
puts "Response body: #{res.body}"
```

```rust:line-numbers [Rust]
use reqwest::header::{HeaderMap, HeaderValue, USER_AGENT, AUTHORIZATION, ACCEPT};

fn main() -> Result<(), Box<dyn std::error::Error>> {
let client = reqwest::Client::new();

    let mut headers = HeaderMap::new();
    headers.insert(AUTHORIZATION, HeaderValue::from_static("Bearer apiKey"));
    headers.insert(ACCEPT, HeaderValue::from_static("application/json"));
    headers.insert("X-Perscom-Id", HeaderValue::from_static("perscomId"));

    let response = client.get("https://api.perscom.io/v1/users")
                         .headers(headers)
                         .send()?;

    println!("Status code: {}", response.status());

    Ok(())
}
```

```scala:line-numbers [Scala]
import java.net.{URL, HttpURLConnection}
import scala.io.Source

object HttpExample extends App {
  val url = new URL("https://api.perscom.io/v1/users")
  val connection = url.openConnection().asInstanceOf[HttpURLConnection]
  connection.setRequestMethod("GET")
  connection.setRequestProperty("Authorization", "Bearer apiKey")
  connection.setRequestProperty("Accept", "application/json")
  connection.setRequestProperty("X-Perscom-Id", "perscomId")

  val responseCode = connection.getResponseCode()
  val responseBody = Source.fromInputStream(connection.getInputStream()).getLines().mkString("\n")

  println("Status code: " + responseCode)
  println("Response body: " + responseBody)
}
```

```swift:line-numbers [Swift]let urlString = "https://api.perscom.io/v1/users"
let url = URL(string: urlString)!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.addValue("Bearer apiKey", forHTTPHeaderField: "Authorization")
request.addValue("application/json", forHTTPHeaderField: "Accept")
request.addValue("perscomId", forHTTPHeaderField: "X-Perscom-Id")

let session = URLSession.shared
let task = session.dataTask(with: request) { (data, response, error) in
    guard let httpResponse = response as? HTTPURLResponse else {
        print("Error: Invalid response")
        return
    }
    let statusCode = httpResponse.statusCode
    print("Status code: \(statusCode)")
    if let data = data, let dataString = String(data: data, encoding: .utf8) {
        print("Response body: \(dataString)")
    }
}
task.resume()
```

```ts:line-numbers [Typescript]
const url = 'https://api.perscom.io/v1/users';

const headers = new Headers({
  'Authorization': 'Bearer apiKey',
  'Accept': 'application/json',
  'X-Perscom-Id': 'perscomId'
});

fetch(url, { headers })
  .then(response => {
    console.log(`Status code: ${response.status}`);
    return response.json();
  })
  .then(data => console.log(`Response body: ${JSON.stringify(data)}`))
  .catch(error => console.error(`Error: ${error}`));
```

:::

## Documentation

Our software automatically generates the API documentation and is deployed for use following the OpenAPI 3.0 spec. If you notice an error,
please submit a support ticket or visit our community forums.

Click [here](https://perscom.io/documentation/api) to view the API documentation.

## Development

The PERSCOM.io API can be imported into Postman for testing and development. To use Postman, click Import -> Link and paste the following
link to import the API spec. <br><br> [https://api.perscom.io/v1/spec.yaml](https://api.perscom.io/v1/spec.yaml)
