import React, { Component } from "react";
import "../../assets/css/cadastrarconsulta.css";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import api from "../../services/api";

export default class CadastrarUsuario extends Component {

    constructor()
    {
        super();

        this.state = {
            nome : '',
            email : '',
            senha : '',
            telefone : '',
            rg : '',
            cpf : '',
            dataNascimento : '',
            endereco : ''
        }
    }
    
    cadastrarUsuario()
    {
        let usuarioFormData = new FormData();

        // Setando valores do FormData
        usuarioFormData.set('nome', this.state.nome);
        usuarioFormData.set('email', this.state.email);
        usuarioFormData.set('senha', this.state.senha);
        usuarioFormData.set('telefone', this.state.telefone);
        usuarioFormData.set('rg', this.state.rg);
        usuarioFormData.set('cpf', this.state.cpf);
        usuarioFormData.set('dataNascimento', this.state.dataNascimento);
        usuarioFormData.set('endereco', this.state.endereco);
        usuarioFormData.set('idTipoUsuario', 3);
        usuarioFormData.set('idClinica', 1);

        api.usuarios(usuarioFormData).CadastrarPaciente();
    }

    atualizaNome(event)
    {
        this.setState({ nome : event.target.value });
    }
    
    atualizaSenha(event)
    {
        this.setState({ senha : event.target.value });
    }
    
    atualizaEmail(event)
    {
        this.setState({ email : event.target.value });
    }

    atualizaTelefone(event)
    {
        this.setState({ telefone : event.target.value });
    }

    atualizaRG(event)
    {
        this.setState({ rg : event.target.value });
    }
    
    atualizaCPF(event)
    {
        this.setState({ cpf : event.target.value });
    }

    atualizaDataNascimento(event)
    {
        this.setState({ dataNascimento : event.target.value });
    }

    atualizaEndereco(event)
    {
        this.setState({ endereco : event.target.value });
    }

  render() {
    return (
      <div>
        <Cabecalho />
        <main>
          <section id="cadastrarConsulta" class="pa-all-g">
            <h1 class="ma-top-g">Cadastrar Paciente</h1>
            <div class="formulario pa-all-g ma-top-m">
              <form onSubmit={this.cadastrarUsuario.bind(this)} action="#">
              <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="text"
                    placeholder="&nbsp;"
                    onChange={this.atualizaNome.bind(this)}
                    value={this.state.nome}
                  />
                  <span class="inpt-label">Nome</span>
                </label>
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="email"
                    placeholder="&nbsp;"
                    onChange={this.atualizaEmail.bind(this)}
                    value={this.state.email}
                  />
                  <span class="inpt-label">E-mail</span>
                </label>
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="password"
                    placeholder="&nbsp;"
                    onChange={this.atualizaSenha.bind(this)}
                    value={this.state.senha}
                  />
                  <span class="inpt-label">Senha</span>
                </label>
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="text"
                    placeholder="&nbsp;"
                    onChange={this.atualizaTelefone.bind(this)}
                    vlaue={this.state.telefone}
                  />
                  <span class="inpt-label">Telefone</span>
                </label>
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="text"
                    placeholder="&nbsp;"
                    onChange={this.atualizaRG.bind(this)}
                    value={this.state.rg}
                  />
                  <span class="inpt-label">RG</span>
                </label>
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="text"
                    placeholder="&nbsp;"
                    onChange={this.atualizaCPF.bind(this)}
                    value={this.state.cpf}
                  />
                  <span class="inpt-label">CPF</span>
                </label>
                
                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="date"
                    placeholder="&nbsp;"
                    onChange={this.atualizaDataNascimento.bind(this)}
                    value={this.state.dataNascimento}
                  />
                  <span class="inpt-label">Data de nascimento</span>
                </label>

                <label class="inpt-round">
                  <input
                    class="medio"
                    id="inpt-round"
                    type="text"
                    min="1"
                    step="any"
                    placeholder="&nbsp;"
                    onChange={this.atualizaEndereco.bind(this)}
                    value={this.state.endereco}
                  />
                  <span class="inpt-label">Endereço</span>
                </label>

                <label>
                  <button action="submit" class="green-btn">
                    Cadastrar
                  </button>
                </label>
              </form>
            </div>
          </section>
        </main>
        <Rodape />
      </div>
    );
  }
}
