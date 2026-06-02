export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
}) {
  const base = 'font-medium rounded-md cursor-pointer transition-colors disabled:opacity-50';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50',
    kakao: 'bg-[#FEE500] text-[#3C1E1E] hover:bg-yellow-300 flex items-center justify-center gap-2',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    full: 'w-full py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
