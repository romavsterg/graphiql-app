import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ReduxProvider } from './utils/Redux/ReduxProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
