var dep;
var pos;
function iniciar_evento_participantes(){
    globales._URL=globales._URL_BE;
    document.getElementById("contenedorP").style.display="none";
    var d=recibirValorGet();
     pos=d[0].split("=")[1];
    //console.log(d);
    //onsole.log(d[0].split("=")[1]);

    //globales._eventos=obtener_local_storage("lsEventos");
    for(var f in globales._eventos){
        if(globales._eventos[f].id==pos){
             document.getElementById("h1NombreDelEvento").innerHTML=globales._eventos[f].name;
             document.getElementById("id_evento").value=globales._eventos[f].id;
             break;
        }
    }
   
    console.log(globales._eventos[pos]);

    /*consultarDatos("data/colombia.json",{},function(rs){
        console.log(rs);
        globales._departamentos=rs;
        crear_data_list("txt_dep_nacimiento",rs,"id","departamento");
        
    });*/
    agregarEvento("btnRegistrarParticiapantes","click",function(){
        var datos = $("#formPobladores").serializarFormulario();
       
        
        if(false!=datos){
             datos.estado_registro="registrado";
             console.log(datos);
             
                //registrarDato("participantes",{datos:datos,id:data.id},function(rs){
                registrarDatoOff(globales._URL+"controlador/controlador_participantes.php","crearParticipante",{datos:datos,id:data.id},function(rs){
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
    
    
 
    agregarEvento("txt_dep_nacimiento","keypress",function(e){        
        console.log(e);
        console.log(e.key);
        dep=[];
         if (e.keyCode != 13 && e.key!=undefined) {
            for(var el in globales._departamentos){
                console.log(globales._departamentos[el].departamento.toUpperCase());
                console.log(e.key);
                console.log(globales._departamentos[el].departamento.indexOf(e.key));
                if(globales._departamentos[el].departamento.toUpperCase().indexOf(e.key.toUpperCase()) >= 0){
                    
                    //console.log(globales._departamentos[el].departamento);
                    dep.push(globales._departamentos[el]);
                }
            }
            console.log(dep)
            crear_data_list("lista_datos",dep,"id","departamento");  
         }
            
    });
    agregarEvento("txt_dep_nacimiento","change",function(e){
        console.log(e);
        dep=[];
        for(var el in globales._departamentos){
              
                if(globales._departamentos[el].id== e.srcElement.value  ){
                    
                    console.log(globales._departamentos[el].ciudades);
                    dep.push(globales._departamentos[el].ciudades);
                }
            }

            crear_data_list_dos("lista_datos_2",dep);
    });

    agregarEvento("btn_Regresar","click",function(){
        location.href="menuEventos.html";
    });
}
agregarEventoLoad(iniciar_evento_participantes);

