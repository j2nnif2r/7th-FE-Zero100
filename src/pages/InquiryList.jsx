import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInquiries } from '../api/inquiry';
import Button from '../components/Button';

export default function InquiryList() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await getInquiries();
        setInquiries(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  const handleRowClick = (id) => navigate(`/inquiry/${id}`);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">문의 목록</h1>
        <Button size="sm" onClick={() => navigate('/inquiry/new')}>
          문의 등록
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="w-16 px-4 py-3 text-left text-xs font-medium text-gray-500">번호</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">제목</th>
              <th className="w-36 px-4 py-3 text-left text-xs font-medium text-gray-500">작성일</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="py-10 text-center text-sm text-gray-400">
                  불러오는 중...
                </td>
              </tr>
            ) : inquiries.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-10 text-center text-sm text-gray-400">
                  등록된 문의가 없습니다.
                </td>
              </tr>
            ) : (
              inquiries.map((item, i) => (
                <tr
                  key={item.id}
                  onClick={() => handleRowClick(item.id)}
                  onKeyDown={(e) => e.key === 'Enter' && handleRowClick(item.id)}
                  tabIndex={0}
                  role="button"
                  className={`cursor-pointer transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black ${i > 0 ? 'border-t border-gray-100' : ''}`}
                >
                  <td className="px-4 py-4 text-sm text-gray-600">{i + 1}</td>
                  <td className="px-4 py-4 text-sm">{item.title}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{item.created_at}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
