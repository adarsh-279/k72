import React, { useState } from "react";

const WorkPage = ({ imgData }) => {
  return (
    <div className="w-full h-120 relative overflow-hidden hover:rounded-4xl transition-all duration-200 bg-blue-400">
      <img className="object-cover h-full w-full" src={imgData} alt="Image" />
      <div className="opacity-0 hover:opacity-100 transition-all duration-200 absolute h-full w-full top-0 left-0 text-white flex items-center justify-center bg-black/20">
        <h2 className="text-6xl px-5 py-2 border-1 rounded-full font-[l500] leading-9 pt-4">
          VIEW PROJECT
        </h2>
      </div>
    </div>
  );
};

export default WorkPage;
