import './main.css';

import { createRoot } from 'react-dom/client';

import App from './App';
import { DataProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </GlobalProvider>,
);
