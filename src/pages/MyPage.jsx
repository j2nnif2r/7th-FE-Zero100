import { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Toast from '../components/Toast';

export default function MyPage() {
  const [name, setName] = useState('');

  // 리뷰 반영: currentPw, newPw, newPwConfirm을 객체 하나로 묶어 useState로 관리
  const [passwordForm, setPasswordForm] = useState({
    currentPw: '',
    newPw: '',
    newPwConfirm: '',
  });

  const [toast, setToast] = useState(null);

  const handlePasswordChange = (field) => (e) => {
    setPasswordForm({ ...passwordForm, [field]: e.target.value });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-5 text-xl font-semibold">마이페이지</h1>

      {/* 이름 변경 */}
      <div className="mb-5 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-3 text-sm font-semibold">이름 변경</h3>
        <TextInput
          placeholder="텍스트를 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-3 flex justify-end">
          <Button size="sm" onClick={() => setToast('이름이 변경되었습니다.')}>
            변경
          </Button>
        </div>
      </div>

      {/* 비밀번호 변경 */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold">비밀번호 변경</h3>
        <div className="space-y-3">
          <div>
            <label className="mb-1.5 block text-sm text-gray-600">현재 비밀번호</label>
            <TextInput
              type="password"
              placeholder="현재 비밀번호"
              value={passwordForm.currentPw}
              onChange={handlePasswordChange('currentPw')}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-gray-600">새 비밀번호</label>
            <TextInput
              type="password"
              placeholder="새 비밀번호"
              value={passwordForm.newPw}
              onChange={handlePasswordChange('newPw')}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-gray-600">새 비밀번호 확인</label>
            <TextInput
              type="password"
              placeholder="새 비밀번호 확인"
              value={passwordForm.newPwConfirm}
              onChange={handlePasswordChange('newPwConfirm')}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button size="sm" onClick={() => setToast('비밀번호가 변경되었습니다.')}>
            변경
          </Button>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
