import Navbar from "../../Fragments/Navbar/Index";
import Button from "../../Elements/Button/Index";
import hero from '/img/hero.png'
import play from '/img/play.png'

const Hero = () => {
  return (
    <div id="hero" className="bg-[url('/img/Rectangle.svg')] w-full  flex flex-col rounded-b-[15%] overflow-y-hidden max-[576px]:pb-10 max-[576px]:rounded-[0%]">
      <Navbar />
      <div className="px-10 w-full flex justify-between pt-24 max-[576px]:px-5 max-[576px]:flex-wrap max-[576px]:flex-col-reverse max-[576px]:pt-16">
        {' '}
        <section className="w-1/2 flex flex-col justify-center max-[576px]:w-full">
          <h1 className="text-4xl font-bold font-poppins text-[#2F327D] w-[80%] leading-tigh max-[768px]:text-2xl">
            <span className="text-[#F48C06]">Studying </span>Online is now much easier
          </h1>
          <p className="text-nunito text-lg text-[#464646] my-7 w-[65%] max-[768px]:my-3 max-[768px]:text-sm max-[768px]:w-[80%]">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div className="hero-button flex items-center">
            <Button className="bg-[#F48C06] text-white py-3 w-max max-[768px]:w-max max-[768px]:text-sm max-[768px]:px-4 max-[768px]:mr-2 max-[576px]:text-xs max-[576px]:w-32 max-[576px]:p-0 max-[576px]:py-2">Join For Free</Button>
            <Button className="relative bg-white py-6 px-6 flex justify-center items-center">
              <img className="w-[35%] absolute end-3 max-[768px]:w-[30%] max-[768px]:end-4 max-[576px]:w-[35%] max-[576px]:end-4" src={play} alt="Play" />
            </Button>
            <p className="font-poppins text-[#252641] max-[768px]:text-xs">Watch how it works</p>
          </div>
        </section>
        <figure className="w-1/2 flex justify-end max-[576px]:w-full max-[576px]:mb-4">
          <img className="w-[90%] max-[576px]:w-full" src={hero} alt="Student" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
