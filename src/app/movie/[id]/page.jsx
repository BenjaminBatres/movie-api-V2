"use client";
import Navbar from "@/app/components/Navbar";
import SkeletonBox from "@/app/components/SkeletonBox";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";

export default function page() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const movieInfo = [
    `Released: ${movie?.Title}`,
    `Duration: ${movie?.Runtime}`,
    `Rated: ${movie?.Rated}`,
    `Genre: ${movie?.Genre}`,
    `Casts: ${movie?.Actors}`,
    `Country: ${movie?.Country}`,
  ];

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=4053be5e`,
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    fetchMovie();
  }, []);

  return (
    <>
      <div className="bg-[#97cde7]/70 pb-4 md:pb-0">
        <div className="py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex">
              <div
                className="flex items-center gap-2 mb-4 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <span className="text-3xl text-darkBlue-pastel">
                  <IoChevronBack />
                </span>
                <span className="text-2xl md:text-3xl text-darkBlue-pastel font-semibold">
                  Back
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              {isLoading ? (
                <>
                  <div className="hidden md:block w-200">
                    <SkeletonBox height={500} width={"95%"}  />

                  </div>
                    <div className="md:hidden">
                    <SkeletonBox height={500} width={"100%"} />

                    </div>
                    <div className="flex flex-col w-full">
                      <SkeletonBox
                        height={"3rem"}
                        width={"50%"}
                        marginBottom={12}
                      />
                      <SkeletonBox
                        height={"3.5rem"}
                        width={'60%'}
                        marginBottom={16}
                      />
                      <SkeletonBox
                        height={"3rem"}
                        width={'35%'}
                        marginBottom={16}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                          <SkeletonBox
                            key={idx}
                            height={"2rem"}
                            width={"70%"}
                          />
                        ))}
                      </div>
                    </div>
                  
                </>
              ) : (
                <>
                  <div className="md:w-[35%]">
                    <figure className="">
                      <Image
                        src={movie?.Poster}
                        width={300}
                        height={300}
                        alt=""
                        className="h-full w-full"
                      />
                    </figure>
                  </div>
                  <div className="md:w-[55%]">
                    <h2 className="text-3xl text-darkBlue-pastel font-semibold mb-2">
                      {movie?.Title}
                    </h2>
                    <div className="text-darkBlue-pastel mb-4">
                      {movie?.Plot}
                    </div>
                    <button className="px-4 py-2 rounded-full flex items-center gap-2 bg-white border border-darkBlue-pastel mb-4 cursor-not-allowed active:translate-y-1">
                      <span>
                        <FaCaretRight />
                      </span>
                      <span
                        className="text-darkBlue-pastel font-semibold"
                        onClick={() => alert("Not avavliable")}
                      >
                        Watch Now
                      </span>
                    </button>
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-2">
                      {movieInfo.map((info, idx) => (
                        <p key={idx} className="text-darkBlue-pastel">
                          {info}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
