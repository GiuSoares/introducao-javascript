var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //evita que o default do clique de botão seja feito (submeter form e recarregar página)
    

    var form = document.querySelector("#form-adiciona"); //pega o form 
    
    var paciente= obtemPacienteDoFormulario(form);
    
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 
    console.log(tabela)//adiciona o paciente na tabela

    
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
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");




   nomeTd.textContent = paciente.nome;
   pesoTd.textContent = paciente.peso;
   alturaTd.textContent = paciente.altura;
   gorduraTd.textContent = paciente.gordura;
   imcTd.textContent = calculaImc(peso,altura);


    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}