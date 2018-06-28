import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlApp } from './IntlApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IntlApp />, document.getElementById('root'));
registerServiceWorker();
