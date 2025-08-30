import React from "react";
import WorkPage from "../components/works/WorkPage";

const Work = () => {
  const workImg = [
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
  ];

  return (
    <div className="h-screen w-full text-black p-3">
      <div className="w-full pt-75">
        <h2 className="text-[13vw] font-[l500]">WORK</h2>
      </div>
      <div className="w-full h-600 -mt-20">
        <div className="w-full h-120 grid grid-cols-2 gap-2 mb-5">
          {workImg.map((item, index) => {
            return <WorkPage imgData={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
