document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-clientes');
    const listaClientes = document.getElementById('lista-clientes');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Obtenção dos valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const data_nascimento = document.getElementById('data_nascimento').value;
        const telefone = document.getElementById('telefone').value; 
        const cpf = document.getElementById('cpf').value;
        const rua = document.getElementById('rua').value;
        const cep = document.getElementById('cep').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
    

        // Logging dos valores dos campos
        codigo_pessoa = 0;
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Data de Nascimento:", data_nascimento);
        console.log("Telefone:", telefone);
        console.log("CPF:", cpf);
        console.log("Rua:", rua);
        console.log("CEP:", cep);
        console.log("Bairro:", bairro);
        console.log("Cidade:", cidade);
        console.log("Estado:", estado);


        try {
            // Enviar dados para o servidor via POST usando Axios
            await axios.post('http://localhost:8000/clientes', {
                codigo_pessoa: codigo_pessoa,
                nome: nome,
                email: email,
                data_nascimento: data_nascimento,
                telefone: telefone,
                cpf: cpf,
                rua: rua,
                cep: cep,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            });

            // Recarregar a lista de clientes após a submissão bem-sucedida
            carregarClientes();
            alert('Cliente cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Verifique os dados e tente novamente.');
        }
    });

    // async function carregarClientes() {
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
