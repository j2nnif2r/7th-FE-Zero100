import { useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Toast from '../components/Toast'

export default function MyPage() {
  const [name, setName] = useState('')
  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [newPwConfirm, setNewPwConfirm] = useState('')
  const [toast, setToast] = useState(null)

  const showToast = (msg) => setToast(msg)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold mb-5">마이페이지</h1>

      {/* 이름 변경 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-5">
        <h3 className="text-sm font-semibold mb-3">이름 변경</h3>
        <TextInput
          placeholder="텍스트를 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-end mt-3">
          <Button size="sm" onClick={() => showToast('이름이 변경되었습니다.')}>
            변경
          </Button>
        </div>
      </div>

      {/* 비밀번호 변경 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-sm font-semibold mb-4">비밀번호 변경</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">현재 비밀번호</label>
            <TextInput
              type="password"
              placeholder="현재 비밀번호"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">새 비밀번호</label>
            <TextInput
              type="password"
              placeholder="새 비밀번호"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">새 비밀번호 확인</label>
            <TextInput
              type="password"
              placeholder="새 비밀번호 확인"
              value={newPwConfirm}
              onChange={(e) => setNewPwConfirm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button size="sm" onClick={() => showToast('비밀번호가 변경되었습니다.')}>
            변경
          </Button>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  )
}
