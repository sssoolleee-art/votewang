import type { DdayItem } from '../types/dday';
import { MILESTONES } from '../types/dday';

export function getDaysRemaining(targetDate: string): number {
  const target = new Date(targetDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function formatDday(days: number): string {
  if (days > 0) return `D-${days}`;
  if (days === 0) return 'D-Day!';
  return `D+${Math.abs(days)}`;
}

export function getNextMilestone(targetDate: string): { milestone: number; daysLeft: number } | null {
  const days = getDaysRemaining(targetDate);
  if (days > 0) return null; // 미래 날짜는 기념일 없음
  const passed = Math.abs(days);
  const next = MILESTONES.find(m => m > passed);
  if (!next) return null;
  return { milestone: next, daysLeft: next - passed };
}

export function checkTodayMilestone(item: DdayItem): number | null {
  const days = getDaysRemaining(item.targetDate);
  if (days > 0) return null;
  const passed = Math.abs(days);
  return MILESTONES.includes(passed) ? passed : null;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}
