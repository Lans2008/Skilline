const Info = (props) => {
  const { children } = props;
  return (
    <div id="info" className="w-1/2 max-[576px]:w-full">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { title, span,className } = props;
  return (
    <h1 className={`font-poppins text-3xl text-[#2F327D] font-bold leading-tigh ${className} max-[768px]:text-2xl max-[576px]:text-xl`}>
      {title}
      <span className="text-[#F48C06]">{span}</span>
    </h1>
  );
};

const Body = (props) => {
  const { children } = props;
  return <section className=" flex flex-col justify-center">{children}</section>;
};

const Image = (props) => {
  const { src } = props;
  return (
    <figure className="w-1/2 flex justify-end">
      <img className="w-[90%]" src={src} alt="Classroom" />
    </figure>
  );
};

Info.Header = Header;
Info.Body = Body;
Info.Image = Image;

export default Info;
