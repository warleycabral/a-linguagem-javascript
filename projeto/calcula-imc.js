
function calculaIMC(paciente){

    if (paciente.altura != 0) {
        
        paciente.imc = paciente.peso / (paciente.altura * paciente.altura);
        
    } else {
        console.log("Altura é igual a zero!");
    }
}

var trsPacientes = document.getElementsByClassName("paciente");

for (posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
    var trPaciente = trsPacientes[posicaoAtual];
    
    var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
    var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
    var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];
    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
    
    var pacienteAtual = {
        nome : tdNome.textContent,   
        peso : tdPeso.textContent,
        altura : tdAltura.textContent,
        imc : tdImc.textContent,
        tdImc : tdImc
    };
    
    calculaIMC(pacienteAtual);
    
    pacienteAtual.tdImc.textContent = pacienteAtual.imc;

    console.log(pacienteAtual.imc);
    
}