/* Scroll to Main Menu
================================================== */
$('#menu a[href*=#]').click( function(event) {
    var $this = $(this);
    var offset = -124;
    $.scrollTo( $this.attr('href') , 1650, { easing: 'swing' , offset: offset , 'axis':'y' } );
    event.preventDefault();
});




/*$(document).ready(

    // Codigo menu emergente
    //Mostrar y ocultar menu en mobil.
    function () {
        //Clickar icono menú
        var contador = 1;
        $('.menu_bar').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        });
        //Ocultar menú despues de hacer selección.
        $('.nav-superior li').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        }); 
    }
     
);*/


$(document).ready(function() {
    if (screen.width<=939) {
        // Codigo menu emergente
        //Mostrar y ocultar menu en mobil.
        //Clickar icono menú
        var contador = 1;
        $('.menu_bar').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        });
        //Ocultar menú despues de hacer selección.
        $('.nav-superior li').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        }); 
        
    } else  {
    }
});