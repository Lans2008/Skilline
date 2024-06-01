const Point = (props) => {
    const {src,children} = props;
  return (
    <article className="flex mt-5 pr-10 max-[576px]:pr-0">
      <span className="p-3 bg-white rounded-full mr-5 shadow flex items-center justify-center max-[768px]:p-5 ">
        <img className="max-[768px]:w-10" src={src} alt="Opt" />
      </span>
      <p className="font-poppins text-[#696984] text-md max-[768px]:text-sm">{children}</p>
    </article>
  );
};

export default Point;
