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

titulo.addEventListener("click",function(){
    console.log("Olá, eu fui clicado!");
});


function validaPeso(peso){
  if (peso>=0 && peso<100){
    return true;
  }else{
    return false;
  }
}


function validaAltura(altura){
  if (altura>0 && altura < 3.00){
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