export type ItemCategory = '帽子' | '上衣' | '下装' | '鞋子' | '配饰';

export type WardrobeItem = {
  id: string;
  name: string;
  category: ItemCategory;
  color?: string;
  style?: string;
  season?: string;
  brand?: string;
  note?: string;
  imageUrl: string;
};

export const sampleItems: WardrobeItem[] = [
  { id: '1', name: '米色针织衫', category: '上衣', color: '米色', style: '休闲', season: '秋冬', brand: 'MUJI', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: '白色衬衫', category: '上衣', color: '白色', style: '通勤', season: '四季', brand: 'Uniqlo', imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: '高腰牛仔裤', category: '下装', color: '蓝色', style: '休闲', season: '四季', brand: 'Levis', imageUrl: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: '奶茶色风衣', category: '上衣', color: '棕色', style: '通勤', season: '春秋', brand: 'COS', imageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop' },
  { id: '5', name: '白色运动鞋', category: '鞋子', color: '白色', style: '休闲', season: '四季', brand: 'Nike', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  { id: '6', name: '棕色贝雷帽', category: '帽子', color: '棕色', style: '法式', season: '秋冬', brand: '无', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
  { id: '7', name: '黑色腰带', category: '配饰', color: '黑色', style: '简约', season: '四季', brand: '无', imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop' }
];

export type OutfitRecord = {
  id: string;
  date: string; // YYYY-MM-DD
  photoUrl: string;
  weather: string; // mock
  mood?: string;
  note?: string;
  rating?: number;
};

export const sampleRecords: OutfitRecord[] = [
  { id: 'r1', date: '2025-10-26', weather: '晴 22℃', photoUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop', mood: '元气', rating: 4 },
  { id: 'r2', date: '2025-10-27', weather: '多云 20℃', photoUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', mood: '通勤', rating: 5 },
  { id: 'r3', date: '2025-10-28', weather: '小雨 18℃', photoUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e92e59f56?q=80&w=800&auto=format&fit=crop', mood: '安静', rating: 3 }
];

