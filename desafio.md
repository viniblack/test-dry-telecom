# 🧪 Teste Técnico

## 🎯 Objetivo
Criar uma API REST para cálculo de frete, utilizando a API pública [ViaCEP](https://viacep.com.br/) para buscar informações do endereço com base no CEP informado.

---

## 📌 Requisitos Funcionais

1. **Endpoint POST `/frete`**
   - Deve receber um JSON com o seguinte formato:
     ```json
     {
       "cep": "01001-000"
     }
     ```

2. **Buscar endereço pelo CEP**
   - Ao receber o CEP, utilize a [API ViaCEP](https://viacep.com.br/ws/{cep}/json/) para obter as informações do endereço.

3. **Calcular o frete**
   - O valor do frete será definido com base no estado (UF):
     - **SP**: R$ 7,00  
     - **RJ, ES, MG**: R$ 10,00  
     - **Demais regiões Sudeste**: R$ 15,00  
     - **Sul (RS, SC, PR)**: R$ 12,00  
     - **Centro-Oeste (GO, MT, MS, DF)**: R$ 20,00  
     - **Nordeste**: R$ 21,00  
     - **Norte**: R$ 25,00

4. **Retornar os dados**
   - A resposta deve conter:
     ```json
     {
       "cep": "01001-000",
       "logradouro": "Praça da Sé",
       "bairro": "Sé",
       "localidade": "São Paulo",
       "uf": "SP",
       "valor_frete": 7.0
     }
     ```

---

## ✅ Requisitos Técnicos

- Utilizar **Node.js** com **Express**.
- Buscar dados do ViaCEP com `axios` ou `fetch`.
- Validação básica do CEP (formato: 00000-000 ou apenas números).
- Pode usar ES6+.
- Código organizado e legível.

---

## 💡 Diferenciais (não obrigatórios)

- Testes automatizados com Jest.
- Utilizar TypeScript.
- Documentar a API com Swagger ou README claro.

---