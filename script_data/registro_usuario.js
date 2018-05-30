function iniciar_registr_usuario(){
  	agregarEvento("","click",function(){
  		var nameForm="";
			var datos = $("#"+nameForm).serializarFormulario();
			
			console.log(datos);
			if(false!=datos){
				registrarDato("usuario",datos,function(rs){
					mostrarMensaje(rs);
				},nameForm);
			}else{
				mostrarMensaje("Por favor ingresa los campos requeridos");
			}
	});

}

agregarEventoLoad(iniciar_registr_usuario);