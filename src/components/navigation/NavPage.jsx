import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const NavPage = () => {

  const LoadingRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.from(".stairs", {
        height: 0,
        duration: 1,
        stagger: {
          amount: -0.3,
        },
      });

      tl.from(LoadingRef.current, {
  opacity:0
      })
      
      tl.from('.link', {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.3
        }
      })
    },
  );

  return (
    <div
      ref={LoadingRef}
      className="hidden h-screen w-screen absolute bg-black overflow-hidden"
    >
      <div className="h-screen w-full absolute">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div className="w-full relative flex flex-col justify-between">
        <div className="w-full h-15 p-2 flex fixed top-0 items-center justify-between z-5 ">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div className="h-40 w-30 relative">
            <div className="h-35 w-0.5 bg-white absoulte mt-16 -ml-2 -rotate-45 origin-top z-10"></div>
            <div className="h-35 w-0.5 bg-white absolute rotate-45 origin-top -mt-35 ml-23 z-10"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="link origin-top w-full font-[l500] flex flex-col items-center justify-center mt-30 border-t-1 leading-28 relative">
            <h1 className="text-[8vw] pt-3 text-center">WORK</h1>
            <div className="moveLink absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex items-center">
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEE EVERYTHING&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEE EVERYTHING&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEE EVERYTHING&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEE EVERYTHING&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top w-full font-[l500] flex flex-col items-center justify-center border-t-1 leading-28 relative">
            <h1 className="text-[8vw] pt-3 text-center">AGENCY</h1>
            <div className="moveLink absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex items-center">
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;KNOW US&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;KNOW US&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;KNOW US&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;KNOW US&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top w-full font-[l500] flex flex-col items-center justify-center border-t-1 leading-28 relative">
            <h1 className="text-[8vw] pt-3 text-center">CONTACT</h1>
            <div className="moveLink absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex items-center">
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEND US A FAX&nbsp;
                </h1>
                <FaHeart className="w-25 h-25" />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEND US A FAX&nbsp;
                </h1>
                <FaHeart className="w-25 h-25" />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEND US A FAX&nbsp;
                </h1>
                <FaHeart className="w-25 h-25" />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;SEND US A FAX&nbsp;
                </h1>
                <FaHeart className="w-25 h-25" />
              </div>
            </div>
          </div>
          <div className="link origin-top w-full font-[l500] flex flex-col items-center justify-center border-t-1 border-b-1 leading-28 relative">
            <h1 className="text-[8vw] pt-3 text-center">WORK</h1>
            <div className="moveLink absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex items-center">
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;READ ARTICLES&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;READ ARTICLES&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;READ ARTICLES&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
                <h1 className="text-[8vw] whitespace-nowrap pt-3">
                  &nbsp;READ ARTICLES&nbsp;
                </h1>
                <img
                  className="h-25 w-55 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavPage;
