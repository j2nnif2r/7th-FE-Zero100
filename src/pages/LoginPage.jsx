import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await login({ email, password });
      localStorage.setItem('accessToken', res.data.data.accessToken);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || '로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-10 shadow-sm">
        <h2 className="mb-6 text-center text-xl font-semibold">로그인</h2>

        <div className="space-y-3">
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <Button variant="primary" size="full" className="mt-4" onClick={handleLogin} disabled={loading}>
          {loading ? '로그인 중...' : '로그인'}
        </Button>

        <p className="my-4 text-center text-sm text-gray-400">또는</p>

        <a href="/api/auth/kakao">
          <Button variant="kakao" size="full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <ellipse cx="9" cy="8.5" rx="9" ry="8.5" fill="#3C1E1E" />
              <path
                d="M9 3C6.24 3 4 4.79 4 7c0 1.45.9 2.72 2.26 3.47L5.7 13l2.75-1.83C8.62 11.22 8.8 11.22 9 11.22c2.76 0 5-1.79 5-4.01C14 4.79 11.76 3 9 3z"
                fill="#FEE500"
              />
            </svg>
            카카오 로그인
          </Button>
        </a>

        <p className="mt-4 text-center text-sm text-gray-500">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="font-semibold text-black underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
