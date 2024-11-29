import { Link } from "react-router-dom";
import womenExpectingBaby from "../../assets/images/herosection/black-white-portrait-woman-expecting-baby (3) (1).png";
import pointer from "../../assets/images/herosection/Group 1000002382.png";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import CircularProgress from "../../components/CircularProgressbar/CircularProgressbar";

function HeroSection() {
  return (
    <div className="bg-[#303030] text-white flex flex-col md:flex-row items-center justify-between h-screen pb-12">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <Breadcrum />
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <Link to="/">
            <h1 className="text-sm text-white visible md:invisible mb-2">
              &larr; IVF Success Rate Calculator
            </h1>
          </Link>
          <div className="flex items-center gap-4 mb-8 md:mt-[-2rem]">
            <img
              src={pointer}
              alt="Pointer Icon"
              className="h-6 md:h-8"
            />
            <h1 className="text-lg md:text-4xl font-semibold text-white">
              Your estimated IVF Success Rate is
            </h1>
          </div>
          <div className="my-4">
            <CircularProgress />
          </div>
          <p className="text-center md:mt-8">With 1 IVF Cycle</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img
          src={womenExpectingBaby}
          alt="Woman Expecting Baby"
          className="max-h-[90%] md:mr-[-4rem]"
        />
        <div className="hidden md:block mt-8">
          <button className="bg-[#f48265] text-white px-6 py-3 rounded-lg w-full hover:bg-[#f96e48]">
            Start private consultation
          </button>
        </div>
      </div>

      <div className="block md:hidden w-full px-5">
        <button className="bg-[#f48265] text-white w-full py-3 rounded-lg hover:bg-[#f96e48]">
          Start private consultation
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
