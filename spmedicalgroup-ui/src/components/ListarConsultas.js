import React, { Component } from "react";
import api from "../services/api";

export default class ListarConsultas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaConsultas: this.props.lista
    };
  }

  render() {
    let jwtDecode = require("jwt-decode");

    let decode = jwtDecode(localStorage.getItem("spmedicalgroup-usuario"));

    console.log(decode.tipoUsuario);

    if (decode.tipoUsuario == "Paciente") {
      return (
        <div>
          <table className="colunas ma-top-m">
            <tr>
              <th>Médico</th>
              <th>Especialidade</th>
              <th>Observações</th>
              <th>Data da Consulta</th>
              <th>Preço</th>
              <th>Status</th>
            </tr>
          </table>
          <div className="tabela">
            <table>
              {this.state.listaConsultas.map(consulta => {
                return (
                  <tr> 
                      {/* Valores preisam ser alterados */}
                    <td>{consulta.medico}</td>
                    <td>{consulta.paciente}</td>
                    <td>{consulta.descricao}</td>
                    <td>{consulta.dataConsulta}</td>
                    <td>{consulta.dataConsulta}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    }
  }
}
