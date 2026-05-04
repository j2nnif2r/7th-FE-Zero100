import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: '대시보드 홈' },
  { to: '/inquiry', label: '문의' },
  { to: '/mypage', label: '마이페이지' },
]

export default function Sidebar() {
  return (
    <aside className="w-36 min-w-36 bg-white border-r border-gray-200">
      <nav className="py-2">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `block px-4 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
