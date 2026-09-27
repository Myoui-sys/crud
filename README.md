# CRUD com API — Dacyrrôse e Sheila

Atividade de CRUD feita em TypeScript usando a API JSONPlaceholder.

## Como executar

```bash
npm install
npm start
```

## Respostas

1. **O que o `await` faz?** Ele espera uma tarefa assíncrona terminar para depois continuar o código.

2. **Qual método HTTP corresponde a cada letra do CRUD?** Create usa POST, Read usa GET, Update usa PUT ou PATCH e Delete usa DELETE.

3. **Por que o `fetch` não dá erro quando a API responde 404?** Porque ele recebeu uma resposta da API. Por isso precisamos verificar o `response.ok` ou o status.

4. **Por que o post criado não apareceu na lista?** Porque essa API é só para testes e não salva o post de verdade.
