"use client";
import React, { useEffect, useState } from "react";
import { CgScrollV } from "react-icons/cg";
function ScroolTotop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Attach the scroll event listener in the useEffect hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" md:p-5 p-3 fixed bg-black bottom-5 mr-5 z-50 right-0 text-3xl bg-gradient-to-r from-rose-400 to-red-500 rounded-md"
        >
          <CgScrollV />
        </button>
      )}
    </>
  );
}

export default ScroolTotop;
