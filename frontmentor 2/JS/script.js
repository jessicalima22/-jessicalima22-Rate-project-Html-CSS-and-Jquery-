$('div.div-buttons button').click(function () {
    $(this).css('backgroundColor', '#fb7413');
    let numberChosen = $(this).html();
    $('.message-rate').html('You selected '+ numberChosen + ' out of 5')
});

$('#submit-button').click(function(){
    $('.rate').css('display', 'none');
    $('.thanks').css('visibility', 'visible');
    $('.icon').attr('href', 'images/Homer.ico.ico') //©2014. by Jonathan L. Rey; The products or characters depicted in these icons are © by Matt Groening / 20th Century Fox
});
    
