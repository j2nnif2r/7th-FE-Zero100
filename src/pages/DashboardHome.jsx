export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-5 text-xl font-semibold">대시보드</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-gray-700">내 정보</h3>
          {[
            { label: '이름', value: '홍길동' },
            { label: '이메일', value: 'hong@example.com' },
            { label: '가입일', value: '2024.01.15' },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <span className="text-gray-600">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-gray-700">문의 현황</h3>
          {[
            { label: '전체 문의', value: '24건' },
            { label: '내가 쓴 문의', value: '8건' },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <span className="text-gray-600">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
