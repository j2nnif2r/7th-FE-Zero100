import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

export default function InquiryNew() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', title: '', content: '' })

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = () => {
    navigate('/inquiry')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-5">문의 등록</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">이름</label>
            <TextInput placeholder="이름을 입력하세요" value={form.name} onChange={handleChange('name')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
            <TextInput type="email" placeholder="이메일을 입력하세요" value={form.email} onChange={handleChange('email')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">제목</label>
            <TextInput placeholder="제목을 입력하세요" value={form.title} onChange={handleChange('title')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">내용</label>
            <TextInput placeholder="내용을 입력하세요" value={form.content} onChange={handleChange('content')} rows={6} />
          </div>
        </div>
        <div className="flex justify-end gap-2.5 mt-5">
          <Button variant="secondary" size="sm" onClick={() => navigate('/inquiry')}>취소</Button>
          <Button variant="primary" size="sm" onClick={handleSubmit}>등록</Button>
        </div>
      </div>
    </div>
  )
}
