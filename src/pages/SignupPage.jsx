import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

export default function SignupPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      newErrors.email = '올바른 이메일 형식을 입력하세요'
    }

    if (password.length < 8) {
      newErrors.password = '8자 이상, 영문/숫자/특수문자 포함'
    }

    if (passwordConfirm.length < 2) {
      newErrors.passwordConfirm = '2자 이상 입력하세요'
    }

    // 비밀번호 일치 여부 검사
    if (password && passwordConfirm && password !== passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다'
    }

    return newErrors
  }

  const handleSignup = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-sm p-10 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-6">회원가입</h2>

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
            placeholder="비밀번호를 다시 입력하세요"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={errors.passwordConfirm}
            hint={!errors.passwordConfirm ? '2자 이상 입력하세요' : undefined}
          />
        </div>

        <Button variant="primary" size="full" className="mt-4" onClick={handleSignup}>
          회원가입
        </Button>

        <p className="text-center text-sm text-gray-500 mt-4">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="font-semibold text-black underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}