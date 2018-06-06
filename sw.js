self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/Biometrico/',
        '/Biometrico/index.html',
        '/Biometrico/estilo/evento.css',
        '/Biometrico/estilo/inicio.css',
        '/Biometrico/estilo/menu.css',
        '/Biometrico/estilo/menuEventos.css',        
        '/Biometrico/Js/inicio.js',
        '/Biometrico/Js/menu.js',
        '/Biometrico/script_data/funciones/CrudBase.js',
        '/Biometrico/script_data/funciones/formatos.js',
        '/Biometrico/script_data/funciones/peticiones_ajax.js',
        '/Biometrico/script_data/funciones/storage.js',
        '/Biometrico/script_data/funciones/utilidades.js',
        '/Biometrico/script_data/prototipos/prototipos.js',
        '/Biometrico/script_data/index/registro.js',
        //'/Biometrico/script_data/globales.js',
        '/Biometrico/script_data/index.js',
        '/Biometrico/script_data/jquery.js',
        '/Biometrico/script_data/menu_eventos.js',
        '/Biometrico/script_data/participantes.js',
        '/Biometrico/script_data/actualizar_registro_participantes.js',
        '/Biometrico/script_data/offline.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        //return caches.match('/Biometrico/gallery/myLittleVader.jpg');
      });
    }
  }));
});
