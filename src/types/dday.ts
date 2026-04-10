export type DdayCategory = 'love' | 'exam' | 'birthday' | 'travel' | 'work' | 'custom';

export interface DdayItem {
  id: string;
  title: string;
  targetDate: string; // "YYYY-MM-DD"
  emoji: string;
  color: string;
  category: DdayCategory;
  createdAt: string;
}

export const CATEGORY_DEFAULTS: Record<DdayCategory, { emoji: string; color: string; label: string }> = {
  love:     { emoji: '💕', color: '#FF6B9D', label: '연애' },
  exam:     { emoji: '📚', color: '#3498DB', label: '시험' },
  birthday: { emoji: '🎂', color: '#F39C12', label: '생일' },
  travel:   { emoji: '✈️', color: '#1ABC9C', label: '여행' },
  work:     { emoji: '💼', color: '#9B59B6', label: '업무' },
  custom:   { emoji: '📌', color: '#34495E', label: '기타' },
};

export const MILESTONES = [100, 200, 300, 365, 500, 700, 1000];
