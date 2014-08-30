This is the example of declarative logic wiring in templates.

## WAT?

1. `resource` directive fetches model from the REST endpoint.
2. `model` diretive assign the model to the custom `user` directive.
3. When the model is fetched - the custom directive prints the username
4. **This is a first rough attempt**: no resource dependencies

## Profit?

1. Declarative resource fetching - no logic in controller
1. The fetched model is binded to the controller's scope in the template with `base.` prefix
1. All data relationships and binding between the resource and `user` directive is explicit in the template
1. You can see all scope variables in a single template file

## Notes

1. `model` service and `model` directive are meant to be reusable components
1. `resource` directive is meant to be a reusable component
2. `model` service can be changed to `reactTo` service
3. `<user model="base.user">` syntax can be changed to

    option 1:
    ```html
    <model model="base.user">
      <user></user>
    </model>
    ```

    option 2:
    ```html
    <user>
      <model model="base.user"></model>
    </model>
    ```

## Live code

[See the example at plnkr](http://plnkr.co/edit/IzHdd54GQ5FSnBT6o8XX?p=preview)