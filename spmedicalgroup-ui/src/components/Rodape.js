import React, { Component } from "react";
// import logo from "../../logo.svg";
import "../assets/css/style.css";
import "../assets/css/rodape.css";

class App extends Component {
  render() {
    return (
      <div>
        <footer>
          <section id="rodape" class="pa-all-g">
            <div class="rodape-coluna">
              <h4>Endereço</h4>
              <p>Alameda Barão de Limeira, 539.</p>
              <h4>Contato</h4>
              <p>+55 (11) 95555-5555</p>
            </div>

            <div class="rodape-coluna">
              <ul>
                <li>
                  <a href="">Nossas especialidades</a>
                  <br />
                </li>
                <li>
                  <a href="">Localização</a>
                  <br />
                </li>
                <li>
                  <a href="">Nossas instalações</a>
                  <br />
                </li>
                <li>
                  <a href="">Sobre nós</a>
                  <br />
                </li>
                <li>
                  <a href="">Minhas consultas</a>
                  <br />
                </li>
              </ul>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
