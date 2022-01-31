import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import { Provider } from './StoreContext';

const rerenderEntrieTree = (state) => {

    ReactDOM.render(
        <Provider store={store}>
            <App state={state} />
        </Provider>,
        document.getElementById('root')
    );
};

rerenderEntrieTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntrieTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
