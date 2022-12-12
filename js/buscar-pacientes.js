var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");

            resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // transforma o JSON em objeto JS
            console.log(pacientes);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });  
        } else {
            erroAjax.classList.remove("invisivel");
        }

        });
    xhr.send();
});