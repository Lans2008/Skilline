import Logo from "../../Elements/Logo/Index";
import Button from "../../Elements/Button/Index";
import logo from '/img/logo.png'

const Navbar = () => {
  return (
    <header className="fixed w-full flex items-center px-10 py-5 z-10 max-[768px]:py-3 max-[768px]:px-8 max-[768px]:justify-between max-[576px]:px-5">
      <Logo logo={logo} />
      <ul className="flex w-[40%] justify-evenly max-[768px]:w-1/2 max-[576px]:hidden">
        <li>
          <a className="font-poppins px-2 " href="#">
            Home
          </a>
        </li>
        <li>
          <a className="font-poppins px-2 " href="#">
            Careers
          </a>
        </li>
        <li>
          <a className="font-poppins px-2 " href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="font-poppins px-2 " href="#">
            About Us
          </a>
        </li>
      </ul>
      <div className="login flex w-[20%]  justify-center max-[768px]:w-1/4 max-[768px]:justify-end max-[576px]:hidden">
        <Button className="justify-center px-0 py-2 mr-5 bg-white max-[768px]:text-sm max-[768px]:px-4 max-[768px]:mr-3 max-[768px]:w-1/2">Login</Button>
        <Button className="bg-[#F48C06] text-white w-max max-[768px]:text-sm max-[768px]:w-1/2 max-[768px]:px-2 max-[768px]:mr-0">Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
