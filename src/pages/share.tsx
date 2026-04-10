import { useEffect, useState } from 'react';
import type { DdayItem } from '../types/dday';
import { loadItems } from '../utils/storage';
import { getDaysRemaining, formatDday, formatDate } from '../utils/ddayCalculator';

export default function Share() {
  const [item, setItem] = useState<DdayItem | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const found = loadItems().find(i => i.id === id);
    if (found) setItem(found);
    else window.location.href = '/';
  }, []);

  if (!item) return null;

  const days = getDaysRemaining(item.targetDate);
  const isMilestone = Math.abs(days) % 100 === 0 || Math.abs(days) === 365;

  const shareText = `${item.emoji} ${item.title}\n${formatDday(days)}\n${formatDate(item.targetDate)}\n\nD-day 카운터 앱으로 기록 중 📅`;

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: item!.title, text: shareText });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('클립보드에 복사되었어요!');
      }
    } catch {
      await navigator.clipboard.writeText(shareText);
      alert('클립보드에 복사되었어요!');
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F6FA', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px' }}>
      {/* 축하 카드 */}
      <div style={{
        width: '100%',
        maxWidth: 320,
        background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
        borderRadius: 24,
        padding: '40px 24px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}>
        <div style={{ fontSize: 64 }}>{item.emoji}</div>
        {isMilestone && <div style={{ fontSize: 16, fontWeight: 700, background: 'rgba(255,255,255,0.25)', borderRadius: 20, padding: '4px 14px', display: 'inline-block', marginTop: 8 }}>🎊 기념일</div>}
        <div style={{ fontSize: 24, fontWeight: 800, marginTop: 12 }}>{item.title}</div>
        <div style={{ fontSize: 48, fontWeight: 900, marginTop: 8, letterSpacing: -2 }}>{formatDday(days)}</div>
        <div style={{ fontSize: 13, opacity: 0.85, marginTop: 8 }}>{formatDate(item.targetDate)}</div>
        <div style={{ fontSize: 11, opacity: 0.7, marginTop: 16 }}>📅 D-day 카운터</div>
      </div>

      <div style={{ marginTop: 32, width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button
          onClick={handleShare}
          style={{ padding: '16px', background: item.color, color: '#fff', border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
        >
          공유하기
        </button>
        <button
          onClick={() => { window.location.href = `/detail?id=${item.id}`; }}
          style={{ padding: '14px', background: '#fff', color: '#555', border: '1.5px solid #E0E0E0', borderRadius: 14, fontSize: 15, cursor: 'pointer' }}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
