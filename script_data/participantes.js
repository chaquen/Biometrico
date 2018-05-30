function iniciar_evento(){

    var d=recibirValorGet();
    var pos=d[0].split("=")[1];
    //console.log(d);
    //onsole.log(d[0].split("=")[1]);

    globales._eventos=obtener_local_storage("lsEventos");
    for(var f in globales._eventos){
        if(globales._eventos[f].id==pos){
             document.getElementById("h1NombreDelEvento").innerHTML=globales._eventos[f].name;
             document.getElementById("id_evento").value=globales._eventos[f].id;
             break;
        }
    }
   
    console.log(globales._eventos[pos]);


    agregarEvento("btnRegistrarParticiapantes","click",function(){
        var datos = $("#formPobladores").serializarFormulario();
        
        console.log(datos);
        if(false!=datos){
                registrarDato("participantes",datos,function(rs){
                        if(rs.respuesta==true){
                            mostrarMensaje(rs);
                        }
                        
                    
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

