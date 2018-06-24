//agregarEventoLoad(iniciar_instalar);
function iniciar_instalar(){
	document.getElementById("btnAceptaIns").style.display="none";
	agregarEvento("btnInstalar","click",function(){
			document.getElementById("divLoad").style.display="block";
			registrarDatoOff(globales._URL_BE+"controlador/controlador_instalar_db.php","",{},function(rs){
				//mostrarMensaje(rs);						
				if(rs.respuesta){
                                        document.getElementById("divLoad").style.display="none";
					consultar_db();
				}

			},"");

	});

}	
