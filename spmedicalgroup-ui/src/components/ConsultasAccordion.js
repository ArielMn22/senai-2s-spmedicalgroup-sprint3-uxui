import React, { Component } from "react";

export default class ConsultasAccordion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let token = localStorage.getItem("spmedicalgroup-usuario");

    let jwtDecode = require("jwt-decode");

    let decode = jwtDecode(token);

    // Atribui a consulta que foi enviada por props...
    let consulta = this.props.consulta;

    if (decode.tipoUsuario === "Paciente") {
      return (
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
              <p style={{ color: "#00ec00" }}>{consulta.status}</p>
            ) : consulta.status == "Cancelada" ||
              consulta.status == "Recusada" ? (
              <p style={{ color: "red" }}>{consulta.status}</p>
            ) : consulta.status == "Adiada" ? (
              <p style={{ color: "#dddd30" }}>{consulta.status}</p>
            ) : (
              <p style={{ color: "#2393ff" }}>{consulta.status}</p>
            )}
          </div>
        </div>
      );
    } else if (decode.tipoUsuario == "Médico") {
      return (
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
              <p style={{ color: "#00ec00" }}>{consulta.status}</p>
            ) : consulta.status == "Cancelada" ||
              consulta.status == "Recusada" ? (
              <p style={{ color: "red" }}>{consulta.status}</p>
            ) : consulta.status == "Adiada" ? (
              <p style={{ color: "#dddd30" }}>{consulta.status}</p>
            ) : (
              <p style={{ color: "#2393ff" }}>{consulta.status}</p>
            )}
          </div>

          <div className="listar__accordion__div__item">
            <button className="btn-green-yellow">Editar</button>
          </div>
        </div>
      );
    } else if (decode.tipoUsuario == "Administrador") {
      return (
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
              <p style={{ color: "#00ec00" }}>{consulta.status}</p>
            ) : consulta.status == "Cancelada" ||
              consulta.status == "Recusada" ? (
              <p style={{ color: "red" }}>{consulta.status}</p>
            ) : consulta.status == "Adiada" ? (
              <p style={{ color: "#dddd30" }}>{consulta.status}</p>
            ) : (
              <p style={{ color: "#2393ff" }}>{consulta.status}</p>
            )}
          </div>

          <div className="listar__accordion__div__item">
            <button className="btn-green-yellow" onClick={}>Editar</button>
          </div>
        </div>
      );
    }
  }
}
