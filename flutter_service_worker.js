'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "a853619b6b2937b7c24ced94230f9f34",
"assets/AssetManifest.bin": "6ba9681f400972ed8f22d711ac79e3ea",
"assets/AssetManifest.bin.json": "d5e746a899c28e00442956b51fca957e",
"assets/AssetManifest.json": "2c9f3d31dc5d4045db758072087a0fa1",
"assets/assets/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/app_icon.png": "f451b959e0e14691d29f4d2d1e4f208d",
"assets/assets/app_icon_music.png": "0b952f8dfe6f233ef6526badc3662238",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/copyright_logo.png": "7d3bdd5f4dcfca2df850b0935a48c4f4",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/hfa_logo.png": "075426d9b1898a9a7b9ed372a862453f",
"assets/assets/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/isrc_logo.png": "9380ec6454483a7b255aee7cf3c8ee05",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_medallion.png": "0ccdfc66f9452c5629c5dc78e83d7113",
"assets/assets/logo_medallion_orb.png": "6a6050590b39c4c649133dbf6c2bf813",
"assets/assets/logo_medallion_simple.png": "73b7f834e75535247dfc3294142d9b87",
"assets/assets/logo_medallion_with_eq.png": "d6e487471608aba5de84346cd4ecbae9",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/luminate_logo_dark.png": "2aa5747a17b9f7e617792bcda787e7d2",
"assets/assets/luminate_logo_light.png": "d97d5bc9e8a7efde9a000c1b4c5ccd7a",
"assets/assets/mediabase_logo.png": "ca0e38272fc77015aa4070d27db7ca64",
"assets/assets/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/music_book.png": "bd5221e41c272c972d090266905a013a",
"assets/assets/play_store_feature_graphic.png": "8bcb10e4ef7973a7550bf2312263b265",
"assets/assets/pro_logo.png": "591670d4d7fcba3b86d245f38d309dcb",
"assets/assets/scapegoats_text_logo.png": "7d8bbfdbffdd1d5d17b71892afa89c67",
"assets/assets/sg_lp_record.png": "5d418c9777ea1da288ac50fd8e6234fb",
"assets/assets/sg_origins_logo.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"assets/assets/soundexchange_logo.png": "8eb73f9a1cb8afec51556dd478b48144",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_copyright.txt": "fc8a7182ef0403a1ecbb756e754561b8",
"assets/assets/tos/tos_hfa.txt": "0dc5c57c45f45f37edd0d759ba11a18e",
"assets/assets/tos/tos_isrc.txt": "6485bca43103ac4d727d197102404fde",
"assets/assets/tos/tos_luminate.txt": "4d873d7c0108cc910300eedc9fb2d170",
"assets/assets/tos/tos_mediabase.txt": "c7664296d092e20eb00dfa2e89b4ad3a",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_pro.txt": "4f37f4bd0ccf706ece3c2c7c64a5cb53",
"assets/assets/tos/tos_sx.txt": "d4908b1e39cc61772e5d74e5fb77d241",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/assets/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c7b015a366e7d9c418b03954f38663af",
"assets/lib/env/env.g.dart": "abd0af639491b9d1a0ad71de01971e26",
"assets/NOTICES": "e8bcb15cb645999136e4da3f14ce3801",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a392a260f2bfc7d8a22861df44f6add1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a1ce4516bff815ae3dccf2326c590332",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "e2eb233a8b5d354c19e31002b8126a5e",
"icons/android-icon-192x192.png": "2a07f1f2c473906936b9bb69572fa60f",
"icons/android-icon-36x36.png": "d0469ea2bc3e803788670b3613976bf4",
"icons/android-icon-48x48.png": "8e2bec4ce4a6a21338e3a909ded542ce",
"icons/android-icon-72x72.png": "ff32880201c348a75da95bcbfd2f9fcc",
"icons/android-icon-96x96.png": "665435d2f99824d1299ee5db3f150153",
"icons/apple-icon-114x114.png": "c8873a17c597a3aa4aa1f97ec25c3fcd",
"icons/apple-icon-120x120.png": "248e6b401ecb8b2c3e19569ce14d732d",
"icons/apple-icon-144x144.png": "e2eb233a8b5d354c19e31002b8126a5e",
"icons/apple-icon-152x152.png": "9f811ac192eb81e45df39015a8eb2d3c",
"icons/apple-icon-180x180.png": "88ca268fe8923fbd4f0d261f77db5c09",
"icons/apple-icon-57x57.png": "1366918ac805bf8e4c11114131f7d0c5",
"icons/apple-icon-60x60.png": "e93c8ca492d9e55a4f16842c5d5db2a0",
"icons/apple-icon-72x72.png": "ff32880201c348a75da95bcbfd2f9fcc",
"icons/apple-icon-76x76.png": "74f64125585a6b15c183d0301907151b",
"icons/apple-icon-precomposed.png": "d1fe08ba1151d48f006225885c4370b6",
"icons/apple-icon.png": "d1fe08ba1151d48f006225885c4370b6",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "f39311e23a916864babe4749831f1ac8",
"icons/favicon-32x32.png": "585f76623ba32552ea020d0870d92dde",
"icons/favicon.ico": "3a9f00202ac5722e8f6e2fbf53a05d8a",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-70x70.png": "b0c33084b4120063121852a6a9edfaf9",
"images/geareyewhite-72-500sq.png": "835778cf4df1da37af6f676551f35a35",
"index.html": "c206b0b44c2cccc4ad26c51343dd9d70",
"/": "c206b0b44c2cccc4ad26c51343dd9d70",
"main.dart.js": "ae8cf2d2c3484a459d7a2153ec67176c",
"manifest.json": "720d9e1fa510f5cd7c5a7b89be85d279",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-dark-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-dark-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "136772325ab504e28af3efe680b3547e",
"splash/img/dark-2x.png": "83935c1b56887847080816c415466778",
"splash/img/dark-3x.png": "48ec8fd7111a211d97203505029d9085",
"splash/img/dark-4x.png": "ff6564304e11918272859537c522a246",
"splash/img/light-1x.png": "136772325ab504e28af3efe680b3547e",
"splash/img/light-2x.png": "83935c1b56887847080816c415466778",
"splash/img/light-3x.png": "48ec8fd7111a211d97203505029d9085",
"splash/img/light-4x.png": "ff6564304e11918272859537c522a246",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"version.json": "a366f37a52176d4686fbb0d2f3161517"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
