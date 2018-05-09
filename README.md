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

Your iconset should use \<iron-iconset-svg\> to defined a set of images. see show-icons.html.

### step 7 the list page

This is the main video list element.
It contains the app-drawer part and the video grid list.

It fetches videoes from Chrome Developer Youtube Channel, and filters them by name.
We uses \<iron-ajax\> element to fetch Youtube Data API.
It fetches contextual data, which loads next piece of data by pageToken at the scroll threshold bound.

Polymer 2 has many syntax differences to Polymer 1 here, which covers [simple observer,
complex observer(computed property)](https://www.polymer-project.org/2.0/docs/devguide/observers),
[fire custom event](https://www.polymer-project.org/2.0/docs/devguide/events#custom-events)

### step 8 the video page

Set \<google-youtube\> element to selected video.
The element height is using CSS calc() function. For instance,
"calc(A + B)". Notice the space between operator, which is neccessary.

There is a cool [example](https://codepen.io/th61855/pen/tAzBC).

Review the custom event 'setup-toolbar' - it has two properties: leftItemIcon and leftItemClickAction.
When 'setup-toolbar' event is fired, the event object carries these two information and make the toolbar button useful.

### step 9 building for production

Build a polymer.json for prodution server.

we eliminate app.yaml from "extraDependencies" because we are going to serve on firebase.
