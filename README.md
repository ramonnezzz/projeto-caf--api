
# ☕ CoffeeDelivery - Backend

Sistema de gerenciamento de pedidos de café personalizado com entregas.

---

## 📚 Tecnologias

- [Node.js](https://nodejs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🛠️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/coffee-delivery-backend.git
cd coffee-delivery-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco PostgreSQL local e configure a variável `DATABASE_URL` no arquivo `.env`.

Exemplo do `.env`:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/coffeedelivery"
```

### 4. Gere o cliente Prisma e rode as migrações

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. (Opcional) Popule o banco com dados de exemplo

```bash
npx tsx prisma/seed.ts
```

> Certifique-se de que o arquivo `prisma/seed.ts` está criado e contém os dados para inserir.

---

## 📂 Estrutura do Projeto

```bash
prisma/
  ├── schema.prisma       # Definição do modelo de dados
  ├── migrations/         # Histórico das migrações
  └── seed.ts             # Script de seed (opcional)

src/
  ├── lib/
  │   └── prisma.ts       # Classe de conexão com o Prisma
  └── ...                 # Demais arquivos do backend
```

---

## ✅ Funcionalidades principais

- Cadastro de cafés com tags
- Registro de pedidos com múltiplos cafés
- Controle de entregas e status
- Relacionamento entre cliente, pedido, itens e entrega

---

## 📌 Scripts úteis

```bash
# Rodar o projeto em dev
npm run dev

# Criar nova migração
npx prisma migrate dev --name nome_da_migracao

# Ver banco de dados com Studio
npx prisma studio
```

---

## 🧑‍💻 Contribuição

Pull requests são bem-vindos! Para grandes alterações, abra uma issue primeiro para discutir o que deseja modificar.

---

## 📄 Licença

Este projeto está sob a licença MIT.
