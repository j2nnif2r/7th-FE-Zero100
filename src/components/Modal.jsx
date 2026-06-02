import Button from './Button';

export default function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="min-w-[280px] max-w-sm rounded-lg bg-white px-8 py-7 text-center shadow-xl">
        <p className="mb-6 text-base">{message}</p>
        <div className="flex justify-center gap-2.5">
          <Button variant="secondary" size="sm" onClick={onCancel}>
            취소
          </Button>
          <Button variant="primary" size="sm" onClick={onConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
