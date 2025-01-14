import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImagePage from './pages/ImagePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/photos" />} />
            <Route path="/photos" element={<HomePage />} />
            <Route path="/photos/:id" element={<ImagePage />} />
        </Routes>
    );
}

export default App;
