/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {
  return (
    <div>
      <body>
        <header className="App-header">
          <a>
            <img src={"https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/PRODUTOS%20%287%29.png.webp?itok=S9rjLiUs"}
              className="imgHeader1"
              alt="logo" />
          </a>
        </header>
        <main>
          <section>
            <img src={"https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3464840:1704822423/indaia.jpg?f=default&$p$f=3eaf441"} alt="banner"
              className="imgbanner" />
            <p className="center" >Vendas Limitadas!!!</p>
          </section>
          <aside className="center">
            <img src={"https://www.reciclasampa.com.br/imgs/conteudos/texto_ambev_geek_publicitario.jpeg"} alt="poster" className="poster" />
          </aside>
        </main>
      </body>
    </div>
  );
}

export default App;
