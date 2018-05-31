$(document).ready(function(){
    $('#descarga').click(function(){
        $('#ventanaDescarga').fadeIn('slow');
    });
    
    $('.salir').click(function(){
        $('.mascara, .contenedor').fadeOut('slow');
    });
    
    $('#btn_RegitrarP').click(function(){
        $('#contenedorP').fadeIn('slow');
    });
    $('#btn_RegitrarT').click(function(){
        $('#contenedorT').fadeIn('slow');
    });
});