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
    var imc = calculaImc(peso,altura);
    }
}

titulo.addEventListener("click",function(){
    console.log("Olá, eu fui clicado!");
});

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso/(altura*altura);
  return imc.toFixed(2);

}