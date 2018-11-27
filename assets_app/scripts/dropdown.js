document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);

});



var i = 1
function evento(){
  i += 1
  console.log(i);
  let questao = document.querySelector('.souburro')
  questao.innerHTML = "Questão número: " + i

}



$(document).ready(function ()
    {
        $('.click').click(function ()
        {
            var elements = $('.click');
            elements.each(function(){
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        })
        $('#submit_quiz').click(function ()
       {
           // Desseleciona a resposta selecionada
           var elements = $('.click');
           elements.each(function ()
           {
               $(this).removeClass('active');
           });

          // Faz alguma coisa quando clica no botão enviar
          console.log('e');
       });
       $('.dropdown-trigger').dropdown({
            closeOnClick: false,
        });
    });

$(document).ready(function ()
{
    // Carrega quiz
    var num_pergunta = 0;
    var pontos = 0;

    let db = new DB('https://desgosto-final.firebaseio.com/')

    db.download("/", function(data)
    {
      console.log('resp:');
      console.log(data['perguntas'][num_pergunta]['resposta_correta']);
        $('.pergunta').html(data["perguntas"][num_pergunta]['pergunta']);
        $('.resp1').html(data["perguntas"][num_pergunta]['respostas'][0]);
        $('.resp2').html(data["perguntas"][num_pergunta]['respostas'][1]);
        $('.resp3').html(data["perguntas"][num_pergunta]['respostas'][2]);
        $('.resp4').html(data["perguntas"][num_pergunta]['respostas'][3]);
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
      db.download("/", function(data){
        // Verifica resposta correta
        var resposta_correta = data['perguntas'][num_pergunta]['resposta_correta'];
        var answer = $(document).find('.selected').data('id')+1;
        console.log('certa: ' + resposta_correta);
        console.log('dada: ' + answer);
        if (resposta_correta === answer)
        {
          console.log('acertou');
            pontos += 1;
            $('.pontos').html("Pontos: " + pontos);
          };
        });
      });
        // Incrementa pergunta
        num_pergunta += 1;
        $('.souburro').html("Questão número: " + (num_pergunta));

        // Desseleciona a resposta selecionada
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });
        db.download("/", function(data){
          console.log('resp:');
          console.log(data['perguntas'][num_pergunta]['resposta_correta']);
        $('.pergunta').html(data["perguntas"][num_pergunta]['pergunta']);
        $('.resp1').html(data["perguntas"][num_pergunta]['respostas'][0]);
        $('.resp2').html(data["perguntas"][num_pergunta]['respostas'][1]);
        $('.resp3').html(data["perguntas"][num_pergunta]['respostas'][2]);
        $('.resp4').html(data["perguntas"][num_pergunta]['respostas'][3]);
        });


    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });
});
