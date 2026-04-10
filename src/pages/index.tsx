import { useEffect, useState } from 'react';
import type { DdayItem } from '../types/dday';
import { loadItems, deleteItem } from '../utils/storage';
import { getDaysRemaining, formatDday, checkTodayMilestone, formatDate } from '../utils/ddayCalculator';
import { BannerAd } from '../utils/ads';

export default function Home() {
  const [items, setItems] = useState<DdayItem[]>([]);

  useEffect(() => {
    setItems(loadItems());
  }, []);

  const milestones = items.filter(i => checkTodayMilestone(i) !== null);

  const sorted = [...items].sort((a, b) => {
    const da = getDaysRemaining(a.targetDate);
    const db = getDaysRemaining(b.targetDate);
    if (da >= 0 && db >= 0) return da - db;
    if (da < 0 && db < 0) return db - da;
    return da >= 0 ? -1 : 1;
  });

  function handleDelete(id: string) {
    if (!window.confirm('삭제할까요?')) return;
    deleteItem(id);
    setItems(loadItems());
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F6FA', paddingBottom: 80 }}>
      {/* 헤더 */}
      <div style={{ background: '#3498DB', padding: '20px 16px 16px', color: '#fff' }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>📅 D-day 카운터</div>
        <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>중요한 날을 기억하세요</div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* 기념일 알림 */}
        {milestones.length > 0 && (
          <div style={{ margin: '16px 0', background: '#FFF9C4', border: '1px solid #F1C40F', borderRadius: 12, padding: '12px 16px' }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>🎉 오늘의 기념일</div>
            {milestones.map(item => {
              const ms = checkTodayMilestone(item)!;
              return (
                <div key={item.id} style={{ fontSize: 14, color: '#555', marginBottom: 2 }}>
                  {item.emoji} {item.title} — {ms}일째 되는 날이에요!
                </div>
              );
            })}
          </div>
        )}

        {/* D-day 목록 */}
        {sorted.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>아직 등록된 D-day가 없어요</div>
            <div style={{ fontSize: 14 }}>아래 버튼으로 추가해보세요</div>
          </div>
        ) : (
          sorted.map((item, idx) => {
            const days = getDaysRemaining(item.targetDate);
            return (
              <div key={item.id}>
                <div
                  style={{
                    marginTop: 12,
                    background: '#fff',
                    borderRadius: 16,
                    padding: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    cursor: 'pointer',
                    borderLeft: `4px solid ${item.color}`,
                  }}
                  onClick={() => { window.location.href = `/detail?id=${item.id}`; }}
                >
                  <div style={{ fontSize: 36 }}>{item.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#222', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: '#999' }}>{formatDate(item.targetDate)}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: item.color }}>{formatDday(days)}</div>
                    {days === 0 && <div style={{ fontSize: 10, color: '#F39C12', fontWeight: 600 }}>오늘!</div>}
                  </div>
                </div>
                {idx === 1 && <div style={{ marginTop: 12 }}><BannerAd /></div>}
              </div>
            );
          })
        )}

        {/* 추가 버튼 */}
        <button
          onClick={() => { window.location.href = '/create'; }}
          style={{
            marginTop: 20,
            width: '100%',
            padding: '16px',
            background: '#3498DB',
            color: '#fff',
            border: 'none',
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          + 새 D-day 추가
        </button>
      </div>

      {/* 하단 배너 */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff' }}>
        <BannerAd />
      </div>
    </div>
  );
}
