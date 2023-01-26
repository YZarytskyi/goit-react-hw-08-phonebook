import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ChakraProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ChakraProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
