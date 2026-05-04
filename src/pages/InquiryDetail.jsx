import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Toast from '../components/Toast'

const inquiry = {
  id: 1,
  date: '2026년 3월 25일 17:11',
  title: '서비스 이용 관련 문의드립니다',
  author: '홍길동',
  email: 'hong@example.com',
  content: `안녕하세요. 서비스 이용 중 몇 가지 궁금한 사항이 있어 문의드립니다.

1. API 연동 시 인증 방법은 어떻게 되나요?
2. 데이터 백업 주기는 어떻게 되나요?
3. 사용자 권한 관리는 어떻게 설정하나요?

자세한 답변 부탁드립니다. 감사합니다.`,
}

export default function InquiryDetail() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleDelete = () => {
    setShowModal(false)
    setShowToast(true)
    setTimeout(() => navigate('/inquiry'), 1500)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">문의 상세</h1>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => navigate('/inquiry')}>목록으로</Button>
          <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>삭제</Button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <p className="text-xs text-gray-500 mb-2">{inquiry.date}</p>
        <h2 className="text-xl font-bold mb-5">{inquiry.title}</h2>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">작성자</p>
            <p className="text-sm font-semibold">{inquiry.author}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">이메일</p>
            <p className="text-sm font-semibold">{inquiry.email}</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-2">문의 내용</p>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{inquiry.content}</p>
      </div>

      {showModal && (
        <Modal
          message="문의를 삭제하시겠습니까?"
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}

      {showToast && (
        <Toast message="문의가 삭제되었습니다." onClose={() => setShowToast(false)} />
      )}
    </div>
  )
}
