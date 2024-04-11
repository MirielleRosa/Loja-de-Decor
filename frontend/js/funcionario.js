document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formFuncionarios');
    const listaFuncionarios = document.getElementById('listaFuncionarios');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Obtenção dos valores dos campos do formulário
        const txtNomeCompleto = document.getElementById('txtNomeCompleto').value;
        const email = document.getElementById('email').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const telefone = document.getElementById('telefone').value; 
        const cpf = document.getElementById('cpf').value;
        const rua = document.getElementById('rua').value;
        const cep = document.getElementById('cep').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        

        // Logging dos valores dos campos
        codigo_funcionario = 0;
        console.log("Nome:", txtNomeCompleto);
        console.log("E-mail:", email);
        console.log("Data de Nascimento:", dataNascimento);
        console.log("Telefone:", telefone);
        console.log("CPF:", cpf);
        console.log("Rua:", rua);
        console.log("CEP:", cep);
        console.log("Bairro:", bairro);
        console.log("Cidade:", cidade);
        console.log("Estado:", estado);


        try {
            // Enviar dados para o servidor via POST usando Axios
            await axios.post('http://localhost:8000/funcionarios', {
                codigo_funcionario: codigo_funcionario,
                txtNomeCompleto: txtNomeCompleto,
                email: email,
                dataNascimento: dataNascimento,
                telefone: telefone,
                cpf: cpf,
                rua: rua,
                cep: cep,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            });

            alert('Funcionario cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar funcionario:', error);
            alert('Erro ao cadastrar funcionario. Verifique os dados e tente novamente.');
        }
    });

});

