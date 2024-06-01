const Logo = (props) => {
  const { logo } = props;
  return (
    <div className="logo w-[40%] max-[768px]:w-1/4">
      <img className="w-24 max-[768px]:w-20" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
