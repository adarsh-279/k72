import React from "react";

const AgencyTeam = (props) => {
  return (
    <div className="group w-full h-20 text-white hover:text-black border-t-1 border-b-1 hover:border-t-0 hover:border-b-0 border-white relative flex flex-row justify-between p-2 hover:bg-[#d3fd50]">
      <div>
        <h1 className="font-[l500]">{props.title}</h1>
      </div>
      <div className="relative h-140 w-95 -top-60 -left-30 z-50 overflow-hidden rounded-4xl opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        <img
          className="absolute h-full w-full object-cover"
          src={props.img}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl font-[l500] leading-10 pt-3 pb-1">
          {props.name}
        </h1>
      </div>
    </div>
  );
};

export default AgencyTeam;
