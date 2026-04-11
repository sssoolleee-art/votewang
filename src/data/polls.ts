export interface PollOption {
  id: string;
  text: string;
  emoji: string;
  voteCount: number;
  percentage: number;
  genderBreakdown: { male: number; female: number };
  ageBreakdown: { '10s': number; '20s': number; '30s': number; '40s_plus': number };
}

export interface Poll {
  id: string;
  question: string;
  category: 'trend' | 'life' | 'food' | 'entertainment' | 'opinion';
  totalVotes: number;
  isHot: boolean;
  options: PollOption[];
}

export const POLLS: Poll[] = [
  // ── 음식 ──────────────────────────────────────────────
  {
    id: 'p01', question: '최고의 치킨 브랜드는?', category: 'food', totalVotes: 18432, isHot: true,
    options: [
      { id: 'o1', text: 'BBQ', emoji: '🍗', voteCount: 6825, percentage: 37, genderBreakdown: { male: 40, female: 34 }, ageBreakdown: { '10s': 30, '20s': 35, '30s': 40, '40s_plus': 42 } },
      { id: 'o2', text: '교촌치킨', emoji: '🍖', voteCount: 5898, percentage: 32, genderBreakdown: { male: 30, female: 34 }, ageBreakdown: { '10s': 28, '20s': 33, '30s': 35, '40s_plus': 30 } },
      { id: 'o3', text: 'BHC', emoji: '🐔', voteCount: 3686, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 25, '20s': 22, '30s': 18, '40s_plus': 16 } },
      { id: 'o4', text: '굽네치킨', emoji: '🔥', voteCount: 2023, percentage: 11, genderBreakdown: { male: 10, female: 12 }, ageBreakdown: { '10s': 17, '20s': 10, '30s': 7, '40s_plus': 12 } },
    ],
  },
  {
    id: 'p02', question: '여름 빙수 최강은?', category: 'food', totalVotes: 14221, isHot: true,
    options: [
      { id: 'o1', text: '팥빙수', emoji: '🍧', voteCount: 5119, percentage: 36, genderBreakdown: { male: 40, female: 32 }, ageBreakdown: { '10s': 20, '20s': 30, '30s': 42, '40s_plus': 55 } },
      { id: 'o2', text: '망고빙수', emoji: '🥭', voteCount: 4978, percentage: 35, genderBreakdown: { male: 28, female: 42 }, ageBreakdown: { '10s': 45, '20s': 42, '30s': 30, '40s_plus': 20 } },
      { id: 'o3', text: '딸기빙수', emoji: '🍓', voteCount: 4124, percentage: 29, genderBreakdown: { male: 32, female: 26 }, ageBreakdown: { '10s': 35, '20s': 28, '30s': 28, '40s_plus': 25 } },
    ],
  },
  {
    id: 'p03', question: '편의점 도시락 최강은?', category: 'food', totalVotes: 11543, isHot: false,
    options: [
      { id: 'o1', text: 'CU', emoji: '🏪', voteCount: 4617, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 42, '20s': 45, '30s': 38, '40s_plus': 32 } },
      { id: 'o2', text: 'GS25', emoji: '🟡', voteCount: 4040, percentage: 35, genderBreakdown: { male: 36, female: 34 }, ageBreakdown: { '10s': 35, '20s': 32, '30s': 38, '40s_plus': 35 } },
      { id: 'o3', text: '세븐일레븐', emoji: '7️⃣', voteCount: 2886, percentage: 25, genderBreakdown: { male: 26, female: 24 }, ageBreakdown: { '10s': 23, '20s': 23, '30s': 24, '40s_plus': 33 } },
    ],
  },
  {
    id: 'p04', question: '라면 끓일 때 계란은?', category: 'food', totalVotes: 22100, isHot: true,
    options: [
      { id: 'o1', text: '날달걀 풀기', emoji: '🥚', voteCount: 9345, percentage: 42, genderBreakdown: { male: 45, female: 39 }, ageBreakdown: { '10s': 38, '20s': 40, '30s': 45, '40s_plus': 48 } },
      { id: 'o2', text: '반숙으로 끓이기', emoji: '🍳', voteCount: 7514, percentage: 34, genderBreakdown: { male: 32, female: 36 }, ageBreakdown: { '10s': 36, '20s': 35, '30s': 33, '40s_plus': 30 } },
      { id: 'o3', text: '안 넣어요', emoji: '🚫', voteCount: 5241, percentage: 24, genderBreakdown: { male: 23, female: 25 }, ageBreakdown: { '10s': 26, '20s': 25, '30s': 22, '40s_plus': 22 } },
    ],
  },
  {
    id: 'p05', question: '야식 최강 메뉴는?', category: 'food', totalVotes: 19876, isHot: true,
    options: [
      { id: 'o1', text: '치킨', emoji: '🍗', voteCount: 8944, percentage: 45, genderBreakdown: { male: 48, female: 42 }, ageBreakdown: { '10s': 50, '20s': 48, '30s': 42, '40s_plus': 38 } },
      { id: 'o2', text: '피자', emoji: '🍕', voteCount: 5960, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 30, '20s': 32, '30s': 30, '40s_plus': 25 } },
      { id: 'o3', text: '족발·보쌈', emoji: '🍖', voteCount: 3975, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 12, '20s': 15, '30s': 23, '40s_plus': 32 } },
      { id: 'o4', text: '라면', emoji: '🍜', voteCount: 997, percentage: 5, genderBreakdown: { male: 4, female: 6 }, ageBreakdown: { '10s': 8, '20s': 5, '30s': 5, '40s_plus': 5 } },
    ],
  },
  {
    id: 'p06', question: '카페 음료 최애는?', category: 'food', totalVotes: 16543, isHot: false,
    options: [
      { id: 'o1', text: '아이스 아메리카노', emoji: '☕', voteCount: 7939, percentage: 48, genderBreakdown: { male: 50, female: 46 }, ageBreakdown: { '10s': 30, '20s': 48, '30s': 55, '40s_plus': 58 } },
      { id: 'o2', text: '라떼', emoji: '🥛', voteCount: 4963, percentage: 30, genderBreakdown: { male: 25, female: 35 }, ageBreakdown: { '10s': 35, '20s': 32, '30s': 28, '40s_plus': 24 } },
      { id: 'o3', text: '녹차·말차', emoji: '🍵', voteCount: 2316, percentage: 14, genderBreakdown: { male: 10, female: 18 }, ageBreakdown: { '10s': 20, '20s': 15, '30s': 12, '40s_plus': 10 } },
      { id: 'o4', text: '스무디·에이드', emoji: '🧃', voteCount: 1325, percentage: 8, genderBreakdown: { male: 15, female: 1 }, ageBreakdown: { '10s': 15, '20s': 5, '30s': 5, '40s_plus': 8 } },
    ],
  },
  {
    id: 'p07', question: '삼겹살 쌈 재료는?', category: 'food', totalVotes: 13210, isHot: false,
    options: [
      { id: 'o1', text: '상추', emoji: '🥬', voteCount: 5284, percentage: 40, genderBreakdown: { male: 42, female: 38 }, ageBreakdown: { '10s': 32, '20s': 38, '30s': 44, '40s_plus': 50 } },
      { id: 'o2', text: '깻잎', emoji: '🌿', voteCount: 3963, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 25, '20s': 28, '30s': 33, '40s_plus': 35 } },
      { id: 'o3', text: '쌈 없이 그냥', emoji: '🍖', voteCount: 3963, percentage: 30, genderBreakdown: { male: 30, female: 30 }, ageBreakdown: { '10s': 43, '20s': 34, '30s': 23, '40s_plus': 15 } },
    ],
  },
  {
    id: 'p08', question: '겨울 간식 최강은?', category: 'food', totalVotes: 17654, isHot: false,
    options: [
      { id: 'o1', text: '붕어빵', emoji: '🐟', voteCount: 7061, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 38, '20s': 40, '30s': 42, '40s_plus': 40 } },
      { id: 'o2', text: '군밤', emoji: '🌰', voteCount: 5296, percentage: 30, genderBreakdown: { male: 32, female: 28 }, ageBreakdown: { '10s': 22, '20s': 25, '30s': 33, '40s_plus': 42 } },
      { id: 'o3', text: '호떡', emoji: '🥞', voteCount: 3884, percentage: 22, genderBreakdown: { male: 20, female: 24 }, ageBreakdown: { '10s': 28, '20s': 25, '30s': 18, '40s_plus': 15 } },
      { id: 'o4', text: '어묵국물', emoji: '🍢', voteCount: 1413, percentage: 8, genderBreakdown: { male: 10, female: 6 }, ageBreakdown: { '10s': 12, '20s': 10, '30s': 7, '40s_plus': 3 } },
    ],
  },
  {
    id: 'p09', question: '국밥 최강 종류는?', category: 'food', totalVotes: 12340, isHot: false,
    options: [
      { id: 'o1', text: '순대국밥', emoji: '🫙', voteCount: 4566, percentage: 37, genderBreakdown: { male: 42, female: 32 }, ageBreakdown: { '10s': 28, '20s': 33, '30s': 40, '40s_plus': 48 } },
      { id: 'o2', text: '해장국', emoji: '🍲', voteCount: 3826, percentage: 31, genderBreakdown: { male: 33, female: 29 }, ageBreakdown: { '10s': 20, '20s': 28, '30s': 35, '40s_plus': 40 } },
      { id: 'o3', text: '설렁탕', emoji: '🥣', voteCount: 2468, percentage: 20, genderBreakdown: { male: 18, female: 22 }, ageBreakdown: { '10s': 18, '20s': 18, '30s': 20, '40s_plus': 25 } },
      { id: 'o4', text: '뼈해장국', emoji: '🦴', voteCount: 1480, percentage: 12, genderBreakdown: { male: 7, female: 17 }, ageBreakdown: { '10s': 34, '20s': 21, '30s': 5, '40s_plus': -13 } },
    ],
  },
  {
    id: 'p10', question: '편의점 아이스크림 최강은?', category: 'food', totalVotes: 15432, isHot: false,
    options: [
      { id: 'o1', text: '메로나', emoji: '🍈', voteCount: 6327, percentage: 41, genderBreakdown: { male: 38, female: 44 }, ageBreakdown: { '10s': 35, '20s': 38, '30s': 44, '40s_plus': 50 } },
      { id: 'o2', text: '빠삐코', emoji: '🧊', voteCount: 4629, percentage: 30, genderBreakdown: { male: 32, female: 28 }, ageBreakdown: { '10s': 38, '20s': 32, '30s': 26, '40s_plus': 22 } },
      { id: 'o3', text: '죠스바', emoji: '🦈', voteCount: 4476, percentage: 29, genderBreakdown: { male: 30, female: 28 }, ageBreakdown: { '10s': 27, '20s': 30, '30s': 30, '40s_plus': 28 } },
    ],
  },

  // ── 일상 ──────────────────────────────────────────────
  {
    id: 'p11', question: '주말 아침 루틴은?', category: 'life', totalVotes: 13876, isHot: false,
    options: [
      { id: 'o1', text: '늦잠 자기', emoji: '😴', voteCount: 6938, percentage: 50, genderBreakdown: { male: 48, female: 52 }, ageBreakdown: { '10s': 65, '20s': 58, '30s': 45, '40s_plus': 30 } },
      { id: 'o2', text: '운동하기', emoji: '🏃', voteCount: 4162, percentage: 30, genderBreakdown: { male: 35, female: 25 }, ageBreakdown: { '10s': 20, '20s': 25, '30s': 35, '40s_plus': 45 } },
      { id: 'o3', text: '브런치 카페', emoji: '☕', voteCount: 2775, percentage: 20, genderBreakdown: { male: 17, female: 23 }, ageBreakdown: { '10s': 15, '20s': 17, '30s': 20, '40s_plus': 25 } },
    ],
  },
  {
    id: 'p12', question: '퇴근 후 첫 번째 행동은?', category: 'life', totalVotes: 21543, isHot: true,
    options: [
      { id: 'o1', text: '핸드폰 확인', emoji: '📱', voteCount: 9694, percentage: 45, genderBreakdown: { male: 42, female: 48 }, ageBreakdown: { '10s': 55, '20s': 50, '30s': 42, '40s_plus': 35 } },
      { id: 'o2', text: '소파 눕기', emoji: '🛋️', voteCount: 7540, percentage: 35, genderBreakdown: { male: 38, female: 32 }, ageBreakdown: { '10s': 28, '20s': 32, '30s': 38, '40s_plus': 42 } },
      { id: 'o3', text: '씻기', emoji: '🚿', voteCount: 4308, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 17, '20s': 18, '30s': 20, '40s_plus': 23 } },
    ],
  },
  {
    id: 'p13', question: '스트레스 해소법은?', category: 'life', totalVotes: 18765, isHot: false,
    options: [
      { id: 'o1', text: '먹방 보기', emoji: '📺', voteCount: 6568, percentage: 35, genderBreakdown: { male: 30, female: 40 }, ageBreakdown: { '10s': 42, '20s': 38, '30s': 32, '40s_plus': 25 } },
      { id: 'o2', text: '운동하기', emoji: '💪', voteCount: 5629, percentage: 30, genderBreakdown: { male: 38, female: 22 }, ageBreakdown: { '10s': 22, '20s': 28, '30s': 33, '40s_plus': 38 } },
      { id: 'o3', text: '쇼핑하기', emoji: '🛍️', voteCount: 3753, percentage: 20, genderBreakdown: { male: 12, female: 28 }, ageBreakdown: { '10s': 22, '20s': 22, '30s': 20, '40s_plus': 15 } },
      { id: 'o4', text: '잠 자기', emoji: '😴', voteCount: 2815, percentage: 15, genderBreakdown: { male: 20, female: 10 }, ageBreakdown: { '10s': 14, '20s': 12, '30s': 15, '40s_plus': 22 } },
    ],
  },
  {
    id: 'p14', question: '집에서 혼자 있을 때는?', category: 'life', totalVotes: 16234, isHot: false,
    options: [
      { id: 'o1', text: '유튜브 틀어놓기', emoji: '▶️', voteCount: 7305, percentage: 45, genderBreakdown: { male: 48, female: 42 }, ageBreakdown: { '10s': 55, '20s': 50, '30s': 42, '40s_plus': 32 } },
      { id: 'o2', text: '넷플릭스 정주행', emoji: '🎬', voteCount: 4870, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 28, '20s': 32, '30s': 30, '40s_plus': 28 } },
      { id: 'o3', text: '완전 침묵', emoji: '🤫', voteCount: 4059, percentage: 25, genderBreakdown: { male: 24, female: 26 }, ageBreakdown: { '10s': 17, '20s': 18, '30s': 28, '40s_plus': 40 } },
    ],
  },
  {
    id: 'p15', question: '돈 생기면 제일 먼저?', category: 'life', totalVotes: 24321, isHot: true,
    options: [
      { id: 'o1', text: '저축', emoji: '💰', voteCount: 8512, percentage: 35, genderBreakdown: { male: 32, female: 38 }, ageBreakdown: { '10s': 20, '20s': 30, '30s': 40, '40s_plus': 50 } },
      { id: 'o2', text: '여행 계획', emoji: '✈️', voteCount: 7296, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 35, '20s': 35, '30s': 28, '40s_plus': 20 } },
      { id: 'o3', text: '맛있는 거 먹기', emoji: '🍽️', voteCount: 5865, percentage: 24, genderBreakdown: { male: 25, female: 23 }, ageBreakdown: { '10s': 30, '20s': 25, '30s': 22, '40s_plus': 20 } },
      { id: 'o4', text: '쇼핑', emoji: '🛍️', voteCount: 2648, percentage: 11, genderBreakdown: { male: 15, female: 7 }, ageBreakdown: { '10s': 15, '20s': 10, '30s': 10, '40s_plus': 10 } },
    ],
  },

  // ── 트렌드 ──────────────────────────────────────────────
  {
    id: 'p16', question: '요즘 가장 핫한 여행지는?', category: 'trend', totalVotes: 23456, isHot: true,
    options: [
      { id: 'o1', text: '제주도', emoji: '🏝️', voteCount: 9850, percentage: 42, genderBreakdown: { male: 40, female: 44 }, ageBreakdown: { '10s': 30, '20s': 38, '30s': 46, '40s_plus': 55 } },
      { id: 'o2', text: '도쿄', emoji: '🗼', voteCount: 8209, percentage: 35, genderBreakdown: { male: 30, female: 40 }, ageBreakdown: { '10s': 48, '20s': 42, '30s': 30, '40s_plus': 18 } },
      { id: 'o3', text: '발리', emoji: '🌺', voteCount: 5396, percentage: 23, genderBreakdown: { male: 30, female: 16 }, ageBreakdown: { '10s': 22, '20s': 20, '30s': 24, '40s_plus': 27 } },
    ],
  },
  {
    id: 'p17', question: '올여름 패션 트렌드는?', category: 'trend', totalVotes: 11234, isHot: false,
    options: [
      { id: 'o1', text: '린넨 소재', emoji: '👕', voteCount: 4494, percentage: 40, genderBreakdown: { male: 32, female: 48 }, ageBreakdown: { '10s': 28, '20s': 38, '30s': 45, '40s_plus': 50 } },
      { id: 'o2', text: '오버핏 반팔', emoji: '👚', voteCount: 4044, percentage: 36, genderBreakdown: { male: 45, female: 27 }, ageBreakdown: { '10s': 50, '20s': 42, '30s': 30, '40s_plus': 18 } },
      { id: 'o3', text: '미니스커트', emoji: '👗', voteCount: 2696, percentage: 24, genderBreakdown: { male: 23, female: 25 }, ageBreakdown: { '10s': 22, '20s': 20, '30s': 25, '40s_plus': 32 } },
    ],
  },
  {
    id: 'p18', question: '요즘 가장 많이 쓰는 앱은?', category: 'trend', totalVotes: 19876, isHot: true,
    options: [
      { id: 'o1', text: '유튜브', emoji: '▶️', voteCount: 8944, percentage: 45, genderBreakdown: { male: 48, female: 42 }, ageBreakdown: { '10s': 60, '20s': 50, '30s': 40, '40s_plus': 32 } },
      { id: 'o2', text: '인스타그램', emoji: '📸', voteCount: 5960, percentage: 30, genderBreakdown: { male: 22, female: 38 }, ageBreakdown: { '10s': 28, '20s': 35, '30s': 30, '40s_plus': 22 } },
      { id: 'o3', text: '카카오톡', emoji: '💬', voteCount: 3975, percentage: 20, genderBreakdown: { male: 22, female: 18 }, ageBreakdown: { '10s': 8, '20s': 12, '30s': 25, '40s_plus': 42 } },
      { id: 'o4', text: '틱톡', emoji: '🎵', voteCount: 997, percentage: 5, genderBreakdown: { male: 8, female: 2 }, ageBreakdown: { '10s': 4, '20s': 3, '30s': 5, '40s_plus': 4 } },
    ],
  },
  {
    id: 'p19', question: 'OTT 최강은?', category: 'trend', totalVotes: 22345, isHot: true,
    options: [
      { id: 'o1', text: '넷플릭스', emoji: '🎬', voteCount: 10058, percentage: 45, genderBreakdown: { male: 42, female: 48 }, ageBreakdown: { '10s': 48, '20s': 50, '30s': 44, '40s_plus': 35 } },
      { id: 'o2', text: '유튜브 프리미엄', emoji: '▶️', voteCount: 6703, percentage: 30, genderBreakdown: { male: 35, female: 25 }, ageBreakdown: { '10s': 30, '20s': 30, '30s': 30, '40s_plus': 30 } },
      { id: 'o3', text: '티빙', emoji: '📺', voteCount: 4022, percentage: 18, genderBreakdown: { male: 15, female: 21 }, ageBreakdown: { '10s': 15, '20s': 14, '30s': 20, '40s_plus': 25 } },
      { id: 'o4', text: '웨이브', emoji: '🌊', voteCount: 1562, percentage: 7, genderBreakdown: { male: 8, female: 6 }, ageBreakdown: { '10s': 7, '20s': 6, '30s': 6, '40s_plus': 10 } },
    ],
  },
  {
    id: 'p20', question: '연휴 여행 vs 집콕?', category: 'trend', totalVotes: 17654, isHot: false,
    options: [
      { id: 'o1', text: '무조건 여행', emoji: '✈️', voteCount: 7062, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 48, '20s': 45, '30s': 38, '40s_plus': 28 } },
      { id: 'o2', text: '완전 집콕', emoji: '🏠', voteCount: 6179, percentage: 35, genderBreakdown: { male: 38, female: 32 }, ageBreakdown: { '10s': 30, '20s': 33, '30s': 36, '40s_plus': 42 } },
      { id: 'o3', text: '근교 당일치기', emoji: '🚗', voteCount: 4413, percentage: 25, genderBreakdown: { male: 24, female: 26 }, ageBreakdown: { '10s': 22, '20s': 22, '30s': 26, '40s_plus': 30 } },
    ],
  },

  // ── 엔터테인먼트 ──────────────────────────────────────────────
  {
    id: 'p21', question: '최근 본 드라마 장르는?', category: 'entertainment', totalVotes: 14567, isHot: false,
    options: [
      { id: 'o1', text: '로맨스', emoji: '💕', voteCount: 5827, percentage: 40, genderBreakdown: { male: 22, female: 58 }, ageBreakdown: { '10s': 45, '20s': 44, '30s': 38, '40s_plus': 30 } },
      { id: 'o2', text: '스릴러/범죄', emoji: '🔍', voteCount: 4370, percentage: 30, genderBreakdown: { male: 42, female: 18 }, ageBreakdown: { '10s': 30, '20s': 28, '30s': 32, '40s_plus': 30 } },
      { id: 'o3', text: '판타지/SF', emoji: '🚀', voteCount: 2913, percentage: 20, genderBreakdown: { male: 28, female: 12 }, ageBreakdown: { '10s': 18, '20s': 22, '30s': 20, '40s_plus': 20 } },
      { id: 'o4', text: '코미디', emoji: '😂', voteCount: 1457, percentage: 10, genderBreakdown: { male: 8, female: 12 }, ageBreakdown: { '10s': 7, '20s': 6, '30s': 10, '40s_plus': 20 } },
    ],
  },
  {
    id: 'p22', question: '노래방 18번은?', category: 'entertainment', totalVotes: 19234, isHot: true,
    options: [
      { id: 'o1', text: '발라드', emoji: '🎵', voteCount: 7693, percentage: 40, genderBreakdown: { male: 35, female: 45 }, ageBreakdown: { '10s': 28, '20s': 35, '30s': 45, '40s_plus': 55 } },
      { id: 'o2', text: 'K-POP 댄스곡', emoji: '💃', voteCount: 5770, percentage: 30, genderBreakdown: { male: 20, female: 40 }, ageBreakdown: { '10s': 52, '20s': 38, '30s': 22, '40s_plus': 10 } },
      { id: 'o3', text: '트로트', emoji: '🎤', voteCount: 3847, percentage: 20, genderBreakdown: { male: 30, female: 10 }, ageBreakdown: { '10s': 8, '20s': 10, '30s': 22, '40s_plus': 48 } },
      { id: 'o4', text: '팝송', emoji: '🎸', voteCount: 1924, percentage: 10, genderBreakdown: { male: 15, female: 5 }, ageBreakdown: { '10s': 12, '20s': 17, '30s': 11, '40s_plus': 0 } },
    ],
  },
  {
    id: 'p23', question: '영화관 팝콘은?', category: 'entertainment', totalVotes: 21987, isHot: true,
    options: [
      { id: 'o1', text: '달콤한 카라멜', emoji: '🍬', voteCount: 9895, percentage: 45, genderBreakdown: { male: 40, female: 50 }, ageBreakdown: { '10s': 52, '20s': 48, '30s': 42, '40s_plus': 35 } },
      { id: 'o2', text: '고소한 버터', emoji: '🧈', voteCount: 7915, percentage: 36, genderBreakdown: { male: 42, female: 30 }, ageBreakdown: { '10s': 28, '20s': 33, '30s': 40, '40s_plus': 48 } },
      { id: 'o3', text: '안 먹어요', emoji: '🚫', voteCount: 4177, percentage: 19, genderBreakdown: { male: 18, female: 20 }, ageBreakdown: { '10s': 20, '20s': 19, '30s': 18, '40s_plus': 17 } },
    ],
  },
  {
    id: 'p24', question: '주말 취미 활동은?', category: 'entertainment', totalVotes: 15432, isHot: false,
    options: [
      { id: 'o1', text: '독서', emoji: '📚', voteCount: 4629, percentage: 30, genderBreakdown: { male: 26, female: 34 }, ageBreakdown: { '10s': 18, '20s': 24, '30s': 34, '40s_plus': 45 } },
      { id: 'o2', text: '게임', emoji: '🎮', voteCount: 4629, percentage: 30, genderBreakdown: { male: 48, female: 12 }, ageBreakdown: { '10s': 48, '20s': 38, '30s': 22, '40s_plus': 12 } },
      { id: 'o3', text: '운동', emoji: '🏋️', voteCount: 3858, percentage: 25, genderBreakdown: { male: 18, female: 32 }, ageBreakdown: { '10s': 20, '20s': 24, '30s': 28, '40s_plus': 30 } },
      { id: 'o4', text: '그림·공예', emoji: '🎨', voteCount: 2316, percentage: 15, genderBreakdown: { male: 8, female: 22 }, ageBreakdown: { '10s': 14, '20s': 14, '30s': 16, '40s_plus': 13 } },
    ],
  },
  {
    id: 'p25', question: '콘서트 vs 페스티벌?', category: 'entertainment', totalVotes: 13876, isHot: false,
    options: [
      { id: 'o1', text: '아티스트 단독 콘서트', emoji: '🎤', voteCount: 7632, percentage: 55, genderBreakdown: { male: 45, female: 65 }, ageBreakdown: { '10s': 65, '20s': 60, '30s': 50, '40s_plus': 40 } },
      { id: 'o2', text: '뮤직 페스티벌', emoji: '🎪', voteCount: 6244, percentage: 45, genderBreakdown: { male: 55, female: 35 }, ageBreakdown: { '10s': 35, '20s': 40, '30s': 50, '40s_plus': 60 } },
    ],
  },

  // ── 의견 ──────────────────────────────────────────────
  {
    id: 'p26', question: '첫 데이트 장소는?', category: 'opinion', totalVotes: 18765, isHot: true,
    options: [
      { id: 'o1', text: '분위기 좋은 레스토랑', emoji: '🍽️', voteCount: 7506, percentage: 40, genderBreakdown: { male: 35, female: 45 }, ageBreakdown: { '10s': 35, '20s': 38, '30s': 43, '40s_plus': 45 } },
      { id: 'o2', text: '카페', emoji: '☕', voteCount: 5629, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 38, '20s': 33, '30s': 27, '40s_plus': 20 } },
      { id: 'o3', text: '전시·미술관', emoji: '🖼️', voteCount: 3753, percentage: 20, genderBreakdown: { male: 18, female: 22 }, ageBreakdown: { '10s': 18, '20s': 22, '30s': 20, '40s_plus': 18 } },
      { id: 'o4', text: '놀이공원', emoji: '🎡', voteCount: 1877, percentage: 10, genderBreakdown: { male: 19, female: 1 }, ageBreakdown: { '10s': 9, '20s': 7, '30s': 10, '40s_plus': 17 } },
    ],
  },
  {
    id: 'p27', question: '직장인 점심값 적정선은?', category: 'opinion', totalVotes: 24567, isHot: true,
    options: [
      { id: 'o1', text: '8,000원 이하', emoji: '💸', voteCount: 7370, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 20, '20s': 28, '30s': 32, '40s_plus': 38 } },
      { id: 'o2', text: '1만원', emoji: '💴', voteCount: 9827, percentage: 40, genderBreakdown: { male: 42, female: 38 }, ageBreakdown: { '10s': 38, '20s': 40, '30s': 42, '40s_plus': 40 } },
      { id: 'o3', text: '1만 5천원', emoji: '💵', voteCount: 4913, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 22, '20s': 22, '30s': 18, '40s_plus': 17 } },
      { id: 'o4', text: '가격 무관', emoji: '💳', voteCount: 2457, percentage: 10, genderBreakdown: { male: 10, female: 10 }, ageBreakdown: { '10s': 20, '20s': 10, '30s': 8, '40s_plus': 5 } },
    ],
  },
  {
    id: 'p28', question: '카톡 답장 안 하면?', category: 'opinion', totalVotes: 21234, isHot: true,
    options: [
      { id: 'o1', text: '이해해요, 바쁠 수도', emoji: '😊', voteCount: 8494, percentage: 40, genderBreakdown: { male: 42, female: 38 }, ageBreakdown: { '10s': 30, '20s': 38, '30s': 44, '40s_plus': 50 } },
      { id: 'o2', text: '나중에 다시 연락해요', emoji: '⏰', voteCount: 6370, percentage: 30, genderBreakdown: { male: 30, female: 30 }, ageBreakdown: { '10s': 25, '20s': 28, '30s': 33, '40s_plus': 35 } },
      { id: 'o3', text: '살짝 서운해요', emoji: '😔', voteCount: 4247, percentage: 20, genderBreakdown: { male: 15, female: 25 }, ageBreakdown: { '10s': 30, '20s': 22, '30s': 16, '40s_plus': 10 } },
      { id: 'o4', text: '엄청 화나요', emoji: '😤', voteCount: 2123, percentage: 10, genderBreakdown: { male: 13, female: 7 }, ageBreakdown: { '10s': 15, '20s': 12, '30s': 7, '40s_plus': 5 } },
    ],
  },
  {
    id: 'p29', question: '나의 MBTI 유형은?', category: 'opinion', totalVotes: 31234, isHot: true,
    options: [
      { id: 'o1', text: 'ENFP / INFP', emoji: '🌸', voteCount: 10932, percentage: 35, genderBreakdown: { male: 28, female: 42 }, ageBreakdown: { '10s': 45, '20s': 40, '30s': 30, '40s_plus': 20 } },
      { id: 'o2', text: 'INTJ / ENTJ', emoji: '🧠', voteCount: 7808, percentage: 25, genderBreakdown: { male: 32, female: 18 }, ageBreakdown: { '10s': 20, '20s': 24, '30s': 28, '40s_plus': 30 } },
      { id: 'o3', text: 'ISFJ / ESFJ', emoji: '🤗', voteCount: 6247, percentage: 20, genderBreakdown: { male: 18, female: 22 }, ageBreakdown: { '10s': 15, '20s': 18, '30s': 22, '40s_plus': 28 } },
      { id: 'o4', text: '잘 모르겠어요', emoji: '🤷', voteCount: 6247, percentage: 20, genderBreakdown: { male: 22, female: 18 }, ageBreakdown: { '10s': 20, '20s': 18, '30s': 20, '40s_plus': 22 } },
    ],
  },
  {
    id: 'p30', question: '이상형 우선순위는?', category: 'opinion', totalVotes: 26543, isHot: true,
    options: [
      { id: 'o1', text: '외모', emoji: '😍', voteCount: 7963, percentage: 30, genderBreakdown: { male: 38, female: 22 }, ageBreakdown: { '10s': 42, '20s': 35, '30s': 25, '40s_plus': 15 } },
      { id: 'o2', text: '성격', emoji: '💛', voteCount: 9291, percentage: 35, genderBreakdown: { male: 30, female: 40 }, ageBreakdown: { '10s': 28, '20s': 32, '30s': 40, '40s_plus': 48 } },
      { id: 'o3', text: '경제력', emoji: '💰', voteCount: 5309, percentage: 20, genderBreakdown: { male: 18, female: 22 }, ageBreakdown: { '10s': 12, '20s': 18, '30s': 25, '40s_plus': 30 } },
      { id: 'o4', text: '취향·가치관', emoji: '🎯', voteCount: 3980, percentage: 15, genderBreakdown: { male: 14, female: 16 }, ageBreakdown: { '10s': 18, '20s': 15, '30s': 10, '40s_plus': 7 } },
    ],
  },

  // ── 추가 ──────────────────────────────────────────────
  {
    id: 'p31', question: '아침형 vs 저녁형 인간?', category: 'life', totalVotes: 19876, isHot: false,
    options: [
      { id: 'o1', text: '완전 아침형', emoji: '🌅', voteCount: 4969, percentage: 25, genderBreakdown: { male: 26, female: 24 }, ageBreakdown: { '10s': 12, '20s': 18, '30s': 28, '40s_plus': 45 } },
      { id: 'o2', text: '완전 저녁형', emoji: '🌙', voteCount: 7950, percentage: 40, genderBreakdown: { male: 42, female: 38 }, ageBreakdown: { '10s': 58, '20s': 50, '30s': 35, '40s_plus': 20 } },
      { id: 'o3', text: '그때그때 달라요', emoji: '🤷', voteCount: 6957, percentage: 35, genderBreakdown: { male: 32, female: 38 }, ageBreakdown: { '10s': 30, '20s': 32, '30s': 37, '40s_plus': 35 } },
    ],
  },
  {
    id: 'p32', question: '커피 vs 에너지 드링크?', category: 'life', totalVotes: 17654, isHot: false,
    options: [
      { id: 'o1', text: '무조건 커피', emoji: '☕', voteCount: 10592, percentage: 60, genderBreakdown: { male: 55, female: 65 }, ageBreakdown: { '10s': 35, '20s': 55, '30s': 68, '40s_plus': 75 } },
      { id: 'o2', text: '에너지 드링크', emoji: '⚡', voteCount: 5296, percentage: 30, genderBreakdown: { male: 38, female: 22 }, ageBreakdown: { '10s': 52, '20s': 35, '30s': 22, '40s_plus': 12 } },
      { id: 'o3', text: '둘 다 안 마셔요', emoji: '💧', voteCount: 1766, percentage: 10, genderBreakdown: { male: 7, female: 13 }, ageBreakdown: { '10s': 13, '20s': 10, '30s': 10, '40s_plus': 13 } },
    ],
  },
  {
    id: 'p33', question: '술자리 음료 선택은?', category: 'life', totalVotes: 21345, isHot: false,
    options: [
      { id: 'o1', text: '소주', emoji: '🍶', voteCount: 7471, percentage: 35, genderBreakdown: { male: 40, female: 30 }, ageBreakdown: { '10s': 15, '20s': 35, '30s': 40, '40s_plus': 48 } },
      { id: 'o2', text: '맥주', emoji: '🍺', voteCount: 7471, percentage: 35, genderBreakdown: { male: 40, female: 30 }, ageBreakdown: { '10s': 30, '20s': 38, '30s': 35, '40s_plus': 32 } },
      { id: 'o3', text: '와인/칵테일', emoji: '🍷', voteCount: 4269, percentage: 20, genderBreakdown: { male: 12, female: 28 }, ageBreakdown: { '10s': 25, '20s': 20, '30s': 18, '40s_plus': 15 } },
      { id: 'o4', text: '안 마셔요', emoji: '🥤', voteCount: 2134, percentage: 10, genderBreakdown: { male: 8, female: 12 }, ageBreakdown: { '10s': 30, '20s': 7, '30s': 7, '40s_plus': 5 } },
    ],
  },
  {
    id: 'p34', question: '운동 시간대는?', category: 'life', totalVotes: 14567, isHot: false,
    options: [
      { id: 'o1', text: '이른 아침', emoji: '🌄', voteCount: 3641, percentage: 25, genderBreakdown: { male: 28, female: 22 }, ageBreakdown: { '10s': 15, '20s': 18, '30s': 28, '40s_plus': 42 } },
      { id: 'o2', text: '점심시간', emoji: '☀️', voteCount: 2913, percentage: 20, genderBreakdown: { male: 22, female: 18 }, ageBreakdown: { '10s': 15, '20s': 18, '30s': 22, '40s_plus': 25 } },
      { id: 'o3', text: '퇴근 후 저녁', emoji: '🌆', voteCount: 5826, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 40, '20s': 45, '30s': 40, '40s_plus': 30 } },
      { id: 'o4', text: '안 해요', emoji: '🛋️', voteCount: 2187, percentage: 15, genderBreakdown: { male: 12, female: 18 }, ageBreakdown: { '10s': 30, '20s': 19, '30s': 10, '40s_plus': 3 } },
    ],
  },
  {
    id: 'p35', question: '재테크 방법은?', category: 'opinion', totalVotes: 18234, isHot: true,
    options: [
      { id: 'o1', text: '주식 투자', emoji: '📈', voteCount: 7293, percentage: 40, genderBreakdown: { male: 50, female: 30 }, ageBreakdown: { '10s': 25, '20s': 42, '30s': 45, '40s_plus': 40 } },
      { id: 'o2', text: '예적금', emoji: '🏦', voteCount: 5470, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 20, '20s': 22, '30s': 32, '40s_plus': 45 } },
      { id: 'o3', text: '부동산', emoji: '🏠', voteCount: 3647, percentage: 20, genderBreakdown: { male: 15, female: 25 }, ageBreakdown: { '10s': 10, '20s': 15, '30s': 18, '40s_plus': 10 } },
      { id: 'o4', text: '코인', emoji: '💎', voteCount: 1824, percentage: 10, genderBreakdown: { male: 7, female: 13 }, ageBreakdown: { '10s': 45, '20s': 21, '30s': 5, '40s_plus': 5 } },
    ],
  },
  {
    id: 'p36', question: '지하철 자리 매너는?', category: 'opinion', totalVotes: 22456, isHot: true,
    options: [
      { id: 'o1', text: '다리 모으고 앉아야지', emoji: '🧍', voteCount: 11228, percentage: 50, genderBreakdown: { male: 45, female: 55 }, ageBreakdown: { '10s': 42, '20s': 48, '30s': 52, '40s_plus': 58 } },
      { id: 'o2', text: '가방은 무릎 위에', emoji: '🎒', voteCount: 6737, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 30, '20s': 32, '30s': 28, '40s_plus': 28 } },
      { id: 'o3', text: '이어폰은 필수', emoji: '🎧', voteCount: 4491, percentage: 20, genderBreakdown: { male: 27, female: 13 }, ageBreakdown: { '10s': 28, '20s': 20, '30s': 20, '40s_plus': 14 } },
    ],
  },
  {
    id: 'p37', question: '반려동물 키운다면?', category: 'life', totalVotes: 26789, isHot: true,
    options: [
      { id: 'o1', text: '강아지', emoji: '🐶', voteCount: 13395, percentage: 50, genderBreakdown: { male: 45, female: 55 }, ageBreakdown: { '10s': 55, '20s': 52, '30s': 48, '40s_plus': 42 } },
      { id: 'o2', text: '고양이', emoji: '🐱', voteCount: 10716, percentage: 40, genderBreakdown: { male: 35, female: 45 }, ageBreakdown: { '10s': 38, '20s': 42, '30s': 40, '40s_plus': 38 } },
      { id: 'o3', text: '기타 소동물', emoji: '🐹', voteCount: 1607, percentage: 6, genderBreakdown: { male: 12, female: -2 }, ageBreakdown: { '10s': 5, '20s': 4, '30s': 8, '40s_plus': 10 } },
      { id: 'o4', text: '안 키울래요', emoji: '🚫', voteCount: 1071, percentage: 4, genderBreakdown: { male: 8, female: 2 }, ageBreakdown: { '10s': 2, '20s': 2, '30s': 4, '40s_plus': 10 } },
    ],
  },
  {
    id: 'p38', question: '결혼 vs 비혼?', category: 'opinion', totalVotes: 29876, isHot: true,
    options: [
      { id: 'o1', text: '결혼하고 싶어요', emoji: '💍', voteCount: 10457, percentage: 35, genderBreakdown: { male: 32, female: 38 }, ageBreakdown: { '10s': 40, '20s': 33, '30s': 32, '40s_plus': 38 } },
      { id: 'o2', text: '비혼 지향해요', emoji: '🙅', voteCount: 8963, percentage: 30, genderBreakdown: { male: 25, female: 35 }, ageBreakdown: { '10s': 35, '20s': 35, '30s': 28, '40s_plus': 20 } },
      { id: 'o3', text: '아직 모르겠어요', emoji: '🤔', voteCount: 10456, percentage: 35, genderBreakdown: { male: 43, female: 27 }, ageBreakdown: { '10s': 25, '20s': 32, '30s': 40, '40s_plus': 42 } },
    ],
  },
  {
    id: 'p39', question: '노래방 vs 방탈출?', category: 'entertainment', totalVotes: 15678, isHot: false,
    options: [
      { id: 'o1', text: '노래방', emoji: '🎤', voteCount: 8310, percentage: 53, genderBreakdown: { male: 48, female: 58 }, ageBreakdown: { '10s': 60, '20s': 56, '30s': 50, '40s_plus': 42 } },
      { id: 'o2', text: '방탈출', emoji: '🔐', voteCount: 7368, percentage: 47, genderBreakdown: { male: 52, female: 42 }, ageBreakdown: { '10s': 40, '20s': 44, '30s': 50, '40s_plus': 58 } },
    ],
  },
  {
    id: 'p40', question: '도시 vs 자연 속 삶?', category: 'opinion', totalVotes: 21234, isHot: false,
    options: [
      { id: 'o1', text: '도시가 좋아요', emoji: '🏙️', voteCount: 8494, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 50, '20s': 48, '30s': 38, '40s_plus': 25 } },
      { id: 'o2', text: '자연 속에 살고 싶어요', emoji: '🌲', voteCount: 7432, percentage: 35, genderBreakdown: { male: 35, female: 35 }, ageBreakdown: { '10s': 22, '20s': 28, '30s': 38, '40s_plus': 55 } },
      { id: 'o3', text: '근교가 딱이에요', emoji: '🌄', voteCount: 5308, percentage: 25, genderBreakdown: { male: 27, female: 23 }, ageBreakdown: { '10s': 28, '20s': 24, '30s': 24, '40s_plus': 20 } },
    ],
  },
  {
    id: 'p41', question: '여름 휴가 스타일은?', category: 'trend', totalVotes: 19543, isHot: true,
    options: [
      { id: 'o1', text: '해외여행', emoji: '✈️', voteCount: 8795, percentage: 45, genderBreakdown: { male: 42, female: 48 }, ageBreakdown: { '10s': 50, '20s': 52, '30s': 42, '40s_plus': 32 } },
      { id: 'o2', text: '국내 바다', emoji: '🏖️', voteCount: 5863, percentage: 30, genderBreakdown: { male: 32, female: 28 }, ageBreakdown: { '10s': 28, '20s': 28, '30s': 32, '40s_plus': 35 } },
      { id: 'o3', text: '집에서 쉬기', emoji: '🛋️', voteCount: 4885, percentage: 25, genderBreakdown: { male: 26, female: 24 }, ageBreakdown: { '10s': 22, '20s': 20, '30s': 26, '40s_plus': 33 } },
    ],
  },
  {
    id: 'p42', question: '지금 가장 하고 싶은 건?', category: 'opinion', totalVotes: 17654, isHot: false,
    options: [
      { id: 'o1', text: '여행', emoji: '🌍', voteCount: 7062, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 45, '20s': 44, '30s': 38, '40s_plus': 30 } },
      { id: 'o2', text: '잠 자기', emoji: '😴', voteCount: 5296, percentage: 30, genderBreakdown: { male: 32, female: 28 }, ageBreakdown: { '10s': 30, '20s': 32, '30s': 30, '40s_plus': 28 } },
      { id: 'o3', text: '맛있는 거 먹기', emoji: '🍽️', voteCount: 3531, percentage: 20, genderBreakdown: { male: 18, female: 22 }, ageBreakdown: { '10s': 18, '20s': 18, '30s': 22, '40s_plus': 22 } },
      { id: 'o4', text: '아무것도 안 하기', emoji: '🪴', voteCount: 1765, percentage: 10, genderBreakdown: { male: 12, female: 8 }, ageBreakdown: { '10s': 7, '20s': 6, '30s': 10, '40s_plus': 20 } },
    ],
  },
  {
    id: 'p43', question: '공부할 때 음악은?', category: 'life', totalVotes: 14321, isHot: false,
    options: [
      { id: 'o1', text: '완전 조용히', emoji: '🤫', voteCount: 4869, percentage: 34, genderBreakdown: { male: 36, female: 32 }, ageBreakdown: { '10s': 28, '20s': 30, '30s': 38, '40s_plus': 45 } },
      { id: 'o2', text: '가사 없는 음악', emoji: '🎵', voteCount: 5728, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 40, '20s': 42, '30s': 40, '40s_plus': 35 } },
      { id: 'o3', text: '좋아하는 노래', emoji: '🎧', voteCount: 3723, percentage: 26, genderBreakdown: { male: 26, female: 26 }, ageBreakdown: { '10s': 32, '20s': 28, '30s': 22, '40s_plus': 20 } },
    ],
  },
  {
    id: 'p44', question: '선물 받고 싶은 건?', category: 'opinion', totalVotes: 18765, isHot: false,
    options: [
      { id: 'o1', text: '현금·상품권', emoji: '💵', voteCount: 9382, percentage: 50, genderBreakdown: { male: 52, female: 48 }, ageBreakdown: { '10s': 40, '20s': 48, '30s': 53, '40s_plus': 60 } },
      { id: 'o2', text: '갖고 싶은 물건', emoji: '🎁', voteCount: 5629, percentage: 30, genderBreakdown: { male: 28, female: 32 }, ageBreakdown: { '10s': 38, '20s': 32, '30s': 28, '40s_plus': 22 } },
      { id: 'o3', text: '경험 (여행·공연)', emoji: '✨', voteCount: 3754, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 22, '20s': 20, '30s': 19, '40s_plus': 18 } },
    ],
  },
  {
    id: 'p45', question: '회식 메뉴 선택권이 있다면?', category: 'opinion', totalVotes: 16543, isHot: false,
    options: [
      { id: 'o1', text: '삼겹살·소주', emoji: '🥓', voteCount: 6617, percentage: 40, genderBreakdown: { male: 45, female: 35 }, ageBreakdown: { '10s': 25, '20s': 35, '30s': 45, '40s_plus': 55 } },
      { id: 'o2', text: '회·해산물', emoji: '🍣', voteCount: 4962, percentage: 30, genderBreakdown: { male: 32, female: 28 }, ageBreakdown: { '10s': 22, '20s': 28, '30s': 33, '40s_plus': 38 } },
      { id: 'o3', text: '이탈리안·양식', emoji: '🍝', voteCount: 3309, percentage: 20, genderBreakdown: { male: 15, female: 25 }, ageBreakdown: { '10s': 30, '20s': 25, '30s': 15, '40s_plus': 5 } },
      { id: 'o4', text: '각자 먹고 싶은 거', emoji: '🍽️', voteCount: 1655, percentage: 10, genderBreakdown: { male: 8, female: 12 }, ageBreakdown: { '10s': 23, '20s': 12, '30s': 7, '40s_plus': 2 } },
    ],
  },
  {
    id: 'p46', question: '여행 계획 스타일은?', category: 'trend', totalVotes: 20123, isHot: false,
    options: [
      { id: 'o1', text: '꼼꼼하게 계획', emoji: '📋', voteCount: 9055, percentage: 45, genderBreakdown: { male: 40, female: 50 }, ageBreakdown: { '10s': 35, '20s': 42, '30s': 48, '40s_plus': 55 } },
      { id: 'o2', text: '즉흥 여행', emoji: '🎲', voteCount: 6037, percentage: 30, genderBreakdown: { male: 35, female: 25 }, ageBreakdown: { '10s': 40, '20s': 35, '30s': 26, '40s_plus': 18 } },
      { id: 'o3', text: '대충 큰 그림만', emoji: '🗺️', voteCount: 5031, percentage: 25, genderBreakdown: { male: 25, female: 25 }, ageBreakdown: { '10s': 25, '20s': 23, '30s': 26, '40s_plus': 27 } },
    ],
  },
  {
    id: 'p47', question: '줄 서는 맛집 vs 편한 단골?', category: 'opinion', totalVotes: 14876, isHot: false,
    options: [
      { id: 'o1', text: '줄 서더라도 유명 맛집', emoji: '⏳', voteCount: 5950, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 48, '20s': 45, '30s': 38, '40s_plus': 28 } },
      { id: 'o2', text: '편한 단골집', emoji: '🏠', voteCount: 5950, percentage: 40, genderBreakdown: { male: 42, female: 38 }, ageBreakdown: { '10s': 28, '20s': 33, '30s': 44, '40s_plus': 58 } },
      { id: 'o3', text: '그날그날 달라요', emoji: '🤷', voteCount: 2976, percentage: 20, genderBreakdown: { male: 20, female: 20 }, ageBreakdown: { '10s': 24, '20s': 22, '30s': 18, '40s_plus': 14 } },
    ],
  },
  {
    id: 'p48', question: '카카오톡 프로필 공개 범위는?', category: 'opinion', totalVotes: 13456, isHot: false,
    options: [
      { id: 'o1', text: '친구만', emoji: '👥', voteCount: 5382, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 38, '20s': 40, '30s': 40, '40s_plus': 42 } },
      { id: 'o2', text: '전체 공개', emoji: '🌐', voteCount: 2691, percentage: 20, genderBreakdown: { male: 22, female: 18 }, ageBreakdown: { '10s': 25, '20s': 22, '30s': 18, '40s_plus': 15 } },
      { id: 'o3', text: '비공개', emoji: '🔒', voteCount: 5383, percentage: 40, genderBreakdown: { male: 40, female: 40 }, ageBreakdown: { '10s': 37, '20s': 38, '30s': 42, '40s_plus': 43 } },
    ],
  },
  {
    id: 'p49', question: '여름 vs 겨울, 어느 계절?', category: 'opinion', totalVotes: 24321, isHot: false,
    options: [
      { id: 'o1', text: '여름', emoji: '☀️', voteCount: 8512, percentage: 35, genderBreakdown: { male: 38, female: 32 }, ageBreakdown: { '10s': 45, '20s': 40, '30s': 32, '40s_plus': 22 } },
      { id: 'o2', text: '겨울', emoji: '❄️', voteCount: 9728, percentage: 40, genderBreakdown: { male: 38, female: 42 }, ageBreakdown: { '10s': 38, '20s': 40, '30s': 42, '40s_plus': 40 } },
      { id: 'o3', text: '봄/가을이 최고', emoji: '🍂', voteCount: 6081, percentage: 25, genderBreakdown: { male: 24, female: 26 }, ageBreakdown: { '10s': 17, '20s': 20, '30s': 26, '40s_plus': 38 } },
    ],
  },
  {
    id: 'p50', question: '유행 패션 vs 나만의 스타일?', category: 'trend', totalVotes: 16234, isHot: false,
    options: [
      { id: 'o1', text: '유행 따라가요', emoji: '📣', voteCount: 5681, percentage: 35, genderBreakdown: { male: 28, female: 42 }, ageBreakdown: { '10s': 50, '20s': 40, '30s': 28, '40s_plus': 18 } },
      { id: 'o2', text: '나만의 스타일', emoji: '✨', voteCount: 7305, percentage: 45, genderBreakdown: { male: 48, female: 42 }, ageBreakdown: { '10s': 30, '20s': 42, '30s': 50, '40s_plus': 58 } },
      { id: 'o3', text: '편한 게 최고', emoji: '👕', voteCount: 3248, percentage: 20, genderBreakdown: { male: 24, female: 16 }, ageBreakdown: { '10s': 20, '20s': 18, '30s': 22, '40s_plus': 24 } },
    ],
  },
];

export const CATEGORY_LABELS: Record<Poll['category'], string> = {
  trend: '트렌드',
  life: '일상',
  food: '음식',
  entertainment: '엔터',
  opinion: '의견',
};

export const CATEGORY_COLORS: Record<Poll['category'], string> = {
  trend: '#E74C3C',
  life: '#3498DB',
  food: '#E67E22',
  entertainment: '#9B59B6',
  opinion: '#27AE60',
};
