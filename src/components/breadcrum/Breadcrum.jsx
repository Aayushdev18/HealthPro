import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Breadcrum() {
  const path = useLocation().pathname;
  const [isResultPage, setIsResultPage] = useState(false)
  useEffect(() => {
    if (path == "/result") {
      setIsResultPage(true)
    }
  }, [path])
  return (
    <>
      <div className="breadcrum-container hidden sm:flex p-10 ml-14 gap-4 font-normal">
        <span>Home</span>
        <span>/</span>
        <span>IVF Success Rate Calculator</span>
        {isResultPage &&
          <>
          <span>/</span>
          <span>Result</span>
          </>
        }
      </div>
    </>
  );
}

export default Breadcrum;
