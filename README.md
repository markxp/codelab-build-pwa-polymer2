# PWA example in polymer from google codelab

[codelab](https://codelabs.developers.google.com/codelabs/pwa-from-scratch)
Transport to polymer 2
This example build a chrome developer channel skelton in PWA way.

## step 4 configuring the entrypoint

[app shell](https://developers.google.com/web/fundamentals/architecture/app-shell) contains basic UI and should be cached in browser.
[service worker](https://developers.google.com/web/fundamentals/primers/service-workers) is one of web workers that intercept network connectivity. We use service workers to read cached data locally. (You have to use https protocol)

## step 5 building the app shell

An app shell has:

- basic UI
- logic to switch pages (fragments) based on a given route.
- It sites on [critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/), and should be as light as possible.
- lazy loading for resources that are unnecessary for first meaningful paint.

note:
web component dependencies: `bower install --save PolymerElements/app-route#^2`
CSS : `@apply` does not require parentheses

We does not create an event listener (setup-toolbar)

### step 6 adding the rest of the elements

In this step, we learn how to defined our own iconset.

Your iconset should use <iron-iconset-svg> to defined a set of images. see show-icons.html.

