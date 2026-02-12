import React from "react";
import SearchInput from "./ui/SearchInput";
import * as motion from "motion/react-client";

export default function Header() {
  return (
    <header
      className="h-100 bg-cover bg-center border-y-5 border-darkBlue-pastel flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7081182/pexels-photo-7081182.jpeg)`,
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
