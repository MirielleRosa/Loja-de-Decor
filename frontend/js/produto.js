document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-produtos');
    const listaProdutos = document.getElementById('lista-produto');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Obtenção dos valores dos campos do formulário
        const tipo = document.getElementById('tipo').value;
        const categoria = document.getElementById('categoria').value;
        const preco = document.getElementById('preco').value;
        const quantidade = document.getElementById('quantidade').value; // Convertendo para inteiro
        const fornecedor = document.getElementById('fornecedor').value;
        const tamanho = document.getElementById('tamanho').value;
        const peso = document.getElementById('peso').value;
        const marca = document.getElementById('marca').value;

        // Logging dos valores dos campos
        codigo_produto = 0;
        console.log("Tipo:", tipo);
        console.log("Categoria:", categoria);
        console.log("Preço:", preco);
        console.log("Quantidade:", quantidade);
        console.log("Fornecedor:", fornecedor);
        console.log("Tamanho:", tamanho);
        console.log("Peso:", peso);
        console.log("Marca:", marca);

        try {
            // Enviar dados para o servidor via POST usando Axios
            await axios.post('http://localhost:8000/produtos', {
                codigo_produto: codigo_produto,
                tipo: tipo,
                categoria: categoria,
                preco: preco,
                quantidade: quantidade,
                fornecedor: fornecedor,
                tamanho: tamanho,
                peso: peso,
                marca: marca
            });

            alert('Produto cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            alert('Erro ao cadastrar produto. Verifique os dados e tente novamente.');
        }
    });

});
