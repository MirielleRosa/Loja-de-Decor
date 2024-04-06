document.addEventListener('DOMContentLoaded', () => { //Interação com meu arquivo HTML
    const form = document.getElementById('form-animal');
    const listaAnimais = document.getElementById('lista-animais');

    form.addEventListener('submit', async (event) => {//ouvinte de evento ao formulário para o evento de submissão (submit).
        event.preventDefault();

        const nome = document.getElementById('nome').value; //valores dos campos do formulário de entrada
        const idade = document.getElementById('idade').value;
        const sexo = document.getElementById('sexo').value;
        const cor = document.getElementById('cor').value;

        try {
            await axios.post('http://localhost:8000/animais', { //Utilizando a Biblioteca axios para envio (POST) de dados para o servidor 
                nome: nome,
                idade: idade,
                sexo: sexo,
                cor: cor
            });

            carregarAnimais();
            alert('Animal cadastrado com sucesso.');

        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
            alert('Erro ao cadastrar animal. Verifique os dados e tente novamente.');
        }
    });

    async function carregarAnimais() { //Requisição GET para obter a lista atualizada de animais do servidor.
        try {
            const response = await axios.get('http://localhost:8000/animais');
            const animais = response.data; //Armazenando na variável animais
            
            listaAnimais.innerHTML = ''; //Limpando a lista de animais e renderizando nova lista

            animais.forEach(animal => { //cria um novo elemento <li> para cada animal
                const li = document.createElement('li');
                li.textContent = `Nome: ${animal.nome}, Idade: ${animal.idade}, Sexo: ${animal.sexo}, Cor: ${animal.cor}`;
                listaAnimais.appendChild(li);
            });

        } catch (error) { //Se ocorrer algum erro durante a requisição GET
            console.error('Erro ao carregar animais:', error);
            alert('Erro ao carregar animais. Tente novamente mais tarde.');
        }
    }

    carregarAnimais();
});


