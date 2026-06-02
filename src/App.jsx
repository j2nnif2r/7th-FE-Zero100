import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import InquiryList from './pages/InquiryList';
import InquiryNew from './pages/InquiryNew';
import InquiryDetail from './pages/InquiryDetail';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="inquiry" element={<InquiryList />} />
        <Route path="inquiry/new" element={<InquiryNew />} />
        <Route path="inquiry/:id" element={<InquiryDetail />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
