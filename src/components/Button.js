const Button = ({ children }) => {
  return (
    <button className="text-secondary border-2 py-2 px-4 border-secondary uppercase tracking-widest hover:bg-secondary hover:text-white">
      {children}
    </button>
  );
};

export default Button;
