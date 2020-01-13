/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/01/12/hello-world/index.html","812ddea50860dd3f74f1b60b37780c6f"],["2020/01/13/使用GitHub+Hexo创建个人博客/img1.png","ecf16cd58872ab5ae29db309cb2326f5"],["2020/01/13/使用GitHub+Hexo创建个人博客/img10.png","15af5d9f8753a6a1b2c1df7177782d4d"],["2020/01/13/使用GitHub+Hexo创建个人博客/img11.png","d2637da165e9075e8e1880380727a135"],["2020/01/13/使用GitHub+Hexo创建个人博客/img12.png","352cf7af2c5ba115f2ab7e56b0804621"],["2020/01/13/使用GitHub+Hexo创建个人博客/img13.png","8c62b1721de6aa3b067e47ff26b07334"],["2020/01/13/使用GitHub+Hexo创建个人博客/img14.png","dec997aa6b4a6e322206e2b1a382f988"],["2020/01/13/使用GitHub+Hexo创建个人博客/img15.png","7d10d8502f893f128f34356ba56533a2"],["2020/01/13/使用GitHub+Hexo创建个人博客/img16.png","2385b807d3a9ecac0b370e0fdaf20e1d"],["2020/01/13/使用GitHub+Hexo创建个人博客/img17.png","4a2db7d954a604b79d2e234d02aa30e1"],["2020/01/13/使用GitHub+Hexo创建个人博客/img18.png","3768b077b8a29c956214bb3a3c8874fa"],["2020/01/13/使用GitHub+Hexo创建个人博客/img19.png","61b03a10924dc57469562abfdee69c10"],["2020/01/13/使用GitHub+Hexo创建个人博客/img2.png","13006d07824bfd40488b52e015ee14f3"],["2020/01/13/使用GitHub+Hexo创建个人博客/img20.png","ba79ddcc818e881e1cab0933c914c175"],["2020/01/13/使用GitHub+Hexo创建个人博客/img21.png","9bf36c0f239451cab1b76ca2fe0fb82f"],["2020/01/13/使用GitHub+Hexo创建个人博客/img22.png","2815ab3ea95113b98256466cd7e7d704"],["2020/01/13/使用GitHub+Hexo创建个人博客/img23.png","bec47b014c487522fc114cad8f3866c2"],["2020/01/13/使用GitHub+Hexo创建个人博客/img24.png","67cea25dff9fd318b1f81b8de2f58631"],["2020/01/13/使用GitHub+Hexo创建个人博客/img25.png","dbe7b410e7237f1df08fe330311de5f8"],["2020/01/13/使用GitHub+Hexo创建个人博客/img26.png","fe4dfdf3190854f9390ce5485774e7ab"],["2020/01/13/使用GitHub+Hexo创建个人博客/img27.png","aa0560e2e7dcbf4464b6dd1c2f9944e5"],["2020/01/13/使用GitHub+Hexo创建个人博客/img28.png","0fb503a0a95c6e521fcb16c8854e4d79"],["2020/01/13/使用GitHub+Hexo创建个人博客/img29.png","8c695e430fc4d59aa8f04cb553cf9581"],["2020/01/13/使用GitHub+Hexo创建个人博客/img3.png","e2a57f0ecd6cdf7556c1b9a2d566e87f"],["2020/01/13/使用GitHub+Hexo创建个人博客/img4.png","a7995c0f45427127f57b37c8194297fc"],["2020/01/13/使用GitHub+Hexo创建个人博客/img5.png","bf47ee7635654b736763f20f414408d4"],["2020/01/13/使用GitHub+Hexo创建个人博客/img6.png","d211d9b68a78c9be163439e77095631f"],["2020/01/13/使用GitHub+Hexo创建个人博客/img7.png","0cfe6ffe73e54670857f61c1dc36d66a"],["2020/01/13/使用GitHub+Hexo创建个人博客/img8.png","85c506126ee02b3c2df697c2f570c90b"],["2020/01/13/使用GitHub+Hexo创建个人博客/img9.png","990d9061e45f538295c23dee10c8296a"],["2020/01/13/使用GitHub+Hexo创建个人博客/index.html","815234ef4b49249628156af1446f6565"],["2020/01/13/使用GitHub+Hexo创建个人博客/topimg.jpg","9e807f20520257aeabeafb66cb4038ff"],["about/index.html","f075c1edaf2091d9446fb2ac7bc5bafa"],["archives/2020/01/index.html","107db9ac6ee0e86bf5597a3f83e0f9f8"],["archives/2020/index.html","8cd9187f45d46933af426dd2be4d91e8"],["archives/index.html","c4a52e084f7d4d56e0a1123cc36ca2f4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo/index.html","7498a50731b0ce49d9d055d5c483b139"],["categories/index.html","45b3a270115216369afcd8e42487e7fa"],["css/index.css","9fa7832ef3891a2c8ddb60108e8a872b"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","43cac8c9ff0dffa4f23edebf78570af7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","bf5d06529c914851bcf99db00454d2ef"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["link/index.html","220c2e2a36b8cead1c7dcf90ba048315"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["message/index.html","b32907c15f3232f80e468743db077569"],["movies/index.html","7e5cbc9dee2c2e4ffbe7635d6139562e"],["music/index.html","e3169823ff6af61ce141b13c49b7bce7"],["tags/github/index.html","8b24158b7e1bfe5f8b0ad81a19101dd8"],["tags/hexo/index.html","ea329404965784cc8a909fa1258918af"],["tags/index.html","51bb79d4e538fae9621d68953c366313"],["tags/obsidian/index.html","f87f105381e85479c7f6926d0e73476a"],["tags/themes/index.html","533606a3a01682ce17d4289fe7dcc02c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







