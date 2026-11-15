# Loja de Instrumentos – Cadastro e Listagem

Node.js + Express + EJS + MongoDB (Mongoose).

## Estrutura

```
loja-instrumentos/
├── app.js                  # Express + configuração do EJS + rotas
├── db.js                   # Conexão com o MongoDB
├── models/
│   └── Instrumento.js      # Model (nome, fabricante, preco, tipo)
├── routes/
│   └── instrumento.js      # GET/POST /instrumento/add e GET /instrumento/lst
├── views/
│   └── instrumento/
│       ├── add.ejs         # Formulário de cadastro
│       ├── addok.ejs       # Confirmação do cadastro
│       └── lst.ejs         # Listagem
├── public/style.css
└── seed.js                 # (opcional) grava instrumentos de teste
```

## Como executar

1. Tenha o MongoDB rodando em `mongodb://127.0.0.1:27017` (ou defina a variável `MONGO_URI`).
2. Instale as dependências: `npm install`
3. Inicie: `npm start`
4. Acesse `http://localhost:3000` (redireciona para a listagem).

## Rotas

| Método | Rota               | Função                                   |
|--------|--------------------|------------------------------------------|
| GET    | `/instrumento/add` | Exibe o formulário de cadastro           |
| POST   | `/instrumento/add` | Grava no MongoDB e mostra `addok.ejs`    |
| GET    | `/instrumento/lst` | Lista todos os instrumentos (`lst.ejs`)  |

## Registros sugeridos para teste

| Nome                  | Fabricante | Preço    | Tipo      |
|-----------------------|------------|----------|-----------|
| Violão Clássico Nylon | Yamaha     | 899,90   | Corda     |
| Violão Folk Aço       | Takamine   | 1750,00  | Corda     |
| Guitarra Stratocaster | Fender     | 5490,00  | Corda     |
| Teclado Arranjador    | Casio      | 1299,00  | Teclas    |
| Bateria Acústica      | Pearl      | 4200,00  | Percussão |
| Saxofone Alto         | Eagle      | 3150,50  | Sopro     |

Três instrumentos do tipo **Corda**, todos com preços diferentes, e dois nomes começando com
"Violão" — bons para testar uma pesquisa por nome depois.
Cadastre pelo formulário ou, para agilizar, rode `npm run seed`.
