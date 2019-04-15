import React, { Component } from "react";
import "../assets/css/style.css";
import Logo from "../assets/imgs/SP Medical Group - logo.png";
import {Link} from 'react-router-dom';

export default class Cabecalho extends Component {
  render() {
    let token = localStorage.getItem("spmedicalgroup-usuario");

    if (token != null) {
      return (
        <div>
          <header>
            <nav id="top-bar" class="degrade">
              <div id="logo" class="flex-container">
                <Link to="/">
                  <div class="logo-img">
                    <img src={Logo} alt="Logo da SP Medical Group" />
                  </div>
                </Link>

                <p>SP Medical Group</p>
              </div>
              <div id="menu">
                <ul class="flex-container">
                  <li>
                    <Link to="/">
                      <i class="fas fa-home" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobrenos">
                      <i class="fas fa-book" />
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato">
                      <i class="fas fa-phone" />
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to="/minhasconsultas">
                      <i class="fas fa-user" />
                      Minhas Consultas
                    </Link>
                  </li>
                  <li>
                    <Link to="/sair">
                      <i class="fas fa-user" />
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <nav id="top-bar" class="degrade">
              <div id="logo" class="flex-container">
                <Link href="index.html">
                  <div class="logo-img">
                    <img src={Logo} alt="Logo da SP Medical Group" />
                  </div>
                </Link>

                <p>SP Medical Group</p>
              </div>
              <div id="menu">
                <ul class="flex-container">
                  <li>
                    <Link to="/">
                      <i class="fas fa-home" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobrenos">
                      <i class="fas fa-book" />
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato">
                      <i class="fas fa-phone" />
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i class="fas fa-user" />
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      );
    }
  }
}
