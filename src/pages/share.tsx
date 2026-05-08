import { useSearchParams, useNavigate } from 'react-router-dom';
import { POLLS, CATEGORY_COLORS } from '../data/polls';
import { shareLink, shareText } from '../utils/share';

export default function SharePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pollId = searchParams.get('id') ?? '';
  const selectedId = searchParams.get('selected') ?? '';
  const poll = POLLS.find(p => p.id === pollId);
  const selected = poll?.options.find(o => o.id === selectedId) ?? poll?.options[0];

  if (!poll || !selected) {
    return (
      <div style={{ padding: 20, textAlign: 'center', paddingTop: 80 }}>
        <p>투표 정보를 불러올 수 없어요.</p>
        <button
          onClick={() => navigate('/')}
          style={{ background: '#8E44AD', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
        >
          홈으로
        </button>
      </div>
    );
  }

  const topOption = [...poll.options].sort((a, b) => b.voteCount - a.voteCount)[0];
  void CATEGORY_COLORS;

  async function handleShareLink() {
    await shareLink(
      `투표왕 - ${poll!.question}`,
      `나는 "${selected!.text}"를 선택했어요. 당신은요? 지금 투표해보세요!`
    );
  }

  async function handleShareText() {
    await shareText(
      `[투표왕] ${poll!.question}\n\n나는 "${selected!.text}" ${selected!.emoji} 선택!\n전체 결과: ${topOption.text} ${topOption.percentage}% 1위\n\n지금 토스에서 투표해보세요 👑`
    );
  }

  return (
    <div style={{ background: '#F4ECF7', minHeight: '100vh', paddingBottom: 40 }}>
      {/* 헤더 */}
      <div style={{
        background: '#8E44AD',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', padding: 0 }}
        >
          ←
        </button>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, fontWeight: 700 }}>결과 공유</span>
      </div>

      <div style={{ padding: '24px 16px' }}>
        {/* 공유 카드 */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(142,68,173,0.15)',
          marginBottom: 24,
        }}>
          {/* 카드 상단 */}
          <div style={{
            background: `linear-gradient(135deg, #8E44AD, #7D3C98)`,
            padding: '24px 20px 20px',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
              👑 투표왕
            </p>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
              {poll.question}
            </h2>
          </div>

          {/* 내 선택 */}
          <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #f0e6f6' }}>
            <p style={{ margin: '0 0 8px', fontSize: 12, color: '#999', fontWeight: 600 }}>나의 선택</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 32 }}>{selected.emoji}</span>
              <div>
                <p style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#8E44AD' }}>{selected.text}</p>
                <p style={{ margin: '2px 0 0', fontSize: 13, color: '#999' }}>{selected.percentage}% 선택</p>
              </div>
            </div>
          </div>

          {/* 전체 결과 */}
          <div style={{ padding: '16px 20px 20px' }}>
            <p style={{ margin: '0 0 12px', fontSize: 12, color: '#999', fontWeight: 600 }}>전체 결과</p>
            {poll.options.map(opt => (
              <div key={opt.id} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: '#333' }}>{opt.emoji} {opt.text}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#8E44AD' }}>{opt.percentage}%</span>
                </div>
                <div style={{ background: '#f0e6f6', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                  <div style={{
                    background: opt.id === selected.id ? '#8E44AD' : '#C39BD3',
                    height: '100%',
                    width: `${opt.percentage}%`,
                    borderRadius: 4,
                  }} />
                </div>
              </div>
            ))}
            <p style={{ margin: '12px 0 0', fontSize: 12, color: '#bbb', textAlign: 'center' }}>
              {poll.totalVotes.toLocaleString()}명 참여
            </p>
          </div>
        </div>

        {/* 공유 버튼 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={handleShareLink}
            style={{
              background: '#8E44AD',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            토스로 공유하기
          </button>
          <button
            onClick={handleShareText}
            style={{
              background: '#f0e6f6',
              color: '#8E44AD',
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            다른 앱으로 공유
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              color: '#999',
              border: 'none',
              borderRadius: 14,
              padding: '12px',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
