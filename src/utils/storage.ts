import type { DdayItem } from '../types/dday';

const KEY = 'dday_items';

export function loadItems(): DdayItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveItems(items: DdayItem[]): void {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addItem(item: DdayItem): void {
  const items = loadItems();
  saveItems([...items, item]);
}

export function deleteItem(id: string): void {
  saveItems(loadItems().filter(i => i.id !== id));
}
