import Button from './Button'

export default function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg px-8 py-7 min-w-[280px] max-w-sm text-center shadow-xl">
        <p className="text-base mb-6">{message}</p>
        <div className="flex justify-center gap-2.5">
          <Button variant="secondary" size="sm" onClick={onCancel}>취소</Button>
          <Button variant="primary" size="sm" onClick={onConfirm}>확인</Button>
        </div>
      </div>
    </div>
  )
}
