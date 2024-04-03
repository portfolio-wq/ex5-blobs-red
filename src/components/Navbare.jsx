"use client";
import React, { useState } from "react";

function Navbar() {
  const links = [
    { id: 0, value: "About", link: "about" },
    { id: 1, value: "Experience", link: "experience" },
    { id: 2, value: "Projects", link: "projects" },
    { id: 3, value: "Contact", link: "contact" },
  ];

  const [selectedLink, setSelectedLink] = useState(links[0]);

  const handleSelectLink = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className=" flex p-10 md:justify-between items-center flex-wrap justify-center gap-5 bg-transparent">
      <div className="font-bold tracking-[5px] text-xl">Logo</div>
      <ul className="flex md:gap-5 gap-2">
        {links.map((link) => (
          <li
            key={link.id}
            onClick={() => handleSelectLink(link)}
            className={`p-3 cursor-pointer rounded-3xl ${
              selectedLink.id === link.id
                ? "bg-red-500 transition-all duration-300"
                : "transition-all duration-300"
            }`}
          >
            <a href={`#${link.link}`}>{link.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
