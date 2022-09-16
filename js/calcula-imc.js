var titulo = document.querySelector(".titulo");
titulo.textContent = "Giulia Nutrição" // manipulando o título via JS

var pacientes = document.querySelectorAll(".paciente");

for(var i= 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var pacientePeso = paciente.querySelector(".info-peso");
    var peso = pacientePeso.textContent;
    var pacienteAltura = paciente.querySelector(".info-altura");
    var altura = pacienteAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoValido = validaPeso(peso);
    var alturaValida= validaAltura(altura);


    if (!pesoValido){
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido){
    var imc = calculaImc(peso,altura);
    }
}


function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
      return true;
  } else {
      return false;
  }
}


function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
    return true;
    
  }else{
      return false;
  }
}


function calculaImc(peso,altura){
  var imc = 0;
  imc = peso/(altura*altura);
  return imc.toFixed(2);

}