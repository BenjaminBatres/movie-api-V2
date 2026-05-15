"use client";
import Navbar from "@/app/components/Navbar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MovieSkeletonCard from "@/app/components/MovieSkeletonCard";
import CustomSelect from "@/app/components/CustomSelect";
import Header from "@/app/components/Header";
import * as motion from "motion/react-client";
import NoImage from "../../assets/image.png";

export default function page() {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [select, setSelect] = useState("Sort by");
  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=4053be5e&s=${id}`,
      );
      const data = await res.json();
      setIsLoading(false);

      setMovies(data.Search);
      if (select === "Latest - Oldest") {
        setIsLoading(true);
        data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        setTimeout(() => {
          setIsLoading(false);
        }, 250);
      } else if (select === "Oldest - Latest") {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 250);
        data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
      }
    }
    fetchMovie();
  }, [select]);

  function decodeSpaces(str) {
  // The 'g' flag ensures it replaces every instance, not just the first one
  return str.replace(/%20/g, ' ');
}
  return (
    <>
      <Navbar />
      <Header />
      <div className="py-10 px-2">
        <div
          className={`max-w-7xl mx-auto flex ${movies === undefined ? "justify-center" : "justify-between"}`}
        >
          {movies !== undefined ? (
            <>
              <div className="text-xl sm:text-2xl md:text-3xl font-extralight text-darkBlue-pastel">
                Search results for: "{decodeSpaces(id)}"
              </div>

              <CustomSelect
                options={["Latest - Oldest", "Oldest - Latest"]}
                select={select}
                setSelect={setSelect}
              />
            </>
          ) : (
            <div className="text-xl sm:text-2xl md:text-3xl font-extralight text-darkBlue-pastel">
              No search results for: "{decodeSpaces(id)}"
            </div>
          )}
        </div>
      </div>
      <div className="pb-5 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2">
            {isLoading ? (
              <MovieSkeletonCard movieCards={8} />
            ) : (
              <>
                {movies
                  ?.filter((moive) => moive.Type === "movie")
                  .map((movie, idx) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      key={idx}
                      className=" transition-all duration-300 hover:scale-[0.98]"
                    >
                      <Link href={`/movie/${movie.imdbID}`} key={idx}>
                        <figure className="h-85 sm:h-120 mb-2">
                          <Image
                            src={
                              movie.Poster !== "N/A" ? movie.Poster : NoImage
                            }
                            width={200}
                            height={200}
                            alt={movie.Title}
                            className="h-full w-full"
                          ></Image>
                        </figure>
                        <div className="text-lg text-darkBlue-pastel">
                          {movie.Title}
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-darkBlue-pastel">
                            {movie.Year}
                          </div>
                          <div className="capitalize text-darkBlue-pastel border text-sm px-2 border-darkBlue-pastel">
                            {movie.Type}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
