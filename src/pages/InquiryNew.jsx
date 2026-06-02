import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInquiry } from '../api/inquiry';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function InquiryNew() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', name: '', email: '', content: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      await createInquiry(form);
      navigate('/inquiry');
    } catch (err) {
      setError(err.response?.data?.error || '문의 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-5 text-xl font-semibold">문의 등록</h1>
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">이름</label>
            <TextInput placeholder="이름을 입력하세요" value={form.name} onChange={handleChange('name')} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">이메일</label>
            <TextInput type="email" placeholder="이메일을 입력하세요" value={form.email} onChange={handleChange('email')} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">제목</label>
            <TextInput placeholder="제목을 입력하세요" value={form.title} onChange={handleChange('title')} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">내용</label>
            <TextInput placeholder="내용을 입력하세요" value={form.content} onChange={handleChange('content')} rows={6} />
          </div>
        </div>

        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

        <div className="mt-5 flex justify-end gap-2.5">
          <Button variant="secondary" size="sm" onClick={() => navigate('/inquiry')}>
            취소
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit} disabled={loading}>
            {loading ? '등록 중...' : '등록'}
          </Button>
        </div>
      </div>
    </div>
  );
}
