const CardNews = (props) => {
    const {src,title,desc,className} = props;
  return (
    <article className="newscard flex max-[576px]:flex-wrap">
      <figure className={`mr-5 w-max overflow-hidden max-[576px]:w-full max-[576px]:m-0 max-[576px]:mb-3`}>
        <img className="w-full object-cover" src={src} alt="Children" />
      </figure>
      <section className={`${className} max-[576px]:w-full`}>
        <h2 className="font-poppins font-medium text-[#252641] mb-3 max-[768px]:text-sm">{title}</h2>
        <p className="font-poppins text-[#696984] max-[768px]:text-xs">{desc}</p>
      </section>
    </article>
  );
};

export default CardNews;
