import { sampleItems, sampleRecords } from '@/data/mock';

export function ProfilePage() {
  const mostWorn = sampleItems[1];
  return (
    <div className="space-y-3">
      <section className="bg-white rounded-xl border border-cream-100 p-4 shadow-soft">
        <div className="text-sm font-medium">我的统计（示意）</div>
        <div className="grid grid-cols-3 gap-3 mt-3 text-center">
          <div>
            <div className="text-xl font-semibold">{sampleRecords.length}</div>
            <div className="text-xs text-ink-600">本月穿搭</div>
          </div>
          <div>
            <div className="text-xl font-semibold">{sampleItems.length}</div>
            <div className="text-xs text-ink-600">单品数量</div>
          </div>
          <div>
            <div className="text-xl font-semibold">{mostWorn.name}</div>
            <div className="text-xs text-ink-600">常穿单品</div>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-xl border border-cream-100 p-4 shadow-soft">
        <div className="text-sm font-medium">导出与分享</div>
        <div className="mt-2 flex gap-2">
          <button className="px-3 py-2 rounded-lg bg-cream-100">导出图片（占位）</button>
          <button className="px-3 py-2 rounded-lg bg-cream-100">分享链接（占位）</button>
        </div>
      </section>
    </div>
  );
}

