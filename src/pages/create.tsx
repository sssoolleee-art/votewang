import { useState } from 'react';
import { CATEGORY_DEFAULTS } from '../types/dday';
import type { DdayCategory } from '../types/dday';
import { addItem } from '../utils/storage';

export default function Create() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<DdayCategory>('custom');
  const [date, setDate] = useState('');

  const def = CATEGORY_DEFAULTS[category];
  const today = new Date().toISOString().split('T')[0];

  function handleSave() {
    if (!title.trim() || !date) return;
    const id = crypto.randomUUID();
    addItem({
      id,
      title: title.trim(),
      targetDate: date,
      emoji: def.emoji,
      color: def.color,
      category,
      createdAt: new Date().toISOString(),
    });
    window.location.href = '/';
  }

  const cats = Object.entries(CATEGORY_DEFAULTS) as [DdayCategory, typeof CATEGORY_DEFAULTS[DdayCategory]][];

  return (
    <div style={{ minHeight: '100vh', background: '#F5F6FA' }}>
      <div style={{ background: '#3498DB', padding: '20px 16px 16px', color: '#fff' }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>📅 새 D-day 추가</div>
      </div>

      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* 미리보기 카드 */}
        <div style={{ background: def.color, borderRadius: 16, padding: '20px', textAlign: 'center', color: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
          <div style={{ fontSize: 48 }}>{def.emoji}</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{title || '제목을 입력하세요'}</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginTop: 4 }}>{date ? 'D-?' : '--'}</div>
        </div>

        {/* 제목 */}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#555', marginBottom: 8 }}>제목 *</div>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="예: 우리 100일, 수능까지..."
            maxLength={20}
            style={{ width: '100%', padding: '14px', borderRadius: 12, border: '1.5px solid #E0E0E0', fontSize: 15, background: '#fff', boxSizing: 'border-box' }}
          />
        </div>

        {/* 카테고리 */}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#555', marginBottom: 8 }}>카테고리</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cats.map(([key, val]) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 20,
                  border: `2px solid ${category === key ? val.color : '#E0E0E0'}`,
                  background: category === key ? val.color : '#fff',
                  color: category === key ? '#fff' : '#555',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {val.emoji} {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* 날짜 */}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#555', marginBottom: 8 }}>날짜 *</div>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{ width: '100%', padding: '14px', borderRadius: 12, border: '1.5px solid #E0E0E0', fontSize: 15, background: '#fff', boxSizing: 'border-box' }}
          />
        </div>

        {/* 저장 */}
        <button
          onClick={handleSave}
          disabled={!title.trim() || !date}
          style={{
            padding: '16px',
            background: title.trim() && date ? '#3498DB' : '#ccc',
            color: '#fff',
            border: 'none',
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 700,
            cursor: title.trim() && date ? 'pointer' : 'not-allowed',
          }}
        >
          저장하기
        </button>

        <button
          onClick={() => { window.location.href = '/'; }}
          style={{ padding: '14px', background: 'transparent', color: '#999', border: 'none', fontSize: 15, cursor: 'pointer' }}
        >
          취소
        </button>
      </div>
    </div>
  );
}
