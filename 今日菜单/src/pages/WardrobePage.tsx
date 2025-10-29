import { useMemo, useState } from 'react';
import { sampleItems, type ItemCategory } from '@/data/mock';

const categories: ItemCategory[] = ['帽子', '上衣', '下装', '鞋子', '配饰'];

export function WardrobePage() {
  const [active, setActive] = useState<ItemCategory | '全部'>('全部');

  const items = useMemo(() => {
    if (active === '全部') return sampleItems;
    return sampleItems.filter(i => i.category === active);
  }, [active]);

  return (
    <div className="space-y-4">
      <section className="flex gap-2 overflow-x-auto no-scrollbar">
        {(['全部', ...categories] as const).map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-3 py-1.5 rounded-full border text-sm whitespace-nowrap ${active===c? 'bg-cocoa-500 text-white border-cocoa-500' : 'bg-white border-cream-100 text-ink-600'}`}
          >
            {c}
          </button>
        ))}
        <button className="ml-auto px-3 py-1.5 rounded-full border bg-white border-cream-100 text-sm">＋ 添加单品</button>
      </section>

      <section className="grid grid-cols-2 gap-3">
        {items.map(item => (
          <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-soft border border-cream-100">
            <div className="aspect-[4/5] bg-cream-50">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-2.5">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-ink-600 mt-0.5">{item.category} · {item.color ?? '—'} · {item.style ?? '—'}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

