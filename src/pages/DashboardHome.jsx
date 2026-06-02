import { useEffect, useState } from 'react';
import { getMe } from '../api/auth';
import { getInquiries } from '../api/inquiry';

export default function DashboardHome() {
  const [user, setUser] = useState(null);
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meRes, inquiriesRes] = await Promise.all([getMe(), getInquiries()]);
        setUser(meRes.data.data);
        setInquiryCount(inquiriesRes.data.data.length);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return dateStr.slice(0, 10).replace(/-/g, '.');
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-5 text-xl font-semibold">대시보드</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-gray-700">내 정보</h3>
          {[
            { label: '이름', value: user?.name ?? '-' },
            { label: '이메일', value: user?.email ?? '-' },
            { label: '가입일', value: formatDate(user?.created_at) },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <span className="text-gray-600">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-gray-700">문의 현황</h3>
          {[
            { label: '전체 문의', value: `${inquiryCount}건` },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <span className="text-gray-600">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
