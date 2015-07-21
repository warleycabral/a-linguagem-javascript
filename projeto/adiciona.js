

//var tabela = document.getElementById("mainTable");



var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    
    event.preventDefault();
    
    var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>Warley</td>"+
						"<td class='info-peso'>78</td>"+
						"<td class='info-altura'>1.80</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";
    
    var tabela = document.querySelector("table");
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;
});