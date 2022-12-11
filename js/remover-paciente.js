var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    var paiDoAlvo = event.target.parentNode;
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    },500);
});

