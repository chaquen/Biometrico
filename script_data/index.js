agregarEventoLoad(iniciar_index);
function iniciar_index(){

	agregarEvento("btnLogIn","click",function(){
			var datos = $("#formLogIn").serializarFormulario();
			
			console.log(datos);
			if(false!=datos){
				if(navigator.onLine) {

					registrarDato("login",{usuario:datos.login,pass:datos.password},function(rs){
						if(rs.respuesta){
							mostrarMensaje(rs);
							globales._usuario=rs.datos;	
							location.href=rs.redireccionar;
							agregar_session_storage("ssUsuario",globales._usuario);
						}else{
							mostrarMensaje("Datos suministrados no concuerdan");
						}					

					},"formLogIn");

    			}else{
    				registrarDatoOff(globales._URL+"controlador/controlador_participantes.php","login_local",{usuario:datos.login,pass:datos.password},function(rs){
						if(rs.respuesta){
							mostrarMensaje(rs);
							globales._usuario=rs.datos;	
							location.href=rs.redireccionar;
							agregar_session_storage("ssUsuario",globales._usuario);
						}else{
							mostrarMensaje("Datos suministrados no concuerdan");
						}					

					},"formLogIn");

						
    			}
				
			}else{
				mostrarMensaje("Por favor ingresa los campos requeridos");
			}
	});

	
	
}