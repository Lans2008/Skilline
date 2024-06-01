const Heading = (props) => {
  const { span, children, desc,className= "w-[60%]" } = props;
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-poppins font-bold text-[#F48C06] text-2xl mb-5 max-[768px]:mb-3 max-[576px]:text-center">
        <span className="text-[#2F327D]">{span}</span>
        {children}
      </h1>
      <p className={`font-poppins text-[#696984] ${className} max-[576px]:w-full  text-center leading-tigh max-[768px]:text-sm`}>{desc}</p>
    </section>
  );
};

export default Heading;
