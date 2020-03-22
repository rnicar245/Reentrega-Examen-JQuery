/** 
    @author Rafael Jesús Nieto Cardador
*/

$(function() {
    $('<p>Rafael Jesús</p><p>Nieto</p><p>Cardador</p>').fantasma().insertAfter($("#anulaRaton"));

    let contadorParrafos = 0;
    let contadorTitulos = 0;

    $("#creaParrafos").click(function (){
        $('<p>Párrafo '+contadorParrafos+'</p>')
        .mouseenter(function(){
            $(this).css("borderStyle", "dotted");
        }) 
        .mouseleave(function(){
            $(this).css("borderStyle", "none");
        })
        .dblclick(function(){
            $(this).css("color", "red").css("borderColor", "black");
        })
        .css("backgroundColor", generaColor)
        .appendTo($("#sectionAnnadidos"));
        contadorParrafos ++;
    });

    $("#creaTitulos").click(function () {
        for(let i = 0; i<$("input").val(); i++){
            $('<h1>Título '+contadorTitulos+'</h1>')
            .mousemove(function(){
                $(this).css("backgroundColor", generaColor)
            })
            .slideUp("fast").slideDown("fast")
            .appendTo($("#sectionAnnadidos"));
            contadorTitulos ++;
        }
    });

    $("#anulaRaton").click(function () {
        $("#sectionAnnadidos h1").off();
    });
    
    let generaColor = function(){
        let colores = ['yellow', 'pink', 'lightgray'];
        return colores[Math.floor(Math.random() * (colores.length))];
    }
});

