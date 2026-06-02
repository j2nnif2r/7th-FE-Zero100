function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

export default Input;