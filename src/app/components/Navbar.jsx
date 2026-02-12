import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

export default function Navbar() {
  const links = [
    { label: "Home", link: "/" },
    { label: "Search", link: "/search" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-25 px-4 2xl:px-0">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl font-semibold text-darkBlue-pastel"
        >
          Movie API
        </Link>
        <div className="flex items-center">
          <ul className="space-x-4 hidden sm:block">
            {links.map((item, id) => (
              <Link
                href={item.link}
                key={id}
                className="text-lg text-darkBlue-pastel"
              >
                {item.label}
              </Link>
            ))}
          </ul>
          <button className="py-3 px-6 transition-all cursor-not-allowed duration-500 hover:shadow-[0_7px_30px_0_rgb(50,75,78)] text-darkBlue-pastel text-lg rounded-full hover:bg-darkBlue-pastel hover:ml-4 hover:text-white active:translate-y-2.5 active:duration-100">
            <span>Contact</span>
            <span></span>
          </button>
        </div>
      </nav>
    </motion.div>
  );
}
