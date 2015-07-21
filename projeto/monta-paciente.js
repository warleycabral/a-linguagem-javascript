function montaPaciente(trPaciente) {
    var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
    var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
    var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];
    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
    
    var pacienteAtual = {
        nome : tdNome.textContent,   
        peso : tdPeso.textContent,
        altura : tdAltura.textContent,
        imc : tdImc.textContent,
        tdImc : tdImc,
        
        recuperaImc : function(){

            if (this.altura != 0) {

                this.imc = this.peso / (this.altura * this.altura);

            } else {
                console.log("Altura é igual a zero!");
            }
        }
    };
    
    return pacienteAtual;
}