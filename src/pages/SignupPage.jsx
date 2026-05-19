import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = '올바른 이메일 형식을 입력하세요';
    }
    if (password.length < 8) {
      newErrors.password = '8자 이상, 영문/숫자/특수문자 포함';
    }
    // 리뷰 반영: 길이 조건 대신 비밀번호 일치 여부로 변경
    if (passwordConfirm !== password) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
    }
    return newErrors;
  };

  const handleSignup = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-10 shadow-sm">
        <h2 className="mb-6 text-center text-xl font-semibold">회원가입</h2>

        <div className="space-y-3">
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            hint={!errors.password ? '8자 이상, 영문/숫자/특수문자 포함' : undefined}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={errors.passwordConfirm}
          />
        </div>

        <Button variant="primary" size="full" className="mt-4" onClick={handleSignup}>
          회원가입
        </Button>

        <p className="mt-4 text-center text-sm text-gray-500">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="font-semibold text-black underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
