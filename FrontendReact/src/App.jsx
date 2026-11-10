import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/Scrolltotop';

import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import Menu from './pages/Menu';
import SelectWritting from './pages/SelectWritting';
import SelectSpeaking from './pages/SelectSpeaking';
import TestWritting from './pages/TestWritting';
import TestSpeaking from './pages/TestSpeaking';
import TextAnalysis from './pages/TextAnalysis';
import SpeakingAnalysis from './pages/SpeakingAnalysis';
import Historial from './pages/Historial';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />

        {/* Flujo de escritura: Menu → SelectWritting → TestWritting → TextAnalysis */}
        <Route path="/select-writting" element={<SelectWritting />} />
        <Route path="/test-writting" element={<TestWritting />} />
        <Route path="/analisis-escritura" element={<TextAnalysis />} />

        {/* Flujo de habla: Menu → SelectSpeaking → TestSpeaking → SpeakingAnalysis */}
        <Route path="/select-speaking" element={<SelectSpeaking />} />
        <Route path="/test-speaking" element={<TestSpeaking />} />
        <Route path="/analisis-habla" element={<SpeakingAnalysis />} />

        {/* Barra inferior */}
        <Route path="/historial" element={<Historial />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Cualquier ruta desconocida vuelve al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;