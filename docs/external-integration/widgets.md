# Widgets

PERSCOM.io offers powerful widgets that allow the integration of your organizational data into another website for display. Each widget is a
a snippet of HTML that can be injected into your website.

<!-- prettier-ignore -->
::: info
Each widget integration requires your PERSCOM ID and the use of an API key with the `access:widget` scope assigned. Your
PERSCOM ID can be found under the general settings of your Dashboard.
:::

## Available Widgets

The following widgets are currently available.

1. [Roster](/external-integration/widgets/roster)
2. [Awards](/external-integration/widgets/awards)
3. [Ranks](/external-integration/widgets/ranks)

## Authentication and Authorization

Each widget requires the creation of an API key with the `access:widget` scope assigned. Generating API keys is a simple process that can be
accomplished in your Dashboard. Creation and management of API keys require the `manage:api` permission. Contact your account administrator
if you cannot access the API section within your Dashboard.

Second, each widget requires your PERSCOM ID which can be found in the General Settings area of your Dashboard.

These two items will be inserted into the widget when you add them to your website. Failure to add these values with result in an
authentication error when viewing the widget.

Click [here](/external-integration/api) for more documentation on the API.

## Customization

Each widget may be customized using CSS by using the uniquely named DOM elements that comprise each widget. To get started, inspect the
widget in your preferred browser so that you can see the HTML. Identify the element you would like to customize and make note of the `id`
attribute. Using the HTML `<style>` tag, add your custom CSS above the widget HTML. You can view the example below for further explanation.

### Example

In the following example, we are going to center each table column header within the roster widget. The `id` of the `<th>` element that we
are going to customize is `perscom_widget_table_header_column`. Making note of this, we have inserted the custom CSS above the widget.

```html
<style>
  #perscom_widget_table_header_column {
    text-align: center;
  }
</style>

<div id="perscom_roster" data-apikey="APIKEY" data-perscomid="PERSCOMID"></div>
<link href="https://widget.perscom.io/widget.css" rel="stylesheet" />
<script src="https://widget.perscom.io/widget.js"></script>
```

## Development

The PERSCOM.io Widget project is **open source** and actively looking for developers to participate. If you have experience with frontend
frameworks such as React, we encourage you to contribute.

<!-- prettier-ignore -->
::: tip Repository
You can view the project on
[Github](https://github.com/DeschutesDesignGroupLLC/PERSCOM-3.0-Widget).
:::
