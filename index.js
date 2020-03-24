import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './src/index.css';
import App from './src/App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Context } from './src/components/context/context'
 


ReactDOM.render(
	<Context>
	<Router>
	<App />
	</Router>
	</Context>
	,document.getElementById('root'));


