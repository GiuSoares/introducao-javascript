var titulo = document.querySelector(".titulo");
titulo.textContent = "Giulia Nutrição" // manipulando o título via JS
//alert("Giulia é muito gata!"); //alertinha da massa
console.log(titulo);


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for(var i= 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var pacientePeso = paciente.querySelector(".info-peso");
    var peso = pacientePeso.textContent;
    var pacienteAltura = paciente.querySelector(".info-altura");
    var altura = pacienteAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida= true;


    if (peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
    }

    if (altura<0 ||altura >3.00){
    console.log("Altura Inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
    }


    if (alturaValida && pesoValido){
    var imc = peso/(altura*altura);
    tdImc.textContent=imc.toFixed(2);
    }
}

titulo.addEventListener("click",function(){
    console.log("Olá, eu fui clicado!");
});


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


/*function mostraMensagem(){
  console.log("Olá, eu fui clicado!");
  alert("Fui clicado"); 
}*/





		
