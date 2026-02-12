'use client'
import Image from "next/image";
import Link from "next/link";
import HeaderImage from "../app/assets/undraw_horror-movie_9020.svg";
import Navbar from "./components/Navbar";
import SearchInput from "./components/ui/SearchInput";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <h2 className="text-darkBlue-pastel font-semibold text-4xl sm:text-5xl mb-4 text-center">
            Browse our Movies
          </h2>
          <SearchInput color={'#324b4e'} shadow={"shadow-searchBoxPrimary-shadow"} />
          <figure className="px-4 sm:px-0">
          <Image src={HeaderImage} alt="header" height={660} width={660} />

          </figure>
        </div>
      </div>
    </>
  );
}
