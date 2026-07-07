import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import { SearchProvider } from './context/SearchProvider.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
