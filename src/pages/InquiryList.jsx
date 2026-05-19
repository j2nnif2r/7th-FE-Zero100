import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const inquiries = [
  { id: 1, title: '서비스 이용 관련 문의드립니다', date: '2026년 3월 25일\n17:11' },
  { id: 2, title: '결제 시스템에 대해 질문이 있습니다', date: '2026년 3월 24일\n14:30' },
  { id: 3, title: '회원가입이 되지 않습니다', date: '2026년 3월 23일\n09:15' },
  { id: 4, title: '대시보드 기능 개선 요청', date: '2026년 3월 22일\n16:45' },
  { id: 5, title: 'API 연동 방법 문의', date: '2026년 3월 21일\n11:20' },
];

export default function InquiryList() {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/inquiry/${id}`);
  };

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
            {inquiries.map((item, i) => (
              // 리뷰 반영: tabIndex, onKeyDown으로 키보드 접근성 추가
              <tr
                key={item.id}
                onClick={() => handleRowClick(item.id)}
                onKeyDown={(e) => e.key === 'Enter' && handleRowClick(item.id)}
                tabIndex={0}
                role="button"
                className={`cursor-pointer transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black ${i > 0 ? 'border-t border-gray-100' : ''}`}
              >
                <td className="px-4 py-4 text-sm text-gray-600">{item.id}</td>
                <td className="px-4 py-4 text-sm">{item.title}</td>
                <td className="whitespace-pre-line px-4 py-4 text-sm text-gray-600">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
