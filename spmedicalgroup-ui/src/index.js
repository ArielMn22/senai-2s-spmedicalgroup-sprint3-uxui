import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import * as serviceWorker from './serviceWorker';
import MinhasConsultas from './pages/MinhasConsultas/MinhasConsultas';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Login from './pages/Login/Login';
import Sair from './pages/Sair/Sair';
import CadastrarConsulta from './pages/CadastrarConsulta/CadastrarConsulta';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { usuarioAutenticado } from './services/auth';
import CadastrarUsuario from './pages/CadastrarUsuario/CadastrarUsuario';

const Permissao = ({ component : Component}) => (
    <Route
        render = {props => usuarioAutenticado() ?
            (<Component {...props}/>) :
            (<Redirect to={{ pathname : '/login', state: {from: props.location}}} />)
        }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Permissao exact path="/cadastrarconsulta" component={CadastrarConsulta}/>
                <Route exact path="/cadastrarusuario" component={CadastrarUsuario}/>
                <Permissao exact path="/minhasconsultas" component={MinhasConsultas}/>
                <Permissao exact path="/sair" component={Sair}/>
                <Route exact path="/login" component={Login}></Route>
                <Route component={NaoEncontrada}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
