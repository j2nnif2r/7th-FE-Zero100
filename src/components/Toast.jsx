import { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-sm text-white shadow-lg">
      <span className="text-green-400">✓</span>
      {message}
    </div>
  );
}
