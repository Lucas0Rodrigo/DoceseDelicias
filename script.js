document.addEventListener("DOMContentLoaded", function () {
    const selectCategoria = document.getElementById("categoria");
    // Filtra apenas produtos que têm data-categoria (não afeta destaques)
    const produtos = document.querySelectorAll(".produto[data-categoria]");
    const titulosCategorias = document.querySelectorAll(".titulo-categorias");
    const secaoAtencao = document.querySelector(".atencao"); // ⬅️ Pegando a seção de atenção

    function filtrarProdutos() {
      const categoriaSelecionada = selectCategoria.value;

      // Mostra ou oculta produtos com base na categoria
      produtos.forEach((produto) => {
        const categoriaProduto = produto.getAttribute("data-categoria");
        if (categoriaSelecionada === "todos" || categoriaProduto === categoriaSelecionada) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });

      // Mostra ou oculta os títulos das categorias
      titulosCategorias.forEach((titulo) => {
        const categoriaTitulo = titulo.getAttribute("data-categoria");
        const temProdutoVisivel = Array.from(produtos).some(produto =>
          produto.getAttribute("data-categoria") === categoriaTitulo &&
          produto.style.display !== "none"
        );
        titulo.style.display = temProdutoVisivel ? "block" : "none";
      });

      // Mostrar ou esconder a seção de atenção com base na seleção
      if (categoriaSelecionada === "todos") {
        secaoAtencao.classList.add("oculto"); // Esconde se "todos"
      } else {
        secaoAtencao.classList.remove("oculto"); // Mostra se outra categoria
      }
    }

    // Evento quando muda a categoria
    selectCategoria.addEventListener("change", filtrarProdutos);

    // Executar no carregamento
    filtrarProdutos();
  });

//Header compacto ao rolar a página

  window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("compacto");
  } else {
    header.classList.remove("compacto");
  }
});

let posicaoAtual = 0;

function atualizaCarrossel() {
  const itens = document.querySelectorAll(".destaques .destaque");
  const total = itens.length;

  itens.forEach(item => {
    item.classList.remove("active", "prev", "next");
  });

  const atual = itens[posicaoAtual];
  const anterior = itens[(posicaoAtual - 1 + total) % total];
  const proximo = itens[(posicaoAtual + 1) % total];

  atual.classList.add("active");
  anterior.classList.add("prev");
  proximo.classList.add("next");
}

function giraCarrossel(direcao) {
  const itens = document.querySelectorAll(".destaques .destaque");
  const total = itens.length;
  posicaoAtual = (posicaoAtual + direcao + total) % total;
  atualizaCarrossel();
}

window.addEventListener("DOMContentLoaded", () => {
  atualizaCarrossel();

  document.getElementById("btn-prev").addEventListener("click", () => giraCarrossel(1));
  document.getElementById("btn-next").addEventListener("click", () => giraCarrossel(-1));
});

// Troca de imagem do logo ao clicar
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector("header .logo");
  const imagens = [
    "./img/Fav Icon.png",
    "./img/Cookie Mordido.webp",
    "./img/Cookie Mordido 2.webp",
    "./img/Vazio.webp",
  ];
  let indice = 0;

  logo.addEventListener("click", function () {
    indice = (indice + 1) % imagens.length;
    logo.src = imagens[indice];
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const telInput = document.getElementById("telefone");
  telInput.addEventListener("input", function (e) {
    let valor = telInput.value.replace(/\D/g, "");
    if (valor.length > 0) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    }
    telInput.value = valor;
  });
});

