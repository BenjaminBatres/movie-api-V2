import React from "react";
import SkeletonBox from "./SkeletonBox";

export default function MovieSkeletonCard({ movieCards }) {
  return Array(movieCards)
    .fill(0)
    .map((_, id) => (
      <div key={id}>
        <SkeletonBox width={"100%"} height={400} />
        <SkeletonBox width={"50%"} height={"1.2rem"} marginTop={16} />
        <div className="flex justify-between">
          <SkeletonBox width={"25%"} height={"1.2rem"} marginTop={8} />
          <SkeletonBox width={"20%"} height={"1.2rem"} marginTop={8} />
        </div>
      </div>
    ));
}
