//calculator app

var answer = 0;
var operand2 = 0;

function sum(n1, n2) {
    return n1+n2;
}
$(function() {
    console.log("ready");
});

function showAnswer(n) {
    $("#calcScreen").html(n);
}

$("#equals").on("click", function() {
    console.log("= was clicked");
    console.log(sum(answer, operand2));
    answer=sum(answer, operand2);
    showAnswer(answer);
});

$("#1").on("click", function() {
    //operand2=1;
    $("#calcScreen").append("1");
    console.log("1 was clicked");
});

$("#ac").on("click", function() {
    answer = 0;
    $("#calcScreen").html(operand2);
});

$( "body" ).on( "click", "p", function(event) {
    event.preventDefault();
    console.log( $( this).text() +"<p> was clicked" );
});

