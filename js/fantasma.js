/** 
    @author Rafael Jesús Nieto Cardador
*/
$(function() {
    $.fn.fantasma = function () {
        $(this).fadeOut("slow").fadeIn("slow").css("backgroundColor","lightgreen");
        return this;
    };
});
