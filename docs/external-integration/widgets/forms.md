# Forms Widget

The forms widget outputs a table-based list of your forms with a link to submit the form. The widget also supports outputting one specific
form.

**Widget ID**: `forms`

## Authentication and Authorization

Forms can be submitted by the general public. A form will be set to guest within the PERSCOM.io application when submitted via the widget.
If you would like to protect your form from being submitted, make sure to place the widget within a webpage that is protected via some form
of authentication flow on your website.

## Displaying A Specific Form

You can display a specific form by including the `data-resource` option set to the ID of the form you wish to display.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="forms"
    data-resource="1" // [!code focus]
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Code Snippet

Below is an example HTML code snippet that will output your forms.

```html
<!-- Place the code block where you would like the widget displayed on your website. !-->
<!-- Replace APIKEY and PERSCOMID with your API key and PERSCOM ID, respectively. !-->

<div id="perscom_widget_wrapper">
  <script
    id="perscom_widget"
    data-perscomid="PERSCOMID"
    data-apikey="APIKEY"
    data-widget="forms"
    src="https://widget.perscom.io/widget.js"
    type="text/javascript"
  ></script>
</div>
```

## Examples

The following is an example of the forms widget being displayed within the PERSCOM.io application.

![Widget Forms Preview](https://perscom-cdn.s3.amazonaws.com/images/forms-preview-1.png)

![Widget Forms Form Preview](https://perscom-cdn.s3.amazonaws.com/images/forms-preview-2.png)

## Scopes

The following scopes will need to be added to your API key to properly display the data.

- `create:submission` Can create a form submission.
- `update:field` Can update a custom field.
- `view:form` Can view a form.
- `view:submission` Can view a form submission.
