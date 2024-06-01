import company from '/img/company.png';

const Company = () => {
  return (
    <article className="w-full py-16 px-44 flex flex-col items-center max-[768px]:px-32 max-[768px]:py-14 max-[576px]:px-5 max-[576px]:py-10 max-[576px]:overflow-scroll">
     
        <p className="mb-5 font-poppins font-medium text-[#696984] max-[576px]:text-center">Trusted by 5,000+ Companies Worldwide</p>
      
      <img className="w-max" src={company} alt="Company" />
    </article>
  );
};

export default Company;
