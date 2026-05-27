"use client";
import SearchImage from "../assets/undraw_search-engines_k649.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function page() {
  
  return (
    <>
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl text-darkBlue-pastel font-semibold mb-4 text-center">
              Start Browsing
            </h2>
            <Image src={SearchImage} alt="" className="w-80 sm:w-120" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
