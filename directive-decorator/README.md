This example shows how you can **override** the value in the custom directive's isolated scope in case you have one global parameter.


## WAT?

This experiment consists of 2 main parts:

 * `hint` directive - the directive show some text based on the 'user' attribute
 * directive decorator (see `app.js`)

Hint is a *reusable directive* with isolated scope, configured using its attributes (widget).

Decorator puts some **default value** in the directive's scope.

## Profit?

This approach prevents directive user from specifying `user="someUser"` each time in the template.

Without the decorator you have to pass the `User` instance to each `hint` occurrence:
```html
   <div hint user="someUser">
   <p hint user="someUser">
```

With the decorator you can simply use the directive without the attribute:
```html
   <div hint>
   <p hint>
```