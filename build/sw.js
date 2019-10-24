importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//custom code

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "64cbaaf7e71393a47b74126689cfcef6"
  },
  {
    "url": "index.html",
    "revision": "ca5786512744ce868477df0b785920f5"
  },
  {
    "url": "js/app.js",
    "revision": "5220fc2a867e03a339b6bd180ec9231e"
  }
]);
