import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api/auth';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', passwordConfirm: '', name: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = '올바른 이메일 형식을 입력하세요';
    if (form.password.length < 8) newErrors.password = '8자 이상, 영문/숫자/특수문자 포함';
    if (form.passwordConfirm !== form.password) newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
    if (!form.name.trim()) newErrors.name = '이름을 입력하세요';
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await signup({
      email: form.email,
      password: form.password,
      name: form.name,
    });

    alert('회원가입 성공');
    navigate('/login');

  } catch (err) {
    console.error(err);

    const message =
      err.response?.data?.error ||
      '회원가입 실패';

    alert(message);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-10 shadow-sm">
        <h2 className="mb-6 text-center text-xl font-semibold">회원가입</h2>

        <div className="space-y-3">
          <TextInput
            type="email"
            placeholder="이메일을 입력하세요"
            value={form.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          <TextInput
            placeholder="이름을 입력하세요"
            value={form.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={form.password}
            onChange={handleChange('password')}
            error={errors.password}
            hint={!errors.password ? '8자 이상, 영문/숫자/특수문자 포함' : undefined}
          />
          <TextInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={form.passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            error={errors.passwordConfirm}
          />
        </div>

        {errors.server && <p className="mt-2 text-sm text-red-500">{errors.server}</p>}

        <Button variant="primary" size="full" className="mt-4" onClick={handleSignup} disabled={loading}>
          {loading ? '가입 중...' : '회원가입'}
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
