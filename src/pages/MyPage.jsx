import { useState } from 'react';
import { updateName, updatePassword } from '../api/auth';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Toast from '../components/Toast';

export default function MyPage() {
  const [name, setName] = useState('');
  const [passwordForm, setPasswordForm] = useState({
    currentPw: '',
    newPw: '',
    newPwConfirm: '',
  });
  const [toast, setToast] = useState(null);
  const [nameError, setNameError] = useState('');
  const [pwError, setPwError] = useState('');

  const handlePasswordChange = (field) => (e) => {
    setPasswordForm({ ...passwordForm, [field]: e.target.value });
  };

  const handleNameUpdate = async () => {
    setNameError('');
    try {
      await updateName(name);
      setToast('이름이 변경되었습니다.');
      setName('');
    } catch (err) {
      setNameError(err.response?.data?.error || '이름 변경에 실패했습니다.');
    }
  };

  const handlePasswordUpdate = async () => {
    setPwError('');
    if (passwordForm.newPw !== passwordForm.newPwConfirm) {
      setPwError('새 비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      await updatePassword({
        currentPassword: passwordForm.currentPw,
        newPassword: passwordForm.newPw,
      });
      setToast('비밀번호가 변경되었습니다.');
      setPasswordForm({ currentPw: '', newPw: '', newPwConfirm: '' });
    } catch (err) {
      setPwError(err.response?.data?.error || '비밀번호 변경에 실패했습니다.');
    }
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
          error={nameError}
        />
        <div className="mt-3 flex justify-end">
          <Button size="sm" onClick={handleNameUpdate}>
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
        {pwError && <p className="mt-2 text-sm text-red-500">{pwError}</p>}
        <div className="mt-4 flex justify-end">
          <Button size="sm" onClick={handlePasswordUpdate}>
            변경
          </Button>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
