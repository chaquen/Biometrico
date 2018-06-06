

agregarEventoLoad(iniciar_evento_actualizar);
var data={id:undefined};
function iniciar_evento_actualizar(){
	var source = new EventSource(globales._URL_BE+'controlador/controlador_server.php');

	source.addEventListener('message', function(event) {
	  data = JSON.parse(event.data);
	  console.log(data);
	  if(data.id!=undefined){
	  	 source.close();
	  	console.log(data.id);
	  }
	}, false);

	source.addEventListener('open', function(event) {
	  //logger.log('> Connection was opened');
	  //console.log(event.data);
	  //var data = JSON.parse(event.data);
	  //console.log(data);
	  if(data.id!=undefined){
	  	 source.close();
	  	console.log(data.id);
	  }
	  
	}, false);

	source.addEventListener('error', function(event) {
	  if (event.eventPhase == 2) { //EventSource.CLOSED
	    //logger.log('> Connection was closed');
	  	console.log(event);  
	  }
	}, false);
}

function closeConnection() {
  source.close();
  
}