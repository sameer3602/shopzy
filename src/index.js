import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {Store} from './redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={Store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
