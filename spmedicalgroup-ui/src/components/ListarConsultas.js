import React, { Component } from "react";
import api from "../services/api";
import "../assets/css/style.css";

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
        if (i == j) {
          consulta.accord = !consulta.accord; // Deverá trocar o sinal da propriedade
          return consulta;
        } else {
          return consulta;
        }
      });

      return {
        list
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
              <th />
            </tr>
          </table>
          <div className="tabela">
            <table>
              {this.state.listaConsultasFiltrada.map((consulta, index) => {
                return (
                  <tr>
                    <div>
                      {/* <div> */}
                      <td>{consulta.medicoNome}</td>
                      <td>{consulta.especialidade}</td>
                      <td>{consulta.descricao.substring(0, 10) + "..."}</td>
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
                      <td>
                        {consulta.accord === true ? (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver mais
                          </button>
                        ) : (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver menos
                          </button>
                        )}
                      </td>
                    </div>

                    <div>
                      {consulta.accord === true ? (
                        <div />
                      ) : (
                        <div id="listar__accordion__div">
                          <div class="listar__accordion__div__item">
                            <h3>Médico</h3>
                            <br />
                            <p>{consulta.medicoNome}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Especialidade</h3>
                            <br />
                            <p>{consulta.especialidade}</p>
                          </div>

                          <div class="listar__accordion__div__item">
                            <h3>Observações</h3>
                            <br />
                            <p>{consulta.descricao}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Data da consulta</h3>
                            <br />
                            <p>{consulta.dataConsulta}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Preço</h3>
                            <br />
                            <p>R$ {consulta.preco}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Status</h3>
                            <br />
                            {consulta.status == "Realizada" ||
                            consulta.status == "Confirmada" ? (
                              <p style={{ color: "#00ec00" }}>
                                {consulta.status}
                              </p>
                            ) : consulta.status == "Cancelada" ||
                              consulta.status == "Recusada" ? (
                              <p style={{ color: "red" }}>{consulta.status}</p>
                            ) : consulta.status == "Adiada" ? (
                              <p style={{ color: "#dddd30" }}>
                                {consulta.status}
                              </p>
                            ) : (
                              <p style={{ color: "#2393ff" }}>
                                {consulta.status}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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
              <th />
            </tr>
          </table>
          <div className="tabela">
            <table>
              {this.state.listaConsultasFiltrada.map((consulta, index) => {
                return (
                  <tr>
                    <div>
                      {/* <div> */}
                      <td>{consulta.pacienteNome}</td>
                      <td>{consulta.dataConsulta}</td>
                      <td>{consulta.descricao.substring(0, 10) + "..."}</td>
                      <td>{consulta.pacienteEmail.substring(0, 10) + "..."}</td>
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
                      {consulta.accord === true ? (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver mais
                          </button>
                        ) : (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver menos
                          </button>
                        )}
                      </td>
                    </div>

                    <div>
                      {consulta.accord === true ? (
                        <div />
                      ) : (
                        <div id="listar__accordion__div">
                          <div class="listar__accordion__div__item">
                            <h3>Paciente</h3>
                            <br />
                            <p>{consulta.pacienteNome}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>E-mail Paciente</h3>
                            <br />
                            <p>{consulta.pacienteEmail}</p>
                          </div>

                          <div class="listar__accordion__div__item">
                            <h3>Observações</h3>
                            <br />
                            <p>{consulta.descricao}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Data da consulta</h3>
                            <br />
                            <p>{consulta.dataConsulta}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Status</h3>
                            <br />
                            {consulta.status == "Realizada" ||
                            consulta.status == "Confirmada" ? (
                              <p style={{ color: "#00ec00" }}>
                                {consulta.status}
                              </p>
                            ) : consulta.status == "Cancelada" ||
                              consulta.status == "Recusada" ? (
                              <p style={{ color: "red" }}>{consulta.status}</p>
                            ) : consulta.status == "Adiada" ? (
                              <p style={{ color: "#dddd30" }}>
                                {consulta.status}
                              </p>
                            ) : (
                              <p style={{ color: "#2393ff" }}>
                                {consulta.status}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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
                    <div>
                      {/* <div> */}
                      <td>{consulta.pacienteNome}</td>
                      <td>{consulta.medicoNome}</td>
                      <td>{consulta.dataConsulta}</td>
                      <td>{consulta.descricao.substring(0, 10) + "..."}</td>
                      <td>{consulta.pacienteEmail.substring(0, 10) + "..."}</td>
                      <td>{consulta.medicoEmail.substring(0, 10) + "..."}</td>
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
                      {consulta.accord === true ? (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver mais
                          </button>
                        ) : (
                          <button
                            className="btn-green-yellow"
                            onClick={() => this.atualizaEstadoAccord(index)}
                          >
                            Ver menos
                          </button>
                        )}
                      </td>
                    </div>

                    <div>
                      {consulta.accord === true ? (
                        <div />
                      ) : (
                        <div id="listar__accordion__div">
                          <div class="listar__accordion__div__item">
                            <h3>Paciente</h3>
                            <br />
                            <p>{consulta.pacienteNome}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>E-mail Paciente</h3>
                            <br />
                            <p>{consulta.pacienteEmail}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Médico</h3>
                            <br />
                            <p>{consulta.medicoNome}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>E-mail Médico</h3>
                            <br />
                            <p>{consulta.medicoEmail}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Observações</h3>
                            <br />
                            <p>{consulta.descricao}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Data da consulta</h3>
                            <br />
                            <p>{consulta.dataConsulta}</p>
                          </div>
                          <div class="listar__accordion__div__item">
                            <h3>Status</h3>
                            <br />
                            {consulta.status == "Realizada" ||
                            consulta.status == "Confirmada" ? (
                              <p style={{ color: "#00ec00" }}>
                                {consulta.status}
                              </p>
                            ) : consulta.status == "Cancelada" ||
                              consulta.status == "Recusada" ? (
                              <p style={{ color: "red" }}>{consulta.status}</p>
                            ) : consulta.status == "Adiada" ? (
                              <p style={{ color: "#dddd30" }}>
                                {consulta.status}
                              </p>
                            ) : (
                              <p style={{ color: "#2393ff" }}>
                                {consulta.status}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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
