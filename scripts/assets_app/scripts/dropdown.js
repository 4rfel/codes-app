$(document).ready(function ()
{
    // Carrega quiz
    var num_pergunta = 0;
    var pontos = 0;
    var file = "http://127.0.0.1/arfel/assets_app/quiz.txt";
    var perguntas;
    $.getJSON(file, function (data)
    {
        perguntas = data.perguntas;
        $('.pergunta').html(data.perguntas[num_pergunta].pergunta);
        $('.resp1').html(data.perguntas[num_pergunta].respostas[0]);
        $('.resp2').html(data.perguntas[num_pergunta].respostas[1]);
        $('.resp3').html(data.perguntas[num_pergunta].respostas[2]);
        $('.resp4').html(data.perguntas[num_pergunta].respostas[3]);
    });

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
        // Verifica resposta correta
        var resposta_correta = perguntas[num_pergunta].resposta_correta;
        var answer = $(document).find('.selected').data('id');
        if (resposta_correta === answer)
        {
            pontos += 1;
            $('.pontos').html("Pontos: " + pontos);
        }

        // Incrementa pergunta
        num_pergunta += 1;
        $('.souburro').html("Questão número: " + (num_pergunta + 1));

        // Desseleciona a resposta selecionada
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });

        $('.pergunta').html(perguntas[num_pergunta].pergunta);
        $('.resp1').html(perguntas[num_pergunta].respostas[0]);
        $('.resp2').html(perguntas[num_pergunta].respostas[1]);
        $('.resp3').html(perguntas[num_pergunta].respostas[2]);
        $('.resp4').html(perguntas[num_pergunta].respostas[3]);
    });

    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });
});
