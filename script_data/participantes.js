function iniciar_evento(){
    agregarEvento("btnRegistrarParticiapantes","click",function(){
        var datos = $("#formPobladores").serializarFormulario();
        
        console.log(datos);
        if(false!=datos){
                registrarDato("participantes",datos,function(rs){
                        mostrarMensaje(rs);
                },"formPobladores");
        }else{
                mostrarMensaje("Por favor ingresa los campos requeridos");
        }
    });
    
    agregarEvento("btnCancelarParticiapantes","click",function(){
        limpiarFormulario("formPobladores");
    });
    
    
    agregarEvento("btnRegistrarTrabajadores","click",function(){
        var datos = $("#formTrabajadores").serializarFormulario();
        
        console.log(datos);
        if(false!=datos){
                registrarDato("trabajadores",datos,function(rs){
                        mostrarMensaje(rs);
                },"formTrabajadores");
        }else{
                mostrarMensaje("Por favor ingresa los campos requeridos");
        }
    });
    
    agregarEvento("btnCancelarTrabajadores","click",function(){
        limpiarFormulario("formTrabajadores");
    });
}
agregarEventoLoad(iniciar_evento);

