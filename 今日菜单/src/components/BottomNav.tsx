import { clsx } from 'clsx';

type TabKey = 'wardrobe' | 'calendar' | 'capture' | 'plan' | 'profile';

export function BottomNav({ active, onChange }: { active: TabKey; onChange: (key: TabKey) => void }) {
  const item = (key: TabKey, label: string, icon: string) => (
    <button
      key={key}
      onClick={() => onChange(key)}
      className={clsx(
        'flex flex-col items-center justify-center gap-0.5 flex-1 py-2',
        active === key ? 'text-cocoa-500' : 'text-ink-600'
      )}
      aria-label={label}
    >
      <span className="text-lg" aria-hidden>{icon}</span>
      <span className="text-[11px]">{label}</span>
    </button>
  );

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full mobile-safe bg-white/95 backdrop-blur border-t border-cream-100 shadow-soft">
      <div className="flex">
        {item('wardrobe', '衣橱', '👗')}
        {item('calendar', '穿搭日历', '📅')}
        {item('capture', '拍照', '📷')}
        {item('plan', '计划', '🧩')}
        {item('profile', '我的', '🙂')}
      </div>
    </nav>
  );
}

