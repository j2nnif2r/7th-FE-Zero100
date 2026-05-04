import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const inquiries = [
  { id: 1, title: '서비스 이용 관련 문의드립니다', date: '2026년 3월 25일 17:11' },
  { id: 2, title: '결제 시스템에 대해 질문이 있습니다', date: '2026년 3월 24일 14:30' },
  { id: 3, title: '회원가입이 되지 않습니다', date: '2026년 3월 23일 09:15' },
  { id: 4, title: '대시보드 기능 개선 요청', date: '2026년 3월 22일 16:45' },
  { id: 5, title: 'API 연동 방법 문의', date: '2026년 3월 21일 11:20' },
]

export default function InquiryList() {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">문의 목록</h1>
        <Button size="sm" onClick={() => navigate('/inquiry/new')}>문의 등록</Button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium w-16">번호</th>
              <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium">제목</th>
              <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium w-36">작성일</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item, i) => (
              <tr
                key={item.id}
                onClick={() => navigate(`/inquiry/${item.id}`)}
                className={`cursor-pointer hover:bg-gray-50 transition-colors ${i > 0 ? 'border-t border-gray-100' : ''}`}
              >
                <td className="px-4 py-4 text-sm text-gray-600">{item.id}</td>
                <td className="px-4 py-4 text-sm">{item.title}</td>
                <td className="px-4 py-4 text-sm text-gray-600 whitespace-pre-line">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
