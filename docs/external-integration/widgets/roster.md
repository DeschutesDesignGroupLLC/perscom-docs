# Roster Widget

The roster widget outputs a table-based list of your personnel, similar to the roster within your dashboard.

**Widget ID**: `roster`

## Code Snippet

Below is an example HTML code snippet that will output your roster.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

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

## Examples

The following is an example of the roster widget being displayed within the PERSCOM.io application.

![Roster Preview](https://raw.githubusercontent.com/DeschutesDesignGroupLLC/perscom-docs/master/resources/roster-preview.png)

![Roster User Preview](https://raw.githubusercontent.com/DeschutesDesignGroupLLC/perscom-docs/master/resources/roster-preview-1.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:assignmentrecord` Can view an assignment record.
- `view:awardrecord` Can view an award record.
- `view:combatrecord` Can view a combat record.
- `view:field` Can view a custom field.
- `view:group` Can view a group.
- `view:position` Can view a position.
- `view:qualificationrecord` Can view a qualification record.
- `view:rankrecord` Can view a rank record.
- `view:servicerecord` Can view a service record.
- `view:specialty` Can view a specialty.
- `view:unit` Can view a unit.
- `view:user` Can view a user.
