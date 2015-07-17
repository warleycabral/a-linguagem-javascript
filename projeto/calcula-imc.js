//peso /altura * altura
//
//var tdNome1 = document.getElementById("nome-1");
//var tdPeso1 = document.getElementById("peso-1");
//var tdAltura1 = document.getElementById("altura-1");
//var tdImc1 = document.getElementById("imc-1");
//
//var tdNome2 = document.getElementById("nome-2");
//var tdPeso2 = document.getElementById("peso-2");
//var tdAltura2 = document.getElementById("altura-2");
//var tdImc2 = document.getElementById("imc-2");
//
//var paciente1 = {
//    nome : tdNome1.textContent,
//    peso : tdPeso1.textContent,
//    altura : tdAltura1.textContent,
//    imc : tdImc1.textContent,
//    tdImc : tdImc1
//};
//
//var paciente2 = {
//    nome : tdNome2.textContent,
//    peso : tdPeso2.textContent,
//    altura : tdAltura2.textContent,
//    imc : tdImc2.textContent,
//    tdImc : tdImc2
//};
//
//var pacientes = [paciente1, paciente2];

//var posicaoAtual = 0;
//while(posicaoAtual <= pacientes.length - 1){
//
//    var pacienteAtual = pacientes[posicaoAtual];
//    if(pacienteAtual.altura != 0){
//        var imcDoPacienteAtual = pacienteAtual.peso / (pacienteAtual.altura * pacienteAtual.altura);
//        console.log(imcDoPacienteAtual);
//    }else{
//        console("Não posso executar uma divisão por 0!");
//    }
//    posicaoAtual ++;
//}


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