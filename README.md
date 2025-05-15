# Test Dry Telecom

Aplicação simples para consulta de valor de frete via CEP, construída com React, TypeScript e Node.js. Utiliza React Hook Form e Zod para validação, Axios para comunicação HTTP, além de uma API Express para o backend.

---

## Visão Geral

Este projeto permite que o usuário consulte o valor do frete a partir do CEP informado. O frontend envia a requisição para uma API local que retorna os dados do endereço e o custo do frete correspondente.

A interface apresenta um campo de entrada de CEP estilizado em formato OTP para melhor usabilidade.

---

## Tecnologias Utilizadas

- **Frontend:** React 18 (Next.js), TypeScript, React Hook Form, Zod, Axios, Sonner (notificações), Tailwind CSS, Shadcn/ui  
- **Backend:** Node.js com Express, Axios  

---

## Estrutura do Projeto

- `src/pages/index.tsx` – Página principal com formulário de consulta de frete  
- `src/components/ui/` – Componentes reutilizáveis de interface  
- `src/lib/` – Funções auxiliares e tipos TypeScript  
- **API backend:** Endpoint `/frete` que retorna dados de frete com base no CEP informado  

---

## Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/viniblack/test-dry-telecom.git
cd test-dry-telecom
```

2. Instale as dependências:

**Frontend:**

```bash
cd frontend
npm install
# ou yarn install
```

**Backend:**

```bash
cd backend
npm install
# ou yarn install
```

3. Execute a aplicação:

**Backend:**

```bash
nodemon index.js
```

**Frontend:**

```bash
npm run dev
# ou yarn dev
```

4. Verifique que a API esteja rodando em `http://localhost:5000/frete` para o funcionamento correto da consulta.

---

## Como Usar

- Insira um CEP válido (8 dígitos) no campo de entrada.  
- Clique em **Calcular**.  
- O valor do frete e informações do endereço serão exibidos abaixo do formulário.  
- Em caso de CEP inválido, uma mensagem de erro aparecerá via notificação.

---

## Exemplo de Resposta da API

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

## Validações e Feedback

- O CEP deve conter exatamente 8 dígitos numéricos.  
- Notificações (toasts) exibem sucesso ou erros durante a consulta.  

---

## Próximas Melhorias

- Validar CEP diretamente usando API oficial dos Correios.  
- Criar testes unitários e end-to-end.  
- Integrar com uma API real de cálculo de frete.
