import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { sampleRecords } from '@/data/mock';

type ViewMode = 'calendar' | 'timeline';

export function RecordsPage() {
  const [mode, setMode] = useState<ViewMode>('calendar');
  const [month, setMonth] = useState(dayjs());

  const recordsByDate = useMemo(() => {
    const map = new Map<string, typeof sampleRecords[number]>();
    for (const r of sampleRecords) {
      map.set(r.date, r);
    }
    return map;
  }, []);

  const calendar = useMemo(() => {
    const start = month.startOf('month').startOf('week');
    const end = month.endOf('month').endOf('week');
    const days: dayjs.Dayjs[] = [];
    let cur = start;
    while (cur.isBefore(end) || cur.isSame(end)) {
      days.push(cur);
      cur = cur.add(1, 'day');
    }
    return days;
  }, [month]);

  return (
    <div className="space-y-4">
      <section className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded border" onClick={() => setMonth(m => m.subtract(1, 'month'))}>←</button>
          <span className="text-sm">{month.format('YYYY年MM月')}</span>
          <button className="px-2 py-1 rounded border" onClick={() => setMonth(m => m.add(1, 'month'))}>→</button>
        </div>
        <div className="ml-auto flex bg-cream-100 rounded-full p-0.5">
          <button onClick={() => setMode('calendar')} className={`px-3 py-1 text-sm rounded-full ${mode==='calendar'?'bg-white shadow-soft':'text-ink-600'}`}>日历</button>
          <button onClick={() => setMode('timeline')} className={`px-3 py-1 text-sm rounded-full ${mode==='timeline'?'bg-white shadow-soft':'text-ink-600'}`}>时间轴</button>
        </div>
      </section>

      {mode === 'calendar' ? (
        <section className="grid grid-cols-7 gap-1">
          {['日','一','二','三','四','五','六'].map(d => <div key={d} className="text-center text-xs text-ink-600 py-1">{d}</div>)}
          {calendar.map(d => {
            const key = d.format('YYYY-MM-DD');
            const rec = recordsByDate.get(key);
            const isCur = d.month() === month.month();
            return (
              <div key={key} className={`aspect-square rounded-lg overflow-hidden border ${isCur? 'bg-white border-cream-100' : 'bg-cream-50 border-transparent opacity-60'}`}>
                {rec ? (
                  <img src={rec.photoUrl} alt={rec.date} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-ink-600">{d.date()}</div>
                )}
              </div>
            );
          })}
        </section>
      ) : (
        <section className="space-y-3">
          {sampleRecords
            .slice()
            .sort((a,b)=> a.date < b.date ? 1 : -1)
            .map(r => (
            <article key={r.id} className="bg-white rounded-xl shadow-soft overflow-hidden border border-cream-100">
              <img src={r.photoUrl} alt={r.date} className="w-full aspect-[16/9] object-cover" />
              <div className="p-3">
                <div className="text-sm font-medium">{dayjs(r.date).format('MM月DD日')} · {r.weather}</div>
                <div className="text-xs text-ink-600 mt-1">心情：{r.mood ?? '—'} · 评分：{r.rating ?? '—'}</div>
                {r.note ? <p className="text-sm mt-1">{r.note}</p> : null}
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

