import React, { Component } from "react";
import { AsyncSeriesHook } from "tapable";
import axios from 'axios';

const url = "http://localhost:5000/api/";

const auth = "bearer " + localStorage.getItem("spmedicalgroup-usuario");

export default {
  consultasLogado(consulta) {
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
  }
};
