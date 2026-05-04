import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <span className="font-semibold text-base">ZERO100 Admin</span>
      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 hover:text-black transition-colors"
      >
        로그아웃
      </button>
    </header>
  )
}
