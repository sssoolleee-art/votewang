import { useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { graniteEvent, closeView } from '@apps-in-toss/web-framework';
import IndexPage from './pages/index';
import VotePage from './pages/vote';
import SharePage from './pages/share';

// 내비게이션 바 뒤로가기: 첫 화면이면 미니앱 종료, 그 외엔 이전 화면 (앱 자체 뒤로 버튼은 두지 않음)
function BackHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathRef = useRef(location.pathname);
  pathRef.current = location.pathname;
  useEffect(() => {
    try {
      const cleanup = graniteEvent.addEventListener('backEvent', {
        onEvent: () => {
          if (pathRef.current === '/' || pathRef.current === '') void closeView();
          else if ((window.history.state?.idx ?? 0) > 0) navigate(-1);
          else navigate('/', { replace: true });
        },
      });
      return () => { cleanup?.(); };
    } catch { return undefined; }
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <BackHandler />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </HashRouter>
  );
}
