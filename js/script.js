document.addEventListener("DOMContentLoaded", function () {

	const form = document.querySelector(".form-container form");
	const statusMensagem = document.querySelector("#msg-status");

	if (form && statusMensagem) {
		form.addEventListener('submit', (event) => {
            event.preventDefault();	
            const nome = form.querySelector('#name').value.trim();
            const cpf= form.querySelector('#cpf').value.trim();
            const cpfDigito= form.querySelector('#final-cpf').value.trim();
            const nascimento= form.querySelector('#nascimento').value.trim();
            const telefone= form.querySelector('#tel').value.trim();
            const celular= form.querySelector('#cel').value.trim();
            const email= form.querySelector('#email').value.trim();
            const endereco= form.querySelector('#end').value.trim();
            const complemento= form.querySelector('#endereco_complemento').value.trim();
            const cep= form.querySelector('#cep').value.trim();
            const cepDigito= form.querySelector('#final-cep').value.trim();
            const cidade= form.querySelector('#cidade').value.trim();
            const uf= form.querySelector('#uf').value.trim();

            if (nome== '' || email== '' || mensagem == '') {
                statusMensagem.innerHTML = '<p class="erro">Por favor, preencha todos os campos</p>';
                statusMensagem.className= 'status-erro';
            } else {
                statusMensagem.innerHTML = '<p class="sucesso">Formulário enviado com sucesso!</p>';
                statusMensagem.className= 'status-sucesso';
                form.reset()
                return;
            }
        })
    }
})

