import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f0f0]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <main className="flex-1 p-7">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
