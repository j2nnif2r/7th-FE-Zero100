import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <span className="text-base font-semibold">ZERO100 Admin</span>
      <button
        onClick={() => navigate('/login')}
        className="text-sm text-gray-500 transition-colors hover:text-black"
      >
        로그아웃
      </button>
    </header>
  );
}
