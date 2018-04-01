# PWA example in polymer from google codelab

[codelab](https://codelabs.developers.google.com/codelabs/pwa-from-scratch)
Transport to polymer 2
This example build a chrome developer channel skelton in PWA way.

## step4 configuring the entrypoint

[app shell](https://developers.google.com/web/fundamentals/architecture/app-shell) contains basic UI and should be cached in browser.
[service worker](https://developers.google.com/web/fundamentals/primers/service-workers) is one of web workers that intercept network connectivity. We use service workers to read cached data locally. (You have to use https protocol)
