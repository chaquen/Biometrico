if(navigator.onLine) {
    //goOnline();
    
    globales._URL=globales._URL_ONLINE;

} else {
   goOffline();
}

//window.addEventListener('offline', goOffline());
//window.addEventListener('online', goOnline(e));

function goOnline() {
    //document.body.classList.remove('offline');
    //document.body.classList.add('online');
    // Hacer algo más al ir online
    console.log("online");
    globales._URL=globales._URL_ONLINE;
    console.log(globales);
}

function goOffline(e) {
    //document.body.classList.remove('online');
    //document.body.classList.add('online');
    // Hacer algo más al ir offline
       console.log("offline");
        globales._URL=globales._URL_OFFLINE;
        console.log(globales);
        
}