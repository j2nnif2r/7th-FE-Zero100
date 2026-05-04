export default function DashboardHome() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-5">대시보드</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* 내 정보 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">내 정보</h3>
          <div className="space-y-0">
            {[
              { label: '이름', value: '홍길동' },
              { label: '이메일', value: 'hong@example.com' },
              { label: '가입일', value: '2024.01.15' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex justify-between items-center py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 문의 현황 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">문의 현황</h3>
          <div className="space-y-0">
            {[
              { label: '전체 문의', value: '24건' },
              { label: '내가 쓴 문의', value: '8건' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex justify-between items-center py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
