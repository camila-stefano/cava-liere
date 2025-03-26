const Button = ({ children }) => {
  return (
    <button className="text-secondary border-secondary hover:bg-secondary rounded-full border-2 px-4 py-2 tracking-widest uppercase hover:text-white">
      {children}
    </button>
  );
};

export default Button;
