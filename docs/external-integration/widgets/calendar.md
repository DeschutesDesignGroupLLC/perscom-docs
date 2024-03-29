# Calendar Widget

The calendar widget outputs a month-based calendar view with all the events listed.

**Widget ID**: `calendar`

## Code Snippet

Below is an example HTML code snippet that will output your calendar.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

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

The following is an example of the calendar widget being displayed within the PERSCOM.io application.

![Calendar Preview](https://raw.githubusercontent.com/DeschutesDesignGroupLLC/perscom-docs/master/resources/calendar-preview.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:calendar` Can view a calendar.
- `view:event` Can view an event.
