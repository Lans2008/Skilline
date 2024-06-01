import Button from '../Button/Index';

const CardAbout = (props) => {
  const { src, title, children, className = 'bg-none border' } = props;
  return (
    <figure className="relative object-cover w-96 flex flex-col items-center justify-center h-64 rounded-3xl">
      <img className="absolute w-full -z-10 brightness-75" src={src} alt="Instructor" />
      <h1 className="mb-3 font-poppins font-semibold text-white text-xl text-center">{title}</h1>
      <Button className={`${className} text-white text-medium text-sm py-3`}>{children}</Button>
    </figure>
  );
};

export default CardAbout;
