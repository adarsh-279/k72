import React from "react";
import WorkPage from "../components/works/WorkPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Work = () => {
  const workImg = [
    {
      img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      img1: "https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".work", {
      height: "200px",
      stagger: {
        amount: 0.99,
      },
      scrollTrigger: {
        trigger: ".workParent",
        start: "top 70%",
        end: "top -350%",
        scrub: true,
      },
    });
  });

  return (
    <div className="h-screen w-full text-black p-3">
      <div className="w-full pt-75">
        <h2 className="text-[13vw] font-[l500]">WORK</h2>
      </div>
        <div className="workParent w-full h-120 grid grid-cols-1 gap-2 mb-5 -mt-20">
          {workImg.map((item, index) => {
            return (
              <div
                key={index}
                className="work w-full h-120 flex flex-row gap-2"
              >
                <WorkPage
                  img1={item.img1}
                  img2={item.img2}
                />
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Work;
