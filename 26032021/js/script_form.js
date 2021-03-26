$(function(){
    $(':input').css('backgroundColor','yellow');
    //$(':text').css('backgroundColor','#bbb');
    $(':password').css('backgroundColor','green');
    $(':radio').parent().css('backgroundColor','#ff00ff');
    $(':submit').css('backgroundColor','#bbb');
    $(':checkbox:checked').parent().css('backgroundColor','red');
    $('#txt').val($("#sl option:selected" ).text());


    $("#sl").change(function() {
      $('#txt').val($("#sl option:selected" ).text());
    });

});