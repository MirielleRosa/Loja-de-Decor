from fastapi import FastAPI, Path
from fastapi.middleware.cors import CORSMiddleware #Permite que um servidor especifique quem pode acessar os recursos que ele fornece.
from typing import List, Optional
from pydantic import BaseModel
from datetime import date


app = FastAPI()

origins = ['http://localhost:5500']  #Define a lista de origens permitidas para solicitações CORS.

# Permite que a aplicação aceite solicitações de diferentes origens
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


class Produto(BaseModel):
    codigo_produto: int
    tipo: str
    categoria: str
    preco: str
    quantidade: str  # Alterado para um tipo numérico
    fornecedor: str
    tamanho: str
    peso: str
    marca: str

class Pessoa(BaseModel):
    codigo_pessoa: int
    nome: str
    email: str
    data_nascimento: date  
    telefone: str
    cpf: str
    rua: str
    cep: str
    bairro: str
    cidade: str
    estado: str

class Funcionario(BaseModel):
    codigo_funcionario: int
    txtNomeCompleto: str
    email: str
    dataNascimento: date  
    telefone: str
    cpf: str
    rua: str
    cep: str
    bairro: str
    cidade: str
    estado: str


# Lista inicial de produtos e pessoas
banco_produto: List[Produto]= []
banco_pessoa: List[Pessoa]= []
banco_funcionario: List[Funcionario]= []

proximo_id_prod = 1  
proximo_id_Pessoa = 1
proximo_id_Funcionario = 1    

# GET LISTAR
@app.get("/produtos")
def get_produtos():
    return banco_produto


# GET LISTAR POR ID
@app.get('/produtos/{produto_id}')
def obter_produto(produto_id: int):
    for produto in banco_produto:
        if produto.codigo_produto == produto_id:
            return produto
    return {"Erro": "Produto não localizado"}


@app.post('/produtos', response_model=Produto)  # Definindo o modelo de resposta como Produto
def criar_produto(produto: Produto):
    global proximo_id_prod  # Acessa a variável global
    produto.codigo_produto = proximo_id_prod  # Atribui o próximo ID ao produto
    banco_produto.append(produto)
    proximo_id_prod += 1  # Incrementa o próximo ID
    return produto

    
# DELETE
@app.delete('/produtos/{produto_id}')
def remover_produto(produto_id: int):
    for index, produto in enumerate(banco_produto):
        if produto.codigo_produto == produto_id:
            banco_produto.pop(index)
            return {"mensagem":"Produto removido com sucesso"}
    return {"Erro": "Produto não localizado"}


# CLIENTES


# GET LISTAR
@app.get("/clientes")
def get_clientes():
    return banco_pessoa


# GET LISTAR POR ID
@app.get('/clientes/{cliente_id}')
def obter_cliente(cliente_id: int):
    for cliente in banco_pessoa:
        if cliente.codigo_pessoa == cliente_id:
            return cliente
    return {"Erro": "Cliente não localizado"}


@app.post('/clientes', response_model=Pessoa)  # Definindo o modelo de resposta como Produto
def criar_cliente(pessoa: Pessoa):
    global proximo_id_Pessoa  # Acessa a variável global
    pessoa.codigo_pessoa = proximo_id_Pessoa  # Atribui o próximo ID ao produto
    banco_pessoa.append(pessoa)
    proximo_id_Pessoa += 1  # Incrementa o próximo ID
    return pessoa

# DELETE
@app.delete('/clientes/{cliente_id}')
def remover_cliente(cliente_id: int):
    for index, pessoa in enumerate(banco_pessoa):
        if pessoa.codigo_pessoa == cliente_id:
            banco_pessoa.pop(index)
            return {"mensagem":"Cliente removido com sucesso"}
    return {"Erro": "Cliente não localizado"}



# FUNCIONARIOS


# GET LISTAR
@app.get("/funcionarios")
def get_funcionarios():
    return banco_funcionario


# GET LISTAR POR ID
@app.get('/funcionarios/{funcionario_id}')
def obter_funcionario(funcionario_id: int):
    for funcionario in banco_funcionario:
        if funcionario.codigo_funcionario == funcionario_id:
            return funcionario
    return {"Erro": "Funcionario não localizado"}


@app.post('/funcionarios', response_model=Funcionario)
def criar_funcionario(funcionario: Funcionario):
    global proximo_id_Funcionario
    funcionario.codigo_funcionario = proximo_id_Funcionario 
    banco_funcionario.append(funcionario)
    proximo_id_Funcionario += 1
    return funcionario


# DELETE
@app.delete('/funcionarios/{funcionario_id}')
def remover_funcionario(funcionario_id: int):
    for index, funcionario in enumerate(banco_funcionario):
        if funcionario.codigo_funcionario == funcionario_id:
            banco_funcionario.pop(index)
            return {"mensagem":"Funcionario removido com sucesso"}
    return {"Erro": "Funcionario não localizado"}






