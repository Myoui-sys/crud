const url = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

// Mostra o titulo dos 3 primeiros posts
async function listarPosts() {
  console.log("\n1 - Buscando os 3 primeiros posts...");
  const resposta = await fetch(url);

  if (resposta.ok) {
    const posts = (await resposta.json()) as Post[];
    console.log(posts[0].title);
    console.log(posts[1].title);
    console.log(posts[2].title);
    console.log("Deu certo! Status:", resposta.status);
  } else {
    console.log("Erro ao buscar os posts. Status:", resposta.status);
  }
}

// Busca somente o post 1
async function buscarPost() {
  console.log("\n2 - Buscando o post de id 1...");
  const resposta = await fetch(url + "/1");

  if (resposta.ok) {
    const post = (await resposta.json()) as Post;
    console.log("Titulo:", post.title);
    console.log("Deu certo! Status:", resposta.status);
  } else {
    console.log("Erro ao buscar o post. Status:", resposta.status);
  }
}

// Cria um post novo
async function criarPost() {
  console.log("\n3 - Criando um post...");
  const resposta = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Meu primeiro post",
      body: "Estou aprendendo TypeScript e API",
      userId: 1,
    }),
  });

  if (resposta.ok) {
    const postCriado = (await resposta.json()) as Post;
    console.log("Post criado:", postCriado);
    console.log("Deu certo! Status:", resposta.status);
  } else {
    console.log("Erro ao criar o post. Status:", resposta.status);
  }
}

// Atualiza o titulo do post 1
async function atualizarPost() {
  console.log("\n4 - Atualizando o post de id 1...");
  const resposta = await fetch(url + "/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Novo titulo do post" }),
  });

  if (resposta.ok) {
    const postAtualizado = (await resposta.json()) as Post;
    console.log("Post atualizado:", postAtualizado);
    console.log("Deu certo! Status:", resposta.status);
  } else {
    console.log("Erro ao atualizar o post. Status:", resposta.status);
  }
}

// Apaga o post 1
async function apagarPost() {
  console.log("\n5 - Apagando o post de id 1...");
  const resposta = await fetch(url + "/1", {
    method: "DELETE",
  });

  if (resposta.ok) {
    console.log("Post apagado com sucesso! Status:", resposta.status);
  } else {
    console.log("Erro ao apagar o post. Status:", resposta.status);
  }
}

// Testa um id que nao existe
async function testarErro() {
  console.log("\n6 - Buscando o post de id 99999...");
  const resposta = await fetch(url + "/99999");

  if (resposta.ok) {
    const post = (await resposta.json()) as Post;
    console.log(post);
  } else {
    console.log("Erro: esse post nao existe. Status:", resposta.status);
  }
}

// Executa uma funcao de cada vez
async function executarPrograma() {
  try {
    await listarPosts();
    await buscarPost();
    await criarPost();
    await atualizarPost();
    await apagarPost();
    await testarErro();
  } catch (erro) {
    console.log("O programa encontrou um erro:", erro);
  }
}

executarPrograma();
