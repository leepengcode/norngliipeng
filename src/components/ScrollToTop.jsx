import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="fixed bottom-[15px] right-[20px] h-[40px] w-[40px] rounded-3xl bg-white cursor-pointer hover:animate-none hover:bg-black hover:text-white border-solid text-black"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
