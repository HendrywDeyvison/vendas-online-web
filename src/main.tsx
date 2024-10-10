import './main.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { DataProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import store from './store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </GlobalProvider>
  </Provider>,
);
