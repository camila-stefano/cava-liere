const Button = ({ children, variant }) => {
  const baseStyles =
    "px-4 py-2 rounded-full border-2 font-semibold transition duration-300 ease-in-out";
  const variantStyles = {
    darkTheme:
      "bg-white hover:bg-black text-black hover:text-white border-white",
    lightTheme: "bg-black hover:bg-white text-white hover:text-black",
  };
  let buttonClasses = `${baseStyles} ${variantStyles[variant]}`;
  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
