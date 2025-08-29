import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Loader = () => {

    const currentPath = useLocation().pathname;

  const LoaderRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.to(LoaderRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      duration: 0.2,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".stair", {
      y: "100%",
      duration: 0.2,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(LoaderRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });
  },[currentPath]);

  return (
    <div ref={LoaderRef} className="h-screen w-full fixed z-10">
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
};

export default Loader;
