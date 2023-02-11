import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [first, setfirst] = useState('');
  return (
    <div className="App">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
