import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { WardrobePage } from './pages/WardrobePage';
import { RecordsPage } from './pages/RecordsPage';
import { PlanPage } from './pages/PlanPage';
import { CapturePage } from './pages/CapturePage';
import { ProfilePage } from './pages/ProfilePage';

type TabKey = 'wardrobe' | 'calendar' | 'capture' | 'plan' | 'profile';

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('wardrobe');

  const Page = useMemo(() => {
    switch (activeTab) {
      case 'wardrobe':
        return <WardrobePage />;
      case 'calendar':
        return <RecordsPage />;
      case 'capture':
        return <CapturePage />;
      case 'plan':
        return <PlanPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <div className="mobile-safe h-full bg-cream-50 text-ink-800">
      <div className="h-full flex flex-col">
        <header className="px-4 pt-4 pb-3 bg-cream-50 sticky top-0 z-10">
          <h1 className="text-xl font-semibold tracking-wide">DressPlan</h1>
        </header>
        <main className="flex-1 overflow-y-auto px-4 pb-24">
          {Page}
        </main>
        <BottomNav active={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}

