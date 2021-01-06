import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './components/common/Header';
import AppRouters from './router/AppRouters';
import "normalize.css/normalize.css";
import "../styles/styles.scss"
import configureStore from './redux/store'

import 'react-dates/lib/css/_datepicker.css';

// import PlayGround from './Playground/Portfolio';




const App=()=>(
    
<Provider store={configureStore()}>
<BrowserRouter>
        <div>
            <Header/>
            <AppRouters/>
        </div>
    </BrowserRouter>
        </Provider>
   )

ReactDOM.render(<App/>,document.getElementById("app"));
// ReactDOM.render(<PlayGround/>,document.getElementById("app"));
