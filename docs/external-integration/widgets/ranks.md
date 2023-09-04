# Ranks Widget

The ranks widget outputs a table-based list of your ranks as they are in your dashboard.

**Widget ID**: `ranks`

## Code Snippet

Below is an example HTML code snippet that will output your ranks.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="ranks"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Examples

The following is an example of the ranks widget being displayed within the PERSCOM.io application.

![Widget Ranks Preview](https://perscom-cdn.s3.amazonaws.com/images/ranks-preview-1.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:rank` Can view a rank.
