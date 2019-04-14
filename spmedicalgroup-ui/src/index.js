import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact="/" component={App}></Route>
                {/* <Route exact="/cadastrarconsulta" component={CadastrarConsulta}></Route>
                <Route exact="/listarconsulta" component={ListarConsulta}></Route>
                <Route exact="/login" component={Login}></Route> */}
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
