import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

function render() {
      const root = document.getElementById('root');
      ReactDOM.render(
            <Provider store={store}>
                  <BrowserRouter>
                        <App />
                  </BrowserRouter>

            </Provider>
            , root);
}

render();
registerServiceWorker();
