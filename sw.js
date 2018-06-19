self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/estilo/evento.css',
        '/estilo/inicio.css',
        '/estilo/menu.css',
        '/estilo/menuEventos.css',        
        '/Js/inicio.js',
        '/Js/menu.js',
        '/script_data/funciones/CrudBase.js',
        '/script_data/funciones/formatos.js',
        '/script_data/funciones/peticiones_ajax.js',
        '/script_data/funciones/storage.js',
        '/script_data/funciones/utilidades.js',
        '/script_data/prototipos/prototipos.js',
        //'/script_data/index/registro.js',
        //'/script_data/globales.js',
        '/script_data/index.js',
        '/script_data/jquery.js',
        '/script_data/menu_eventos.js',
        '/script_data/participantes.js',
        //'/script_data/actualizar_registro_participantes.js',
        '/script_data/offline.js',
        'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
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
       
      });
    }
  }));
});
