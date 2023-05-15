# Webhooks

For PERSCOM.io, webhooks can be used to enable real-time notifications and data updates for third-party services, such as a messaging
platform, an external database or a custom reporting tool. This means that any changes made within PERSCOM.io, such as new personnel records
or updated qualifications, can be automatically communicated to other systems in real-time, without the need for manual data entry or
synchronization. This can improve data accuracy and save time for personnel managers and other staff who rely on the system for critical
information.

## Creating A Webhook

Webhooks can be managed via your PERSCOM.io dashboard. Webhooks require a URL that will be notified each time an event takes place that the
webhook is subscribed to. Webhooks can either make a `GET` or `POST` HTTP request. Each HTTP request will be signed with a user-defined
secret that may be used to verify that the payload has not been tampered with. The signed signature will be available within the `Signature`
header of the HTTP request.

A list of available events that a webhook may subscribe to is located below.

<!-- prettier-ignore -->
::: warning
You must have the `manage:webhook` permission assigned to your account to manage webhooks.
:::

## Events

The following is a list of events that a webhook may subscribe to.

- assignmentrecord.created
- assignmentrecord.updated
- assignmentrecord.deleted
- awardrecord.created
- awardrecord.updated
- awardrecord.deleted
- calendar.created
- calendar.updated
- calendar.deleted
- combatrecord.created
- combatrecord.updated
- combatrecord.deleted
- event.created
- event.updated
- event.deleted
- qualificationrecord.created
- qualificationrecord.updated
- qualificationrecord.deleted
- rankrecord.created
- rankrecord.updated
- rankrecord.deleted
- servicerecord.created
- servicerecord.updated
- servicerecord.deleted
- user.created
- user.updated
- user.deleted

## Consuming The Webhook

A webhook will need a server that has an exposed URL that can respond to incoming HTTP requests via `GET` or `POST`. Included below are some
example endpoints using common web server frameworks.

Each webhook has a real-time log of each HTTP request that is made when an event is triggered. For reference on how to consume the webhook
payload request, use the webhook's log to help understand how the data is structured and what is sent with each webhook request.

### Examples

::: code-group

```js:line-numbers [Express.js]
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const data = req.body;
  // do something with the data
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook endpoint listening on port 3000');
});
```

```csharp:line-numbers [ASP.net]
using System.IO;
using System.Web;
using System.Web.Mvc;

public class WebhookController : Controller
{
    [HttpPost]
    public ActionResult HandleWebhook()
    {
        using (var reader = new StreamReader(Request.InputStream))
        {
            var json = reader.ReadToEnd();
            var data = JsonConvert.DeserializeObject(json);

            // do something with the data

            return new HttpStatusCodeResult(200);
        }
    }
}
```

```python:line-numbers [Flask]
from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    # do something with the data
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True)
```

```php:line-numbers [Laravel]
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function handleWebhook(Request $request)
    {
        $data = $request->json()->all();

        // do something with the data

        return response('OK', 200);
    }
}
```

```ruby:line-numbers [Ruby on Rails]
class WebhookController < ApplicationController
  skip_before_action :verify_authenticity_token

  def handle_webhook
    data = JSON.parse(request.body.read)

    # do something with the data

    head :ok
  end
end
```

:::

## Third-Party Services

There are many third-party services that can be used to consume webhooks and boost your workflow.

- [Zapier](https://zapier.com/apps/webhook/integrations?utm_source=google&utm_medium=cpc&utm_campaign=gaw-usa-nua-search-desktop-brand-long_tail&utm_adgroup=brand_webhooks&utm_term=zapier%20webhooks&utm_content=_pcrid_608807048130_pkw_zapier%20webhooks_pmt_p_pdv_c_slid__pgrid_139730155338_ptaid_kwd-791619834414_&gad=1&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfi6Vipyao0gBfuRIx445ZmVPfJSmZBQX0qK9XEIMlDg5zcukzFtnUxoCp4gQAvD_BwE):
  Zapier lets you connect Webhooks by Zapier with thousands of the most popular apps, so you can automate your work and have more time for
  what matters most—no code required.
