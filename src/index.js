import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';


function render() {
   const root = document.getElementById('root');
   ReactDOM.render(<App />, root);
}

render();
registerServiceWorker();
