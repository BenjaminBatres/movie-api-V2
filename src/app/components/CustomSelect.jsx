import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function CustomSelect({ options = [], select, setSelect}) {
  const [open, setOpen] = useState(false);
 
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    setSelect(option);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className={`relative mb-3 sm:w-55`} ref={selectRef}>
      <div
        className="border-darkBlue-pastel border-[2.5px] py-2.5 px-3 flex items-center justify-between cursor-pointer mb-1"
        onClick={() => setOpen(!open)}
      >
        <span className="uppercase tracking-[2px] text-sm hidden sm:block">{select}</span>
        <span className="arrow hidden sm:block">&#9662;</span>
        <span className="text-sm text-darkBlue-pastel sm:hidden"><FaFilter/></span>
      </div>
      {open && (
        <div className="absolute top-full right-0 border-[2.5px] w-50 sm:w-full z-10">
          {options.map((option, id) => (
            <div
              key={id}
              className="py-2.5 px-3 text-darkBlue-pastel tracking-[2px] uppercase bg-[#eefcfe] hover:bg-[#95b0b4] cursor-pointer transition-all duration-200 "
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
