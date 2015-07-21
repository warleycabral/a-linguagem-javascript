function calculaTodosIMCs(){

    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function(trPaciente) {

        var pacienteAtual = montaPaciente(trPaciente);

        pacienteAtual.recuperaImc();

        pacienteAtual.tdImc.textContent = pacienteAtual.imc;

        console.log(pacienteAtual.imc);
    });

}

var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", calculaTodosIMCs);
botao.addEventListener("click", function(){
    console.log("Calculando imcsss")
});