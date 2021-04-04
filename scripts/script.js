//Evento responsável por atualizar a tabela sempre que a página for carregada ou quando uma alteração for realizada na lista de tarefas (inserção,remoção)
window.addEventListener ("load", function() {
	exibir();
})

// Função responsável por cadastrar as tarefas no firebase
function enviar(event){
	event.preventDefault();

	let tarefa = document.getElementById("txtTarefa").value;
	
	db.collection("tarefas").add({
		tarefa: tarefa
	})
	.then(function(){
		console.log('tarefa registrada');
		window.location.reload();
	})
	.catch(function(error){
		alert('Erro ao registrar a tarefa', error);
	});
}

//Função responsável por exibir as tarefas cadastradas no firabase na tabela da página
function exibir(){

	db.collection("tarefas").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			let tabela = document.getElementById("tbCadastro");

			let linha = tabela.insertRow(-1);
			let col0 = linha.insertCell(0);
			let col1 = linha.insertCell(1);

			let id_teste = document.createTextNode(doc.id);
			console.log(id_teste);

			let btRemover = document.createElement("button");

			col0.appendChild(document.createTextNode(doc.data().tarefa));
			col1.appendChild(btRemover);
			btRemover.addEventListener("click", function() {
				db.collection("tarefas").doc(doc.id).delete().then(function () {
					window.location.reload();
				}).catch(function (error) {
					alert('Erro ao remover registro: ', error);
				});
			});
				
		});
	});
}

function remover(){

}



