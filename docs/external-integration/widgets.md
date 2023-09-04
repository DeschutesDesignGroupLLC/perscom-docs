# Widgets

PERSCOM.io offers powerful widgets that allow the integration of your organizational data into another website for display. Each widget is a
snippet of HTML that can be injected into your website.

## Choosing The Widget

Each widget uses the same HTML code snippet to display the data. However, to set which widget you would like outputted, you must set the
`data-widget` attribute to the intended Widget ID. The available options are listed below.

```html
<div id="perscom_widget_wrapper">
    <script
        id="perscom_widget"
        data-perscomid="PERSCOMID"
        data-apikey="APIKEY"
        data-widget="roster" // [!code focus]
        src="https://widget.perscom.io/widget.js"
        type="text/javascript"
    ></script>
</div>
```

## Available Widgets

The following widgets are currently available. Each widget is identified by a Widget ID that is passed to the `data-widget` attribute.

1. [Roster](/external-integration/widgets/roster) `data-widget='roster'`
2. [Awards](/external-integration/widgets/awards) `data-widget='awards'`
3. [Calendar](/external-integration/widgets/calendar) `data-widget='calendar'`
4. [Forms](/external-integration/widgets/forms) `data-widget='forms'`
5. [Newsfeed](/external-integration/widgets/newsfeed) `data-widget='newsfeed'`
6. [Qualifications](/external-integration/widgets/qualifications) `data-widget='qualifications'`
7. [Ranks](/external-integration/widgets/ranks) `data-widget='ranks'`

## Authentication and Authorization

Each widget requires the creation of an API key. Generating an API key is a simple process that can be accomplished in your dashboard.
Creation and management of API keys requires the `manage:api` permission. Contact your account administrator if you cannot access the API
section within your dashboard.

Depending on the widget you intend to display, the API key will need specific scopes assigned. You can visit the individual widget page for
a list of the required API key scopes needed to properly display the widget.

Second, each widget requires your PERSCOM ID which can be found in the general settings area of your dashboard.

These two items will be inserted into the widget when you add them to your website. Failure to add these values with result in an
authentication error when viewing the widget.

Click [here](/external-integration/api) for more documentation on the API.

## Options

The widget accepts several options to customize the output of the data.

| Option    | Required |  Type   | Description                                                                                                                                                                                                                                                                               |
| --------- | :------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apikey    |   yes    | string  | The API key used to authenticate the request.                                                                                                                                                                                                                                             |
| limit     |    no    | integer | Adding the limit option will control how many results are returned from the widget. By default, the widget will return 15 results. When more than 15 results are present, the table will be presented with a pagination option. Increase or decrease the limit to fit your website needs. |
| perscomid |   yes    | integer | The ID of your PERSCOM.io account used to authenticate the request.                                                                                                                                                                                                                       |
| resource  |    no    | integer | The ID of a specific resource that will be returned such as a specific form.                                                                                                                                                                                                              |
| timezone  |    no    | string  | The timezone any date object should be translated to. The ID of a specific resource that will be returned such as a specific form.                                                                                                                                                        |
| widget    |    no    | string  | The ID of the [widget](#available-widgets) you would like to output. The ID of a specific resource that will be returned such as a specific form.                                                                                                                                         |

<!-- prettier-ignore -->
::: info Including An Option
Each option must be prefixed with `data-` within the HTML snippet. For example, to specify the `apikey` option, the parameter must be set as `data-apikey="xxx"`. See [Choosing The Widget](#choosing-the-widget) for an example.
:::

## Customization

The widgets are embedded within an `iframe` HTML element that prevents the host website from overriding and altering the styling of the
widget. While this may seem like a disadvantage, it helps prevent the unwanted style changes to the widget that can happen by the hosting
website. However, the widget is wrapped in a parent div that may be customized to alter how the `iframe` is embedded within your website.
See the example below on how to customize the `perscom_widget_wrapper`.

### Example

In the following example, we are going to adjust the height of the parent div to fit the widget appropriately. The CSS is added just above
the code snippet for it to take affect.

```html
<style>
  #perscom_widget_wrapper {
    height: 500px;
  }
</style>

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="roster"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Externally Accessing The Widget

The PERSCOM.io widget can be accessed outside of the HTML code snippet that you used to post within your website. To see your widget live,
without embedding it in a website, you can visit the URL's below. The `widgetId` corresponds with the [ID](#choosing-the-widget) of the
widget you intend to view. Make sure to set `apiKey` and `perscomId` to the correct values.

```html
https://widget.perscom.io/{widgetId}?apikey={apiKey}&perscomid={perscomId}
```

## Development

The PERSCOM.io Widget project is **open source** and actively looking for developers to participate. If you have experience with frontend
frameworks such as React, we encourage you to contribute.

<!-- prettier-ignore -->
::: tip Repository
You can view the project on
[Github](https://github.com/DeschutesDesignGroupLLC/PERSCOM-3.0-Widget).
:::
