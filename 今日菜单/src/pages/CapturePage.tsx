import { useState } from 'react';

type Captured = { dataUrl: string } | null;

export function CapturePage() {
  const [photo, setPhoto] = useState<Captured>(null);
  const [busy, setBusy] = useState(false);

  async function handleCapture() {
    setBusy(true);
    try {
      const { Camera, CameraResultType, CameraSource } = await import('@capacitor/camera');
      const result = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        saveToGallery: false,
        correctOrientation: true,
      });
      setPhoto({ dataUrl: result.dataUrl! });
    } catch (e) {
      // 退化为文件选择（Web/未授权时）
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const file = input.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setPhoto({ dataUrl: String(reader.result) });
        reader.readAsDataURL(file);
      };
      input.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="bg-white border border-cream-100 rounded-xl p-3 shadow-soft">
        <div className="text-sm font-medium">拍照记录</div>
        <p className="text-xs text-ink-600 mt-1">在 APK 中将调用系统相机；Web 环境将退化为文件选择。</p>
      </div>

      {photo ? (
        <div className="bg-white border border-cream-100 rounded-xl overflow-hidden shadow-soft">
          <img src={photo.dataUrl} alt="capture" className="w-full aspect-[3/4] object-cover" />
        </div>
      ) : null}

      <div className="flex gap-2">
        <button onClick={handleCapture} disabled={busy} className="flex-1 bg-cocoa-500 text-white py-3 rounded-xl disabled:opacity-60">
          {busy ? '打开中…' : '打开相机'}
        </button>
        {photo ? (
          <button onClick={() => setPhoto(null)} className="px-4 bg-cream-100 rounded-xl">重拍</button>
        ) : null}
      </div>
    </div>
  );
}

