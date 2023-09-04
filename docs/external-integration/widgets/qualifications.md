# Qualifications Widget

The qualifications widget outputs a table-based list of your qualifications as they are in your dashboard.

**Widget ID**: `qualifications`

## Code Snippet

Below is an example HTML code snippet that will output your qualifications.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="qualifications"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Examples

The following is an example of the qualifications widget being displayed within the PERSCOM.io application.

![Widget Qualifications Preview](https://perscom-cdn.s3.amazonaws.com/images/qualifications-preview-1.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `view:qualification` Can view a qualification.
