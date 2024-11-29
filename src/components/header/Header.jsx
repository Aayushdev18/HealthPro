import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/ivf-pulse-logo.png";
import { Sling as Hamburger } from "hamburger-react"; // Assuming you're using `hamburger-react`
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white">
        {/* Logo */}
        <div>
          <img src={logo} alt="IVF Pulse Logo" className="h-12" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="#" className="text-black hover:text-[#f48265]">
            Donor Programme
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265]">
            Fertility Preservation
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265]">
            Advanced Treatments
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265]">
            Infertility Treatments
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265]">
            IVF Testing
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265]">
            About Us
          </Link>
          <button className="bg-[#f48265] text-white px-4 py-2 rounded-lg hover:bg-[#f96e48]">
            Talk to Us <span className="ml-2">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 bg-white p-5 shadow-lg">
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            Donor Programme
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            Fertility Preservation
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            Advanced Treatments
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            Infertility Treatments
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            IVF Testing
          </Link>
          <Link to="#" className="text-black hover:text-[#f48265] text-lg">
            About Us
          </Link>
          <button className="bg-[#f48265] text-white px-4 py-2 rounded-lg hover:bg-[#f96e48]">
            Talk to Us
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
