import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global_style';
import './index.scss';
import './global_variables.scss';
import registerServiceWorker from './registerServiceWorker';
import Banner from './containers/Banner/Banner'; 


ReactDOM.render(<Banner />, document.getElementById('root'));
registerServiceWorker();
