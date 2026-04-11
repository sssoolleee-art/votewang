import { HashRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import VotePage from './pages/vote';
import SharePage from './pages/share';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </HashRouter>
  );
}
