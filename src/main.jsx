// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ImageProvider } from './context/ImageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ImageProvider>
            <App />
        </ImageProvider>
    </BrowserRouter>
);