import React from 'react';
import { createRoot } from 'react-dom/client';

const soma = (a, b) => {
    return a + b;
}

import App from './App'; 

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);