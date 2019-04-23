import React, { Component } from "react";
import api from "../services/api";

export default class ListarConsultas extends Component {
  constructor() {
    super();

    this.state = {
      listaConsultas: [],
      listaConsultasFiltrada: [],
      accordion: true
    };
  }

  addInitialAccordState() {
    let novalista = this.state.listaConsultas.map(consulta => {
      return {
        ...consulta,
        accord: true
      };
    });

    console.log("Consultas com state accoedion:");
    console.log(novalista);

    this.setState({ listaConsultasFiltrada: novalista });
  }

  atualizaEstadoAccord = i => {
    this.setState(state => {
      const list = state.listaConsultasFiltrada.map((consulta, j) => {
        if (i == j)
        {
          consulta.accord = !(consulta.accord) // Deverá trocar o sinal da propriedade
          return consulta;
        } else {
          return consulta;
        }
      });

      return {
        list,
      };
    });
  };

  componentDidMount() {
    api
      .consultas()
      .getAll()
      .then(data => {
        this.setState({ listaConsultas: data.data });
        this.setState({ listaConsultasFiltrada: data.data });

        this.addInitialAccordState();

        console.log(data);
      });
  }

  // atualizaEstadoAccordion() {
  //   this.setState(prevstate => ({
  //     accordion: !prevstate.accordion
  //   }));
  // }

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

                    {consulta.status == "Realizada" ||
                    consulta.status == "Confirmada" ? (
                      <td style={{ color: "#00ec00" }}>{consulta.status}</td>
                    ) : consulta.status == "Cancelada" ||
                      consulta.status == "Recusada" ? (
                      <td style={{ color: "red" }}>{consulta.status}</td>
                    ) : consulta.status == "Adiada" ? (
                      <td style={{ color: "#dddd30" }}>{consulta.status}</td>
                    ) : (
                      <td style={{ color: "#2393ff" }}>{consulta.status}</td>
                    )}
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    } else if (decode.tipoUsuario == "Médico") {
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
                    {consulta.status == "Realizada" ||
                    consulta.status == "Confirmada" ? (
                      <td style={{ color: "#00ec00" }}>{consulta.status}</td>
                    ) : consulta.status == "Cancelada" ||
                      consulta.status == "Recusada" ? (
                      <td style={{ color: "red" }}>{consulta.status}</td>
                    ) : consulta.status == "Adiada" ? (
                      <td style={{ color: "#dddd30" }}>{consulta.status}</td>
                    ) : (
                      <td style={{ color: "#2393ff" }}>{consulta.status}</td>
                    )}
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    } else if (decode.tipoUsuario == "Administrador") {
      return (
        <div>
          <table className="colunas ma-top-m">
            <tr>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Data da consulta</th>
              <th>Observações</th>
              <th>E-mail do paciente</th>
              <th>E-mail do médico</th>
              <th>Status</th>
              <th />
            </tr>
          </table>
          <div className="tabela">
            <table>
              {this.state.listaConsultasFiltrada.map((consulta, index) => {
                return (
                  <tr>
                    <td>{consulta.pacienteNome}</td>
                    <td>{consulta.medicoNome}</td>
                    <td>{consulta.dataConsulta}</td>
                    <td>{consulta.descricao}</td>
                    <td>
                      {consulta.accord === true
                        ? consulta.pacienteEmail.substring(0, 10) + "..."
                        : consulta.pacienteEmail}
                    </td>
                    <td>
                      {consulta.accord === true
                        ? consulta.medicoEmail.substring(0, 10) + "..."
                        : consulta.medicoEmail}
                    </td>
                    {consulta.status == "Realizada" ||
                    consulta.status == "Confirmada" ? (
                      <td style={{ color: "#00ec00" }}>{consulta.status}</td>
                    ) : consulta.status == "Cancelada" ||
                      consulta.status == "Recusada" ? (
                      <td style={{ color: "red" }}>{consulta.status}</td>
                    ) : consulta.status == "Adiada" ? (
                      <td style={{ color: "#dddd30" }}>{consulta.status}</td>
                    ) : (
                      <td style={{ color: "#2393ff" }}>{consulta.status}</td>
                    )}
                    <td>
                      <button onClick={() => this.atualizaEstadoAccord(index)}>a</button>
                    </td>
                    {/* <td><button onClick={this.atualizaEstadoAccordion.bind(this)} value={consulta.id}>a</button></td> */}
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
