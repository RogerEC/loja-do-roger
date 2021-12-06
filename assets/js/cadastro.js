$(function(){

    $("#tipo-cadastro-pj").on("click", function(){
        $("#data-nasc").attr("disabled", true); // desabilita o campo data de nascimento
        $("[for='cpf-cnpj']").html("<b>CNPJ:</b>"); // altera o label cpf para cnpj
        $("#data-nasc").val(""); // limpa o valor de data de nascimento
        $("#data-nasc").parent().hide(); // oculta o campo de data de nascimento
    });

    $("#tipo-cadastro-pf").on("click", function(){
        // habilita o campo data de nascimento
        // altera o label cnpj para cpf
        // exibir o campo de data de nascimento
    });

    $("#btn-enviar").on("click", function(evento){
        
        if($("#senha-1").val() !== $("#senha-2").val()) {
            evento.preventDefault();
            alert("As senhas não coincidem");
        }

        var cpfCnpj = $("#cpf-cnpj").val();

        if($("#tipo-cadastro-pf").is(":checked")) {
            if(cpfCnpj.length !== 11) {
                evento.preventDefault();
                alert("O CPF digitado é inválido!");
            }
        } else {
            // verificar tamanho do cnpj é igual 14
        }

    })

})







/*$(function(){
                $("#btn-enviar").on('click', function(evento){
                    

                    var cpfCnpj = $("#cpf-cnpj").val().replace(/[^0-9]/g,'');

                    if($("#tipo-cadastro-pj").is(":checked")){
                        if(cpfCnpj.length !== 14) {
                            evento.preventDefault();
                            alert("O número do CNPJ é inválido!");
                        }
                    } else {
                        // verificar cpf tamanho 11.
                    }
                });

                $("#tipo-cadastro-pj").on("click", function(){
                    //$("#data-nasc").parent().hide();
                    $("#data-nasc").attr("disabled", true);
                    $("[for='cpf-cnpj']").html("<b>CNPJ:</b>");
                    $("#data-nasc").val("");
                });

                $("#tipo-cadastro-pf").on("click", function(){
                    //$("#data-nasc").parent().show();
                    $("[for='cpf-cnpj']").html("<b>CPF:</b>");
                    $("#data-nasc").attr("disabled", false);
                    $("#data-nasc").val("");
                });
            });*/