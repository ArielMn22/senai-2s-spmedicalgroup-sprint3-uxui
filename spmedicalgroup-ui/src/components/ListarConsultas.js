import React, { Component } from "react";
import api from "../services/api";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      listaConsultas: []
    };
  }

  componentDidMount() {
    api
      .consultasLogado()
      .getAll()
      .then(data => {
        this.setState({ listaConsultas: data.data });
        console.log(data);
      });
  }

  render() {
    let jwtDecode = require("jwt-decode");

    let decode = jwtDecode(localStorage.getItem("spmedicalgroup-usuario"));

    console.log("ListarConsultas.js");
    console.log(decode.tipoUsuario);

    console.log("Array do this.state:");
    console.log(this.state.listaConsultas);

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
                    <td>{consulta.medicoNome}</td>
                    <td>{consulta.especialidade}</td>
                    <td>{consulta.descricao}</td>
                    <td>{consulta.dataConsulta}</td>
                    <td>R$ {consulta.preco}</td>
                    <td>{consulta.status}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    } else if (decode.tipoUsuario == "Médico")
    {
      return (
        <div>
          <table className="colunas ma-top-m">
            <tr>
              <th>Paciente</th>
              <th>Data da consulta</th>
              <th>Observações</th>
              <th>E-mail do paciente</th>
              <th>Status</th>
            </tr>
          </table>
          <div className="tabela">
            <table>
              {this.state.listaConsultas.map(consulta => {
                return (
                  <tr> 
                    <td>{consulta.pacienteNome}</td>
                    <td>{consulta.dataConsulta}</td>
                    <td>{consulta.descricao}</td>
                    <td>{consulta.pacienteEmail}</td>
                    <td>{consulta.status}</td>
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
