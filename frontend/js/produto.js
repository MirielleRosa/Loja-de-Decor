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

            // Recarregar a lista de produtos após a submissão bem-sucedida
            // carregarProdutos();
            alert('Produto cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            alert('Erro ao cadastrar produto. Verifique os dados e tente novamente.');
        }
    });

    // async function carregarProdutos() {
    //     try {
    //         // Obter lista atualizada de produtos do servidor via GET
    //         const response = await axios.get('http://localhost:8000/produtos');
    //         const produtos = response.data;

    //         listaProdutos.innerHTML = '';
    //         const table = document.createElement('table');
    //         table.classList.add('table', 'table-striped', 'table-hover');

    //         const thead = document.createElement('thead');
    //         const headerRow = document.createElement('tr');
    //         headerRow.innerHTML = `
    //             <th scope="col">#</th>
    //             <th scope="col">Tipo</th>
    //             <th scope="col">Categoria</th>
    //             <th scope="col">Preço</th>
    //             <th scope="col">Quantidade</th>
    //             <th scope="col">Fornecedor</th>
    //             <th scope="col">Tamanho</th>
    //             <th scope="col">Peso</th>
    //             <th scope="col">Marca</th>
    //         `;
    //         thead.appendChild(headerRow);
    //         table.appendChild(thead);

    //         const tbody = document.createElement('tbody');
    //         produtos.forEach(produto => {
    //             const row = document.createElement('tr');
    //             row.innerHTML = `
    //                 <td>${produto.codigo_produto}</td>
    //                 <td>${produto.tipo}</td>
    //                 <td>${produto.categoria}</td>
    //                 <td>${produto.preco}</td>
    //                 <td>${produto.quantidade}</td>
    //                 <td>${produto.fornecedor}</td>
    //                 <td>${produto.tamanho}</td>
    //                 <td>${produto.peso}</td>
    //                 <td>${produto.marca}</td>
    //             `;
    //             tbody.appendChild(row);
    //         });
    //         table.appendChild(tbody);

    //         listaProdutos.appendChild(table);
    //     } catch (error) {
    //         console.error('Erro ao carregar produtos:', error);
    //         alert('Erro ao carregar produtos. Tente novamente mais tarde.');
    //     }
    // }

    // // Carregar produtos quando a página é carregada
    // carregarProdutos();
});
