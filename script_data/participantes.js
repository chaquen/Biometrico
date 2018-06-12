var dep;
var pos;
var id;
function iniciar_evento(){

function iniciar_evento_participantes(){
    globales._URL=globales._URL_BE;
    document.getElementById("contenedorP").style.display="none";
    var d=recibirValorGet();
     pos=d[0].split("=")[1];
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

    /*consultarDatos("data/colombia.json",{},function(rs){
        console.log(rs);
        globales._departamentos=rs;
        crear_data_list("txt_dep_nacimiento",rs,"id","departamento");
        
    });*/
    console.log(globales._URL);
    console.log(globales._URL+"controlador/controlador_participantes.php");
    consultarDatosOff(globales._URL+"controlador/controlador_participantes.php","consultarParticipante",{},function(rs){
        console.log(rs);   
        console.log(eval(rs.datos));
        console.log(eval(rs.registrados));
        var d=eval(rs.datos);
        if(d === null){
            dibujar_registrados(eval(rs.registrados));
            document.getElementById("contenedorP").style.display='none';
        }else{
            id=d[0].id;
            document.getElementById("contenedorP").style.display='block';
        }
        
        
    });
    agregarEvento("btnRegistrarParticiapantes","click",function(){
        var datos = $("#formPobladores").serializarFormulario();
       
        
        if(false!=datos){
             datos.estado_registro="registrado";
             console.log(datos);
             console.log(id);
             
                //registrarDato("participantes",{datos:datos,id:data.id},function(rs){
                registrarDatoOff(globales._URL+"controlador/controlador_participantes.php","crearParticipante",{datos:datos,id:id},function(rs){
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

function dibujar_registrados(datos){
    var div=document.getElementById("tblParticipantesRegistrados");
    div.innerHTML="";
    var tr=document.createElement("tr");
    
    var th=document.createElement("th");
    th.className="mdl-data-table__cell--non-numeric";
    th.innerHTML="Primer Nombre";
    tr.appendChild(th);
    
    var th=document.createElement("th");
    th.className="mdl-data-table__cell--non-numeric";
    th.innerHTML="Segundo Nombre";
    tr.appendChild(th);
    
    var th=document.createElement("th");
    th.className="mdl-data-table__cell--non-numeric";
    th.innerHTML="Primer Apellido";
    tr.appendChild(th);
    
    var th=document.createElement("th");
    th.className="mdl-data-table__cell--non-numeric";
    th.innerHTML="Segundo Apellido";
    tr.appendChild(th);
    
    div.appendChild(tr);
    for(var d in datos){
        var tr=document.createElement("tr");
        
        var td=document.createElement("td");
        td.className="mdl-data-table__cell--non-numeric";
        td.innerHTML=datos[d].pri_nombre;
        tr.appendChild(td);
        
        var td=document.createElement("td");
        td.className="mdl-data-table__cell--non-numeric";
        td.innerHTML=datos[d].seg_nombre;
        tr.appendChild(td);
        
        var td=document.createElement("td");
        td.className="mdl-data-table__cell--non-numeric";
        td.innerHTML=datos[d].pri_apellido;
        tr.appendChild(td);
        
        
        var td=document.createElement("td");
        td.className="mdl-data-table__cell--non-numeric";
        td.innerHTML=datos[d].seg_apellido;
        tr.appendChild(td);
        
        
        
        div.appendChild(tr);
    
    }
}

