import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import config from "react-global-configuration";
import './index.css';
import App from './App';
import {StoreProvider} from "./store/useStore";
import * as serviceWorker from './serviceWorker';
const ENV = process.env.REACT_APP_ENV_VAR || process.env.NODE_ENV;
const conf = require(`./config/${ENV}.json`);
config.set(conf);

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
