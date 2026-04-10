import { HashRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import CreatePage from './pages/create';
import DetailPage from './pages/detail';
import SharePage from './pages/share';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </HashRouter>
  );
}
