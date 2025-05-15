# Test Dry Telecom

Projeto simples para consulta de frete baseado no CEP utilizando React, TypeScript, React Hook Form, Zod e Axios no frontend
e no backend express e axios

---

## Sobre

Este projeto tem como objetivo permitir que o usuário consulte o valor do frete a partir do CEP informado. A aplicação faz uma requisição para uma API local que retorna os dados do endereço e o valor do frete correspondente.

A interface usa um input estilizado em formato OTP para a entrada do CEP.

---

## Tecnologias usadas

- React 18 (Next.js)
- TypeScript
- React Hook Form
- Zod (validação de formulário)
- Axios (requisições HTTP)
- Sonner (notificações/toasts)
- Tailwind CSS (estilização)
- Shadcn/ui

---

## Estrutura do Projeto

- `src/pages/index.tsx`: Componente principal com o formulário de consulta de frete.
- `src/components/ui/`: Componentes UI reutilizáveis.
- `src/lib/`: Funções auxiliares e tipos (opcional, conforme o projeto).
- API local que responde no endpoint `/frete` para consulta de frete via CEP.

---

## Como rodar o projeto localmente

1. Clone o repositório

```bash
git clone https://github.com/viniblack/test-dry-telecom.git
cd test-dry-telecom
```

2. Instale as dependências
###  Front-end

```bash
cd frontend

npm install
# ou
yarn install
```

### Back-end

```bash
cd backend

npm install
# ou
yarn install
```

3. Execute a aplicação
### Front-end

```bash
npm run dev
# ou
yarn dev
```

### Back-end
```bash
nodemon index.js
```

4. Certifique-se que a API local esteja rodando em `http://localhost:5000/frete` para que a consulta de frete funcione.

---

## Uso

- Digite um CEP válido no campo de entrada (8 dígitos).
- Clique em "Calcular".
- O valor do frete será exibido abaixo do formulário.
- Caso o CEP esteja incorreto, uma mensagem de erro será exibida.

---

## API esperada

A API deve responder com um JSON no formato:

```json
{
  "cep": "06243-110",
  "logradouro": "Rua Rocha Pombo",
  "bairro": "Jardim Elvira",
  "localidade": "Osasco",
  "uf": "SP",
  "valor_frete": "7.00"
}
```

---

## Validação

- O campo CEP requer exatamente 8 dígitos.
- Notificações são exibidas para sucesso ou erro na consulta.

---

## Melhorias futuras

- Adicionar máscara de entrada para CEP.
- Validar CEP diretamente pela API dos Correios.
- Tratar loading e estados de requisição.
- Testes unitários e e2e.
- Integração com API real de frete.

---
