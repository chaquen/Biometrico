var dep;
var pos;
function iniciar_evento_sync(){
	agregarEvento("btnSync","click",function(){
		//consultarDatosOff(url,evento_server,datos,funcion_despues)
		consultarDatosOff(globales._URL+"controlador/controlador_sincronizar.php","",{},function(rs){
	        console.log(rs);
		        
		        
	        
    	});
	});
}


agregarEventoLoad(iniciar_evento_sync);