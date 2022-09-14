var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //evita que o default do clique de botão seja feito (submeter form e recarregar página)
    

    var form = document.querySelector("#form-adiciona"); //pega o form 

    //#region busca as informações digitadas nos campos do formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value; 
    //#endregion


    //#region cria nova linha para a tabela
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //#endregion


    //#region acessa os dados inseridos no form
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //#endregion


    //#region adiciona colunas na linha da tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    console.log(pacienteTr);
    //#endregion
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); //adiciona nova linha populada a tabela

    
})