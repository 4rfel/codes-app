document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);

});






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
       });
       $('.dropdown-trigger').dropdown({
            closeOnClick: false,
        });
    });


// console.log(data);
$(document).ready(function ()
{
    // Carrega quiz
    var num_pergunta = 1;
    var pontos = 0;
//
    // document.addEventListener('DOMContentLoaded', function() {
      // let db = new DB('https://co-des.firebaseio.com')
      let db = new DB('https://coisa-62403.firebaseio.com/')

      db.download("/", function(data) {
        // Printing the data contained on that path on firebase
        console.log(data["perguntas"][num_pergunta]['respostas'][1]);
        $('.pergunta').html(data['perguntas'][(num_pergunta)]['pergunta']);
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
        // Verifica resposta correta
        db.download('/', function(data){
        var resposta_correta = data['perguntas'][num_pergunta]['resposta_correta']
        console.log(resposta_correta);
        var answer = $(document).find('.selected').data('id');
        console.log("real: " + resposta_correta);
        console.log("dada: " + answer);
        if (resposta_correta === answer)
        {
            pontos += 1;
            $('.pontos').html("Pontos: " + pontos);
        }

        // Incrementa pergunta
        num_pergunta += 1;
        $('.souburro').html("Questão número: " + num_pergunta);

        // Desseleciona a resposta selecionada
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });

        $('.pergunta').html(data['perguntas'][(num_pergunta)]['pergunta']);
        $('.resp1').html(data["perguntas"][(num_pergunta)]['respostas'][0]);
        $('.resp2').html(data["perguntas"][(num_pergunta)]['respostas'][1]);
        $('.resp3').html(data["perguntas"][(num_pergunta)]['respostas'][2]);
        $('.resp4').html(data["perguntas"][(num_pergunta)]['respostas'][3]);
    });
  });

    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });
  });
