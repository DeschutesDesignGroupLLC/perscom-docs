# Awards Widget

The awards widget outputs a table-based list of your awards as they are in your Dashboard.

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
    data-widget="awards"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:award` Can view an award.
