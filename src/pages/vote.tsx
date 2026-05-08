import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { POLLS, CATEGORY_COLORS } from '../data/polls';
import { loadData, saveData } from '../utils/storage';
import { showInterstitialAd, BannerAd } from '../utils/ads';

const STORAGE_KEY = 'poll_voted_ids';

export default function VotePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pollId = searchParams.get('id') ?? '';
  const poll = POLLS.find(p => p.id === pollId);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);
  const [rewardUnlocked, setRewardUnlocked] = useState(false);
  const [rewardLoading, setRewardLoading] = useState(false);

  useEffect(() => {
    if (!poll) return;
    const ids = loadData<string[]>(STORAGE_KEY, []);
    if (ids.includes(poll.id)) setVoted(true);
  }, [poll]);

  if (!poll) {
    return (
      <div style={{ padding: 20, textAlign: 'center', paddingTop: 80 }}>
        <p>투표를 찾을 수 없어요.</p>
        <button onClick={() => navigate('/')} style={btnStyle('#8E44AD')}>돌아가기</button>
      </div>
    );
  }

  const catColor = CATEGORY_COLORS[poll.category];
  const maxVotes = Math.max(...poll.options.map(o => o.voteCount));

  function handleVote(optId: string) {
    if (voted) return;
    setSelectedId(optId);
    setVoted(true);
    const ids = loadData<string[]>(STORAGE_KEY, []);
    saveData(STORAGE_KEY, [...ids, poll!.id]);
  }

  async function handleNext() {
    await showInterstitialAd();
    navigate('/');
  }

  async function handleUnlockReward() {
    setRewardLoading(true);
    await showInterstitialAd();
    setRewardLoading(false);
    setRewardUnlocked(true);
  }

  const selected = poll.options.find(o => o.id === selectedId) ?? poll.options[0];
  const rank = [...poll.options].sort((a, b) => b.voteCount - a.voteCount).findIndex(o => o.id === selected.id);

  return (
    <div style={{ background: '#F4ECF7', minHeight: '100vh', paddingBottom: 80 }}>
      {/* 헤더 */}
      <div style={{
        background: '#8E44AD',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', padding: 0 }}
        >
          ←
        </button>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, fontWeight: 700 }}>투표하기</span>
      </div>

      <div style={{ padding: '20px 16px 0' }}>
        {/* 카테고리 태그 */}
        <span style={{
          background: catColor, color: '#fff',
          fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
        }}>
          {poll.category === 'trend' ? '트렌드' : poll.category === 'life' ? '일상' : poll.category === 'food' ? '음식' : poll.category === 'entertainment' ? '엔터' : '의견'}
        </span>

        {/* 질문 */}
        <h2 style={{ margin: '12px 0 4px', fontSize: 22, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.3 }}>
          {poll.question}
        </h2>
        <p style={{ margin: '0 0 20px', fontSize: 13, color: '#888' }}>
          {poll.totalVotes.toLocaleString()}명이 투표했어요
        </p>

        {/* 선택지 or 결과 */}
        {!voted ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {poll.options.map(opt => (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: 14,
                  padding: '16px 20px',
                  fontSize: 17,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 22 }}>{opt.emoji}</span>
                {opt.text}
              </button>
            ))}
          </div>
        ) : (
          <>
            {/* 결과 바 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {poll.options.map(opt => {
                const isSelected = opt.id === selectedId;
                const isTop = opt.voteCount === maxVotes;
                return (
                  <div key={opt.id} style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '14px 16px',
                    border: isSelected ? '2px solid #8E44AD' : '2px solid transparent',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a' }}>
                        {opt.emoji} {opt.text}
                        {isTop && <span style={{ marginLeft: 6, fontSize: 12, color: '#E74C3C', fontWeight: 700 }}>1위</span>}
                        {isSelected && <span style={{ marginLeft: 6, fontSize: 12, color: '#8E44AD', fontWeight: 700 }}>내 선택</span>}
                      </span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#8E44AD' }}>{opt.percentage}%</span>
                    </div>
                    <div style={{ background: '#f0e6f6', borderRadius: 6, height: 8, overflow: 'hidden' }}>
                      <div style={{
                        background: isSelected ? '#8E44AD' : '#C39BD3',
                        height: '100%',
                        width: `${opt.percentage}%`,
                        borderRadius: 6,
                        transition: 'width 0.6s ease',
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 결과 메시지 */}
            <div style={{
              background: '#8E44AD',
              borderRadius: 14,
              padding: '14px 20px',
              marginBottom: 20,
              textAlign: 'center',
            }}>
              <p style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 700 }}>
                {rank === 0 ? '당신은 1위를 선택했어요!' : rank === poll.options.length - 1 ? '독특한 선택이네요!' : `${rank + 1}위를 선택했어요`}
              </p>
            </div>

            {/* 리워드 잠금 */}
            {!rewardUnlocked ? (
              <div style={{
                background: '#fff',
                borderRadius: 14,
                padding: '16px',
                marginBottom: 20,
                textAlign: 'center',
                border: '2px dashed #C39BD3',
              }}>
                <p style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>
                  🔒 성별/연령별 상세 분석
                </p>
                <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
                  광고 시청 후 자세한 분석을 볼 수 있어요
                </p>
                <button
                  onClick={handleUnlockReward}
                  disabled={rewardLoading}
                  style={btnStyle('#8E44AD')}
                >
                  {rewardLoading ? '로딩 중...' : '광고 보고 분석 보기'}
                </button>
              </div>
            ) : (
              <div style={{
                background: '#fff',
                borderRadius: 14,
                padding: '16px',
                marginBottom: 20,
              }}>
                <p style={{ margin: '0 0 12px', fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>
                  성별/연령별 분석
                </p>
                {poll.options.slice(0, 1).map(opt => (
                  <div key={opt.id}>
                    <div style={{ marginBottom: 12 }}>
                      <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, color: '#555' }}>성별 TOP</p>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <div style={{ flex: 1, background: '#f5f0ff', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
                          <p style={{ margin: 0, fontSize: 12, color: '#888' }}>남성</p>
                          <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 700, color: '#8E44AD' }}>
                            {poll.options.sort((a, b) => b.genderBreakdown.male - a.genderBreakdown.male)[0].emoji} {poll.options.sort((a, b) => b.genderBreakdown.male - a.genderBreakdown.male)[0].text}
                          </p>
                          <p style={{ margin: '2px 0 0', fontSize: 13, color: '#8E44AD', fontWeight: 700 }}>
                            {poll.options.sort((a, b) => b.genderBreakdown.male - a.genderBreakdown.male)[0].genderBreakdown.male}%
                          </p>
                        </div>
                        <div style={{ flex: 1, background: '#fdf0f7', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
                          <p style={{ margin: 0, fontSize: 12, color: '#888' }}>여성</p>
                          <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 700, color: '#C0392B' }}>
                            {poll.options.sort((a, b) => b.genderBreakdown.female - a.genderBreakdown.female)[0].emoji} {poll.options.sort((a, b) => b.genderBreakdown.female - a.genderBreakdown.female)[0].text}
                          </p>
                          <p style={{ margin: '2px 0 0', fontSize: 13, color: '#C0392B', fontWeight: 700 }}>
                            {poll.options.sort((a, b) => b.genderBreakdown.female - a.genderBreakdown.female)[0].genderBreakdown.female}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, color: '#555' }}>연령대별 TOP</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {(['10s', '20s', '30s', '40s_plus'] as const).map(age => {
                          const topOpt = [...poll.options].sort((a, b) => b.ageBreakdown[age] - a.ageBreakdown[age])[0];
                          const label = age === '10s' ? '10대' : age === '20s' ? '20대' : age === '30s' ? '30대' : '40대+';
                          return (
                            <div key={age} style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              background: '#f8f4ff', borderRadius: 8, padding: '8px 12px',
                            }}>
                              <span style={{ fontSize: 13, color: '#555' }}>{label}</span>
                              <span style={{ fontSize: 13, fontWeight: 700, color: '#8E44AD' }}>
                                {topOpt.emoji} {topOpt.text} {topOpt.ageBreakdown[age]}%
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 버튼 */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <button
                onClick={() => navigate(`/share?id=${poll.id}&selected=${selectedId}`)}
                style={{ ...btnStyle('#7D3C98'), flex: 1 }}
              >
                공유하기
              </button>
              <button
                onClick={handleNext}
                style={{ ...btnStyle('#8E44AD'), flex: 1 }}
              >
                다음 투표
              </button>
            </div>
          </>
        )}
      </div>

      {/* 하단 배너 */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', zIndex: 10 }}>
        <BannerAd />
      </div>
    </div>
  );
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 0',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
  };
}
