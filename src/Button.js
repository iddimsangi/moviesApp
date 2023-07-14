function Button({ children, isOpen1, setIsOpen1 }) {
  return (
    <button
      className="btn-toggle"
      onClick={() => setIsOpen1((open) => !isOpen1)}
    >
      {isOpen1 ? "–" : "+"}
    </button>
  );
}

export default Button;
