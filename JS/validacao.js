//Espera para ativar o código quando o documento 
//inteiro terminar de ser carregado
$(document).ready( function(){

    
    //Quando o "formulario" for enviado...
    $("#formulario").submit(function(event){
        //para cada campo obrigaório...
        $(".obrigatorio").each(function(){
            //Armazena o valor do campo
            var valor = $(this).val();
            //Se o valor for igual a vazio
            if(valor == ""){
                // Coloca uma mensagem no span
                $(this).next("span").text("Campo obrigatório");

                //Para o envio do formulário
                event.preventDefault();
            }
        }); //fim do each

    }); //fim do submit

}); //fim do ready