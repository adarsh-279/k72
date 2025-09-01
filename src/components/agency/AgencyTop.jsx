import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AgencyTop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const topOne = useRef(null);
  const topTwo = useRef(null);

  const images = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top -4%",
        end: "top -190%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (e) {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * images.length);
          } else {
            imageIndex = images.length - 1;
          }
          imageRef.current.src = images[imageIndex];
        },
      },
    });

    gsap.from(topOne.current, {
      opacity: 0,
      y:-20,
      stagger: {
        amount: 0.9,
      },
      scrollTrigger: {
        trigger: topOne.current.querySelector('h1'),
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
    });

    gsap.from(topTwo.current, {
      opacity: 0,
      y:-20,
      stagger: {
        amount: 0.9,
      },
      scrollTrigger: {
        trigger: topTwo.current,
        start: "top 100%",
        end: "top 80%",
        scrub: true,
      },
    });
  });

  return (
    <div className="py-1">
      <div
        ref={imageDivRef}
        className="absolute h-[20vw] w-[15vw] overflow-hidden rounded-3xl top-47 left-114"
      >
        <img
          ref={imageRef}
          className="h-full w-full object-cover"
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          alt="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
        />
      </div>
      <div className="relative font-[l500] text-black">
        <div className="pt-104">
          <h1 className="text-[20vw] leading-[17vw] text-center">
            SEVEN7Y <br /> TWO
          </h1>
        </div>
        <div className="pl-[40%] mt-20">
          <p className="text-6xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
            inquisitive and open-minded, and we make sure creativity crowds out
            ego from every corner. A brand is a living thing, with values, a
            personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </p>
        </div>
      </div>
      <div className="h-screen pt-70 text-black flex flex-col pl-40 font-[l500]">
        <div ref={topOne} className="flex text-xl gap-90">
          <div>
            <h1>Expertise</h1>
          </div>
          <div>
            <h1>
              Stratergy <br /> Advertising <br /> Branding <br /> Design <br />
              Content
            </h1>
          </div>
        </div>
        <div ref={topTwo} className="flex text-xl gap-10 pt-30 pb-80">
          <p className="w-[30%]">
            Our Work_ Born in curiosity, raised by <br /> dedication and fed
            with a steady diet of <br /> creativity.
          </p>
          <p className="w-[35%]">
            Our Creative_ Simmering in an environment <br /> where talent can
            come to a full boil. <br /> Encouraged to become the best versions
            of <br /> ourselves.
          </p>
          <p className="w-[25%]">
            Our Culture_ We’re open to <br /> each other. Period. The team
            <br /> works together to create a <br /> space that makes us proud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyTop;
