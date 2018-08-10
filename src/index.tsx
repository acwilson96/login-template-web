/* ReactJS */
import * as React                                     from 'react';
import * as ReactDOM                                  from 'react-dom';
import registerServiceWorker                          from './registerServiceWorker';


/* Components/Redux */
import { Provider }                                   from 'react-redux';
import App                                            from './App';
import store                                          from './Store';

/* Styles */
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
