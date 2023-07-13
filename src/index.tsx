import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { storeContext } from 'Context/StoreContext';
import { Store } from 'Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = new Store();

root.render(
    <React.StrictMode>
        <storeContext.Provider value={store}>
            <App />
        </storeContext.Provider>
    </React.StrictMode>
);
