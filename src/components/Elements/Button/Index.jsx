const Button = (props) => {
  const { children, className = 'bg-white text-#6C6C6C' } = props;
  return <button className={`${className} mr-4 px-7 py-2 rounded-full shadow font-poppins text-medium `}>{children}</button>;
};

export default Button;
