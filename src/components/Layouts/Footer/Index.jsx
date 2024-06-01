import logo1 from '/img/logo1.png'
import Button from '../../Elements/Button/Index';

const Footer = () => {
  return (
    <footer className="w-full bg-[#252641] flex flex-col items-center px-24 pt-14 pb-4 max-[768px]:px-16 max-[768px]:pt-10 max-[576px]:px-5 max-[576px]:py-5">
      <article className="footer-header w-full flex justify-center items-center mb-10">
        <img className="mr-2 w-24 max-[768px]:w-20" src={logo1} alt="Logo" />
        <hr className="w-12 bg-[#626381] text-[#626381] rotate-90" />
        <h2 className="font-poppins font-semibold text-white w-[10%] ml-2 max-[768px]:w-[20%] ">Virtual Class for Zoom</h2>
      </article>
      <article className="footer-body w-full flex flex-col items-center">
        <h2 className="font-poppins text-[#B2B3CF] font-medium mb-3 max-[768px]:mb-5">Subscribe to get our Newsletter</h2>
        <div className="email flex">
          <input className="text-white rounded-full px-5 py-1 bg-[#252641] border border-gray-500 max-[576px]:w-40" type="email" placeholder="Your Email" />
          <Button className="bg-[#545AE8] text-white ml-5 max-[576px]:text-xs max-[576px]:mr-0">Subscribe</Button>
        </div>
      </article>
      <article className="footer-link mt-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <p className="font-poppins text-[#B2B3CF] max-[576px]:text-xs max-[576px]:m-0 mr-3">Careers</p>
          <hr className="rotate-90 w-3" />
          <p className="font-poppins text-[#B2B3CF] max-[576px]:text-xs max-[576px]:m-0 mr-3 ml-3">Privacy Policy</p>
          <hr className="rotate-90 w-3" />
          <p className="font-poppins text-[#B2B3CF] max-[576px]:text-xs max-[576px]:m-0 ml-3">Terms & Conditions</p>
        </div>
        <p className="font-poppins text-[#B2B3CF] mt-5">© 2021 Class Technologies Inc. </p>
      </article>
    </footer>
  );
};

export default Footer;
