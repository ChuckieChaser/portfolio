import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { domAnimation, LazyMotion } from 'motion/react';

import App from './App.jsx';

import './styles/token.css';
import './styles/global.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LazyMotion features={domAnimation}>
            <App />
        </LazyMotion>
    </StrictMode>
);
