var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function (trPaciente){
   
    var pacienteAtual = montaPaciente(trPaciente);
    
    console.log(pacienteAtual.nome);
});
