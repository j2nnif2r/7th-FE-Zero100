function Button({
  children,
  onClick,
  type = "button",
  variant = "default",
}) {
  return (
    <button type={type} onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
}

export default Button;