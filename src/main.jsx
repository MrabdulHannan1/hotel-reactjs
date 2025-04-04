import App from './App.jsx';
import './index.css';
import { createRoot } from 'react-dom/client';
import Providers from './components/providers.jsx';

createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>,
);