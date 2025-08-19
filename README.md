# 🍪 Doces&Delícias

Um site fictício desenvolvido para uma confeitaria artesanal chamada
**Doces&Delícias**, que apresenta seus produtos, história e informações
de contato de forma simples, atrativa e responsiva.

## 📌 Funcionalidades

-   **Página inicial (`index.html`)**
    -   Banner de destaque.
    -   Carrossel interativo de produtos em destaque.
    -   Catálogo de produtos organizado por categorias.
    -   Filtro dinâmico para exibir produtos por tipo (doces, salgados,
        tortas, cafés, etc.).
    -   Sessão *Sobre Nós* com botão para página dedicada.
-   **Página "Sobre" (`sobre.html`)**
    -   História da confeitaria.
    -   Imagem de banner personalizada.
    -   Conteúdo institucional em layout elegante.
-   **Página de Informações (`info.html`)**
    -   Exibe aviso de "site fora do ar" ou informações temporárias.
-   **Componentes compartilhados**
    -   Cabeçalho fixo com menu de navegação.
    -   Logo interativo (troca de imagem ao clicar).
    -   Formulário de contato com validação de telefone e e-mail.
    -   Rodapé com redes sociais e informações de contato.

## 🎨 Estilo (CSS)

O arquivo [`Style.css`](Style.css) define:\
- Layout responsivo com **media queries** até telas de 420px.\
- Paleta de cores em tons de **marrom/bege**, transmitindo sensação de
aconchego e gastronomia.\
- Animações sutis em botões e carrosséis.\
- Organização em cards para produtos.\
- Versão compacta do header ao rolar a página.

## ⚙️ Funcionalidades em JavaScript

O arquivo [`script.js`](script.js) implementa:\
- **Filtro de produtos por categoria** com exibição/ocultação dinâmica.\
- **Carrossel 3D** de destaques com botões de navegação.\
- **Header dinâmico** que se compacta ao rolar a página.\
- **Troca da logo** ao clicar.\
- **Máscara automática para telefone** no formulário.

## 📂 Estrutura do Projeto

    /Projeto-DocesDelicias
    │── index.html       # Página principal
    │── sobre.html       # Página sobre a confeitaria
    │── info.html        # Página de aviso/erro
    │── Style.css        # Estilos principais
    │── script.js        # Funcionalidades JS
    │── /img             # Pasta com imagens (logo, produtos, ícones, banners)

## 📱 Responsividade

-   O site é totalmente responsivo, adaptando-se para **desktops,
    tablets e celulares**.
-   Carrossel e alguns elementos são ocultados em telas menores para
    melhor usabilidade.

## 👨‍💻 Autor

Desenvolvido como projeto acadêmico no curso de **Multimídia - SENAI**.\
Criado por: -  Julia Santana;
               Lucas Rodrigo; 
               Pedro Henrique;
               Raul do Prado;
               Renan Severo. 
