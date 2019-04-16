import React, { Component } from "react";
import { AsyncSeriesHook } from "tapable";
import axios from "axios";

const url = "http://localhost:5000/api/";

export default {
  consultasLogado(consulta) {
    const auth = "bearer " + localStorage.getItem("spmedicalgroup-usuario");

    return {
      getAll: () =>
        axios.get(url + "consultas/listarporusuariologado", {
          headers: {
            Authorization: auth
          }
        }),

      post: () =>
        axios.post(
          url + "consultas",
          { consulta },
          {
            headers: { Authorization: auth }
          }
        )
    };
  },

  usuarios(usuario) {
    const auth = "bearer " + localStorage.getItem("spmedicalgroup-usuario");

    return {
      CadastrarPaciente: () =>
        axios.post(
          url + "usuarios/paciente",
          usuario,
          {
            headers: {
              Authorization: auth,
              'Content-Type' : 'multipart/form-data'
            }
          }
        )
    };
  }
};
