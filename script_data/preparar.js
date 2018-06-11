function iniciar_menu_preparar(){
	/*agregarEvento("btnContactar","click",function(){
			var datos = $("#formContacto").serializarFormulario();
			datos.origen="info@jedidiassalud.com";
			console.log(datos);
			if(false!=datos){
				registrarDato("contactar_pg_construccion",datos,function(rs){
					mostrarMensaje(rs);
				},"formContacto");
			}else{
				mostrarMensaje("Por favor ingresa los campos requeridos");
			}
	});*/

	globales._usuario=obtener_session_storage("ssUsuario");
	//console.log(globales);
	
	
	consultarDatosOff(globales._URL_BE+"controlador/controlador_usuario.php","validar_db",{},function(rs){
			    console.log(rs);
			    mostrarMensaje(rs);    
			    if(rs.respuesta){
			    	document.getElementById("btnInstalar").style.display="none";
			    	document.getElementById("btnPreparar").style.display="block";
				}else{
			    	document.getElementById("btnInstalar").style.display="block";
			    	document.getElementById("btnPreparar").style.display="none";
			    }
	});
	
	agregarEvento("btnPreparar","click",function(){
		    
			registrarDatoOff(globales._URL_BE+"controlador/controlador_preparar.php","",{user:globales._usuario.email,pass:globales._usuario.pass,id:globales._usuario.id},function(rs){
			    console.log(rs);
			    var msn="";
			    for(var r in rs){

			    	msn+=rs[r].mensaje+"\n";
			    }
			    
			    mostrarMensaje(msn); 
			});
	});
	
}

agregarEventoLoad(iniciar_menu_preparar);