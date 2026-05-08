import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { POLLS, CATEGORY_LABELS, CATEGORY_COLORS } from '../data/polls';
import type { Poll } from '../data/polls';
import { loadData } from '../utils/storage';
import { BannerAd, isAdFree, restoreAdFree, buyAdFree } from '../utils/ads';

const STORAGE_KEY = 'poll_voted_ids';

const CATEGORIES = ['all', 'trend', 'life', 'food', 'entertainment', 'opinion'] as const;
type CategoryFilter = typeof CATEGORIES[number];

export default function IndexPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [votedIds, setVotedIds] = useState<string[]>([]);
  const [adFree, setAdFree] = useState(isAdFree());
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    setVotedIds(loadData<string[]>(STORAGE_KEY, []));
    restoreAdFree(() => setAdFree(true));
  }, []);

  const filtered = activeCategory === 'all'
    ? POLLS
    : POLLS.filter(p => p.category === activeCategory);

  const hot = filtered.filter(p => p.isHot);
  const regular = filtered.filter(p => !p.isHot);

  function formatVotes(n: number) {
    if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
    return n.toLocaleString();
  }

  function PollCard({ poll }: { poll: Poll }) {
    const voted = votedIds.includes(poll.id);
    const catColor = CATEGORY_COLORS[poll.category];
    return (
      <div
        onClick={() => navigate(`/vote?id=${poll.id}`)}
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: '16px',
          marginBottom: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          cursor: 'pointer',
          position: 'relative',
          border: voted ? '2px solid #8E44AD' : '2px solid transparent',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{
            background: catColor,
            color: '#fff',
            fontSize: 11,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 20,
          }}>
            {CATEGORY_LABELS[poll.category]}
          </span>
          {poll.isHot && (
            <span style={{ fontSize: 11, color: '#E74C3C', fontWeight: 700 }}>HOT</span>
          )}
          {voted && (
            <span style={{ fontSize: 11, color: '#8E44AD', fontWeight: 700, marginLeft: 'auto' }}>
              투표 완료
            </span>
          )}
        </div>
        <p style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4 }}>
          {poll.question}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
          {poll.options.map(opt => (
            <span key={opt.id} style={{
              background: '#f5f5f5',
              borderRadius: 20,
              padding: '4px 10px',
              fontSize: 13,
              color: '#333',
            }}>
              {opt.emoji} {opt.text}
            </span>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 12, color: '#999' }}>
          {formatVotes(poll.totalVotes)}명 참여
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: '#F4ECF7', minHeight: '100vh', paddingBottom: 80 }}>
      {/* 헤더 */}
      <div style={{
        background: '#8E44AD',
        padding: '20px 20px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#fff' }}>
          👑 투표왕
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
          지금 가장 핫한 투표에 참여하세요
        </p>
      </div>

      {/* IAP 버튼 */}
      {!adFree && (
        <div style={{ padding: '10px 16px', background: '#F9F0FF' }}>
          <button
            onClick={() => { setPurchasing(true); buyAdFree(() => setAdFree(true), () => setPurchasing(false)); }}
            disabled={purchasing}
            style={{
              width: '100%', padding: '12px', borderRadius: 12, border: 'none',
              background: '#F3E8FF', color: '#8E44AD', fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}
          >
            {purchasing ? '처리 중...' : '광고 없이 즐기기 ₩990'}
          </button>
        </div>
      )}

      {/* 카테고리 필터 */}
      <div style={{
        background: '#fff',
        padding: '12px 16px',
        overflowX: 'auto',
        display: 'flex',
        gap: 8,
        position: 'sticky',
        top: 76,
        zIndex: 9,
        boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? '#8E44AD' : '#f0f0f0',
              color: activeCategory === cat ? '#fff' : '#555',
              border: 'none',
              borderRadius: 20,
              padding: '6px 14px',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {cat === 'all' ? '전체' : CATEGORY_LABELS[cat as Poll['category']]}
          </button>
        ))}
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {/* 인기 투표 */}
        {hot.length > 0 && (
          <>
            <h2 style={{ margin: '0 0 12px', fontSize: 15, fontWeight: 700, color: '#555' }}>
              🔥 인기 투표
            </h2>
            {hot.map(poll => <PollCard key={poll.id} poll={poll} />)}
            {!adFree && <div style={{ marginBottom: 16 }}><BannerAd /></div>}
          </>
        )}

        {/* 일반 투표 */}
        {regular.length > 0 && (
          <>
            <h2 style={{ margin: '0 0 12px', fontSize: 15, fontWeight: 700, color: '#555' }}>
              전체 투표
            </h2>
            {regular.map((poll, i) => (
              <div key={poll.id}>
                <PollCard poll={poll} />
                {!adFree && (i + 1) % 5 === 0 && (
                  <div style={{ marginBottom: 16 }}><BannerAd /></div>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {/* 하단 배너 */}
      {!adFree && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', zIndex: 10 }}>
          <BannerAd />
        </div>
      )}
    </div>
  );
}
