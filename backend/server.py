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


# Lista inicial de produtos e pessoas
banco_produto: List[Produto]= []
banco_pessoa: List[Pessoa]= []

proximo_id_prod = 1  
proximo_id_Pessoa = 1  

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






