import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
   const middlewares = [];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const storeEnhancer = [middlewareEnhancer];

   // using composeWithDevTools instead of compose from redux
   // for the redux extension
   const composedEnhancer = composeWithDevTools(...storeEnhancer);

   const store = createStore(
      rootReducer,
      preloadedState,
      composedEnhancer
   );

   // hot module replacement(no browser reload)
   if(process.env.NODE_ENV !== 'production') {
      if(module.hot) {
         module.hot.accept('../reducers/rootReducer', () => {
            const newRootReducer = require('../reducers/rootReducer').default;
            store.replaceReducer(newRootReducer);
         });
      }
   }

   return store;
}