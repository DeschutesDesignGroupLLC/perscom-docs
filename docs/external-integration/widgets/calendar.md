# Calendar Widget

The calendar widget outputs a month-based calendar view with all the events listed.

## Code Snippet

<!-- prettier-ignore -->
::: info 
Make sure to replace APIKEY and PERSCOMID with the appropriate values. 
:::

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM Account ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="calendar"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Examples

The following is an example of the Calendar Widget being displayed within the PERSCOM Application.

![Widget Calendar Preview](https://perscom-cdn.s3.amazonaws.com/images/calendar-preview-1.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:event` Can view an event.
