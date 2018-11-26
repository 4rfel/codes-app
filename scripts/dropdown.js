var i = 1;
function evento()
{
    i += 1;
    console.log(i);
    var questao = document.querySelector('.souburro');
    questao.innerHTML = "Questão número: " + i;

}

$(document).ready(function ()
{
    $('.sidebarCollapse').click(function ()
    {
        $('.sidebar').toggleClass('active');
    });

    $('.click').click(function ()
    {
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
    });

    $('#submit_quiz').click(function ()
    {
        // Desseleciona a resposta selecionada
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });

        // Faz alguma coisa quando clica no botão enviar
    });

    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });
});
