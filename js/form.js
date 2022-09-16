var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //evita que o default do clique de botão seja feito (submeter form e recarregar página)
    

    var form = document.querySelector("#form-adiciona"); //pega o form 
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)){
        alert("Paciente invalido");
        return;
    }
    
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 
    form.reset(); 

});


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
    if(validaPeso(paciente.peso)){
        return "";
    }else{
        return "Peso inválido";
    }
}