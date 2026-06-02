import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getInquiries, deleteInquiry } from '../api/inquiry';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

export default function InquiryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inquiry, setInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const res = await getInquiries();
        const found = res.data.data.find((item) => item.id === id);
        setInquiry(found ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInquiry();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteInquiry(id);
      setShowModal(false);
      setShowToast(true);
      setTimeout(() => navigate('/inquiry'), 1500);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="py-10 text-center text-sm text-gray-400">불러오는 중...</p>;
  }

  if (!inquiry) {
    return <p className="py-10 text-center text-sm text-gray-400">문의를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">문의 상세</h1>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => navigate('/inquiry')}>
            목록으로
          </Button>
          <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
            삭제
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="mb-2 text-xs text-gray-500">{inquiry.created_at}</p>
        <h2 className="mb-5 text-xl font-bold">{inquiry.title}</h2>

        <div className="mb-4 grid grid-cols-2 gap-4 border-b border-t border-gray-100 py-4">
          <div>
            <p className="mb-1 text-xs text-gray-500">작성자</p>
            <p className="text-sm font-semibold">{inquiry.name}</p>
          </div>
          <div>
            <p className="mb-1 text-xs text-gray-500">이메일</p>
            <p className="text-sm font-semibold">{inquiry.email}</p>
          </div>
        </div>

        <p className="mb-2 text-xs text-gray-500">문의 내용</p>
        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{inquiry.content}</p>
      </div>

      {showModal && (
        <Modal
          message="문의를 삭제하시겠습니까?"
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
      {showToast && <Toast message="문의가 삭제되었습니다." onClose={() => setShowToast(false)} />}
    </div>
  );
}
