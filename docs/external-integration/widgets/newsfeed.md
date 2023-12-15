# Newsfeed Widget

The newsfeed widget outputs your newsfeed as it is in your dashboard.

**Widget ID**: `newsfeed`

## Code Snippet

Below is an example HTML code snippet that will output your newsfeed.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="newsfeed"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Examples

The following is an example of the newsfeed widget being displayed within the PERSCOM.io application.

![Newsfeed Preview](https://raw.githubusercontent.com/DeschutesDesignGroupLLC/perscom-docs/master/resources/newsfeed-preview.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:announcement` Can view an announcement.
- `view:assignmentrecord` Can view an assignment record.
- `view:awardrecord` Can view an award record.
- `view:combatrecord` Can view a combat record.
- `view:qualificationrecord` Can view a qualification record.
- `view:rankrecord` Can view a rank record.
- `view:servicerecord` Can view a service record.
