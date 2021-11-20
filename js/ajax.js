<script type="text/javascript" src="../js/jquery-1.4.2.min.js"></script>  
<script type="text/javascript">  
$(document).ready(function(){  
  
    $('#boton_cargar').click(function() {  
        $.ajax({  
            url: 'index.html',  
            success: function(data) {  
                $('#div_dinamico').html(data);  
            }  
        });  
    });  
  
    $('#boton_cargar_anim').click(function() {  
        $.ajax({  
            url: 'mapa.html',  
            success: function(data) {  
                $('#div_dinamico_anim').html(data);  
                $('#div_dinamico_anim div').slideDown(1000);  
            }  
        });  
    });  
  
});  
</script>  