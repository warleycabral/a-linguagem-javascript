var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;
while (posicaoAtual <= trsPacientes.length - 1) {
    var trPaciente = trsPacientes[posicaoAtual];
    
    var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
    var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
    var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];
    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
    
    var paciente = {
        nome : tdNome.textContent,   
        peso : tdPeso.textContent,
        altura : tdAltura.textContent,
        imc : tdImc.textContent,
        tdImc : tdImc
    }
    
    var ehDiferenteDeZero = (paciente.altura != 0);

    if (ehDiferenteDeZero) {
        paciente.imc = paciente.peso / (paciente.altura * paciente.altura);

        paciente.tdImc.textContent = paciente.imc;

        console.log(paciente.imc);
    } else {
        console.log("Altura é igual a zero!");
    }
    posicaoAtual++;
}