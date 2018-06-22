 var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    //showDialogButton.addEventListener('click', function() {
     // dialog.showModal();
    //});
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });

agregarEventoLoad(iniciar_index);
function iniciar_index(){

	agregarEvento("btnLogIn","click",function(){
			var datos = $("#formLogIn").serializarFormulario();
			
			console.log(datos);
			if(false!=datos){
				if(navigator.onLine) {

					registrarDato("login",{usuario:datos.login,pass:datos.password},function(rs){
						if(rs.respuesta){
							//mostrarMensaje(rs);
                                                        dialog.showModal();
							globales._usuario=rs.datos;	
							location.href=rs.redireccionar;
							agregar_local_storage("ssUsuario",globales._usuario);
						}else{
							//mostrarMensaje("Datos suministrados no concuerdan");
                                                        dialog.showModal();
						}					

					},"formLogIn");

    			}else{
    				registrarDatoOff(globales._URL_BE+"controlador/controlador_participantes.php","login_local",{usuario:datos.login,pass:datos.password},function(rs){
						if(rs.respuesta){
							mostrarMensaje(rs);
							globales._usuario=rs.datos;	
							location.href=rs.redireccionar;
							agregar_local_storage("ssUsuario",globales._usuario);
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

   
