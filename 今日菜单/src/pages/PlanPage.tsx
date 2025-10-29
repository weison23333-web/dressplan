import { useMemo, useState } from 'react';
import { sampleItems, type WardrobeItem, type ItemCategory } from '@/data/mock';

export function PlanPage() {
  const [selected, setSelected] = useState<Record<string, WardrobeItem | undefined>>({});
  const [done, setDone] = useState(false);
  const [remind, setRemind] = useState(true);

  const categories: ItemCategory[] = ['帽子', '上衣', '下装', '鞋子', '配饰'];

  const grouped = useMemo(() => {
    const map: Record<ItemCategory, WardrobeItem[]> = { '帽子': [], '上衣': [], '下装': [], '鞋子': [], '配饰': [] };
    for (const it of sampleItems) map[it.category].push(it);
    return map;
  }, []);

  return (
    <div className="space-y-4">
      <section className="bg-white border border-cream-100 rounded-xl p-3 shadow-soft">
        <div className="text-sm font-medium mb-2">明日搭配预览</div>
        <div className="grid grid-cols-5 gap-2">
          {categories.map(c => (
            <div key={c} className="col-span-1 aspect-square rounded-lg bg-cream-50 overflow-hidden border border-cream-100">
              {selected[c]?.imageUrl ? (
                <img src={selected[c]!.imageUrl} alt={selected[c]!.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-ink-600">{c}</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={remind} onChange={(e)=> setRemind(e.target.checked)} /> 提醒我明早穿搭
          </label>
          <button onClick={()=> setDone(d=>!d)} className={`ml-auto px-3 py-1.5 rounded-full text-sm ${done? 'bg-cream-100 text-ink-600' : 'bg-cocoa-500 text-white'}`}>{done? '已标记完成' : '标记为已准备'}</button>
        </div>
      </section>

      <section className="space-y-3">
        {categories.map(c => (
          <div key={c}>
            <div className="text-sm mb-1 text-ink-600">选择 {c}</div>
            <div className="grid grid-cols-3 gap-2">
              {grouped[c].map(it => (
                <button key={it.id} onClick={()=> setSelected(s=> ({...s, [c]: it}))} className={`aspect-square rounded-lg overflow-hidden border ${selected[c]?.id===it.id?'border-cocoa-500':'border-cream-100'} bg-white`}>
                  <img src={it.imageUrl} alt={it.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

