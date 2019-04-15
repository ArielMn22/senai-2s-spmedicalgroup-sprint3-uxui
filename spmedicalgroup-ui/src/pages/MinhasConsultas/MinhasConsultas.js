import React, { Component } from "react";
import "../../assets/css/listarconsulta.css";
// import '../../assets/css/style.css';
import Rodape from "../../components/Rodape";
import Cabecalho from "../../components/Cabecalho";
import api from "../../services/api";
import ListarConsultas from "../../components/ListarConsultas";

export default class MinhasConsultas extends Component {
  constructor() {
    super();
    this.state = {
      listaConsultas: []
    };
  }

  // buscarConsultas() {
  //   let jwtDecode = require("jwt-decode");

  //   let token = localStorage.getItem("spmedicalgroup-usuario");

  //   let decode = jwtDecode(token);

  //   console.log(decode);
  // }

  componentDidMount() {
    // this.buscarConsultas();
    api
      .consultasLogado()
      .getAll()
      .then(data => {
        this.setState({ listaConsultas: data });
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <main>
          <section id="minhasConsultas" className="pa-all-g">
            <h1 className="ma-top-g">Minhas Consultas</h1>
           
                <ListarConsultas lista={this.state.listaConsultas} />
              
          </section>
        </main>
        <Rodape />
      </div>
    );
  }
}
