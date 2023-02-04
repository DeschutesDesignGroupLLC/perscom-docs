# Roster Widget

The roster widget outputs a table-based list of your personnel, similar to the roster within your Dashboard.

## Code Snippet

<!-- prettier-ignore -->
::: info 
Make sure to replace APIKEY and PERSCOMID with the appropriate values. 
:::

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key with the ‘access:widget' scope and PERSCOM ID, respectively. !-->

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

## Example

The following is an example of the Roster Widget being displayed within an Invision Community website.

![Invision Widget Preview](https://assets.perscom.io/images/widget-invision-preview-2.png)
