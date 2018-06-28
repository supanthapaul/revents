import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();

const root = document.getElementById('root');

function render() {
   ReactDOM.render(
      <Provider store={store}>
         <BrowserRouter>
            <ScrollToTop>
               <App />
            </ScrollToTop>
         </BrowserRouter>
      </Provider>
      , root);
}

render();
registerServiceWorker();
