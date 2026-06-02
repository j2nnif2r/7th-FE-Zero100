export default function TextInput({ type = 'text', placeholder, value, onChange, error, hint, className = '', rows }) {
  const baseClass = `w-full px-3 py-2.5 border rounded-md text-sm outline-none transition-colors placeholder-gray-400 ${
    error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black'
  } ${className}`;

  return (
    <div className="w-full">
      {rows ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClass}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
