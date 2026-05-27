'use client'
import React from "react";
import SearchInput from "./ui/SearchInput";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname()
  const moviePathname = pathName.slice(0,6)
  if (pathName !== '/' ) return (
    <header
      className="h-100 bg-cover bg-center border-y-5 border-darkBlue-pastel flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7081182/pexels-photo-7081182.jpeg)`,
        display: moviePathname === '/movie' && 'none' 
      }}
    >
      <motion.div
        initial={{ opacity: 0,  translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl text-darkBlue-pastel font-semibold mb-4 text-shadow-lg/30 text-shadow-[#97cde7] text-center">
          Browse Our Movies
        </h2>
        <SearchInput color={"#97cde7"} bgColor={"rgba(0,0,0,0.5)"} />
      </motion.div>
    </header>
  );
}
