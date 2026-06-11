import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import VoicePulsePage from './pages/VoicePulsePage';
import InsightAIPage from './pages/InsightAIPage';
import ActionSyncPage from './pages/ActionSyncPage';
import SimplePage from './pages/SimplePage';
import RequestDemoPage from './pages/RequestDemoPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voicepulse" element={<VoicePulsePage />} />
        <Route path="/insightai" element={<InsightAIPage />} />
        <Route path="/actionsync" element={<ActionSyncPage />} />
        <Route path="/resources" element={<SimplePage page="resources" />} />
        <Route path="/try-and-discover" element={<SimplePage page="discover" />} />
        <Route path="/login" element={<SimplePage page="login" />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="/explore-kasaji" element={<SimplePage page="explore" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
