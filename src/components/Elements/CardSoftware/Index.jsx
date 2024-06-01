const CardSoftware = (props) => {
    const {src,title,desc,className = "p-3 bg-[#5B72EE]"} = props;
  return (
    <div className="relative w-72 flex flex-col items-center bg-white shadow p-8 rounded-xl max-[768px]:w-52 max-[768px]:p-5 max-[576px]:w-full">
      <figure className={`absolute -top-6 ${className} rounded-full flex justify-center`}>
        <img className="w-[60%]" src={src} alt="File" />
      </figure>
      <h1 className="font-poppins pt-10 mb-5 font-medium text-center leading-tigh text-xl text-[#2F327D] max-[768px]:text-lg max-[768px]:pt-6 max-[768px]:mb-3" >{title}</h1>
      <p className="text-center font-poppins text-[#696984] text-sm max-[768px]:text-xs">{desc}</p>
    </div>
  );
};

export default CardSoftware;
