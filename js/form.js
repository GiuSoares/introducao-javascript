var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //evita que o default do clique de botão seja feito (submeter form e recarregar página)
    

    var form = document.querySelector("#form-adiciona"); //pega o form 
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length>0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 
    form.reset(); //limpa o form para a proxima adição
    var mensagens = document.querySelector("#mensagem-erro");
    mensagens.innerHTML = "";
});

function  exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //Adiciona vazio na UL zerando o conteudo anterior
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent=erro;
        ul.appendChild(li);
    });
    
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)

    }
    return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}


function montaTd(conteudo, classe){
    var td=document.createElement("td");
    td.textContent = conteudo;
    td.classList.add(classe);  
    return td; 
}


function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length==0){
        erros.push("O nome não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    } 
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }
    if (paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco");
    }
    
    if(paciente.peso.length==0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length==0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}