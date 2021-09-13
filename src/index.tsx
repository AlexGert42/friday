import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import 'antd/dist/antd.css'
import {App} from './App';
import {store} from './store/store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


//  "scripts": {
//    "start": "react-scripts start",
//    "build": "react-scripts build",
//    "test": "react-scripts test",
//    "eject": "react-scripts eject"
//  },

