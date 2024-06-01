import Info from '../../Elements/Info/Index';

const InfoSection = (props) => {
    const {src,children,title,span,className="py-32",figure = "justify-end"} = props;
  return (
    <div className={`w-full ${className} flex items-center px-16 max-[768px]:py-16 max-[768px]:px-10 max-[576px]:flex-wrap max-[576px]:px-5 max-[576px]:flex-col-reverse max-[576px]:py-12` }>
      <Info>
        <Info.Header title={title} span={span}></Info.Header>
        <Info.Body>
          {children}
        </Info.Body>
      </Info>
      <figure className={`w-1/2 flex ${figure} max-[576px]:w-full max-[576px]:mb-3`}>
        <img className="w-[90%] max-[576px]:w-full" src={src} alt="Classroom" />
      </figure>
    </div>
  );
};

export default InfoSection;
