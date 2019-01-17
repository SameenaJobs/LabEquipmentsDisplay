import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Redux related imports
import EquipmentStore from './app/redux-store/EquipmentStore';
import { Provider } from 'react-redux';

function AppWithStore() {
    return (
        <Provider store={EquipmentStore}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
