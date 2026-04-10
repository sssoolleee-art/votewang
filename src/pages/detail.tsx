import { useEffect, useState } from 'react';
import type { DdayItem } from '../types/dday';
import { loadItems, deleteItem } from '../utils/storage';
import { getDaysRemaining, formatDday, getNextMilestone, formatDate } from '../utils/ddayCalculator';
import { BannerAd } from '../utils/ads';

export default function Detail() {
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
  const next = getNextMilestone(item.targetDate);

  function handleDelete() {
    if (!window.confirm('이 D-day를 삭제할까요?')) return;
    deleteItem(item!.id);
    window.location.href = '/';
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F6FA', paddingBottom: 80 }}>
      {/* 메인 카드 */}
      <div style={{ background: item.color, padding: '32px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 56 }}>{item.emoji}</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>{item.title}</div>
        <div style={{ fontSize: 56, fontWeight: 900, marginTop: 8, letterSpacing: -2 }}>{formatDday(days)}</div>
        <div style={{ fontSize: 14, opacity: 0.85, marginTop: 8 }}>{formatDate(item.targetDate)}</div>
      </div>

      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 다음 기념일 */}
        {next && (
          <div style={{ background: '#fff', borderRadius: 14, padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#555', marginBottom: 10 }}>🎯 다음 기념일</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{next.milestone}일 기념일</div>
              <div style={{ fontSize: 14, color: item.color, fontWeight: 700 }}>D-{next.daysLeft}</div>
            </div>
          </div>
        )}

        {/* 공유 버튼 */}
        <button
          onClick={() => { window.location.href = `/share?id=${item.id}`; }}
          style={{ padding: '16px', background: item.color, color: '#fff', border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
        >
          🎉 기념일 카드 공유하기
        </button>

        {/* 삭제 */}
        <button
          onClick={handleDelete}
          style={{ padding: '14px', background: '#fff', color: '#E74C3C', border: '1.5px solid #E74C3C', borderRadius: 14, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
        >
          삭제
        </button>

        <button
          onClick={() => { window.location.href = '/'; }}
          style={{ padding: '14px', background: 'transparent', color: '#999', border: 'none', fontSize: 15, cursor: 'pointer' }}
        >
          ← 목록으로
        </button>

        <BannerAd />
      </div>
    </div>
  );
}
