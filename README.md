# Histoire Nuxt 3 Module loading bug reprodution

## install

`yarn`

## How it should work

`yarn dev`

```The module gets loaded....```
Module is loaded correctly.
If you open the page in a browser, you can see in the console, that the plugin is also installed.

## What happens with Histoire
Running `yarn story:dev` results in loading the Module, but not the plugin, so the second message is never printed to the console.