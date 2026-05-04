import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-7">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
