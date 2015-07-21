function percorreArray(trsPacientes, comportamento){
    for (posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
        var trPaciente = trsPacientes[posicaoAtual];
        comportamento(trPaciente);
    }
}