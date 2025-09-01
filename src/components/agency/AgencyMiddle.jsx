import React from "react";
import AgencyTeam from "./AgencyTeam";

const AgencyMiddle = () => {

  const team = [
    {
      title: "Account Executive",
      img: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
      name: "SOPHIE AUGER",
    },
    {
      title: "Business Lead",
      img: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
      name: "CARL GODBOUT",
    },
    {
      title: "Copywriter",
      img: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
      name: "Camille Brière",
    },
    {
      title: "Account Manager",
      img: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
      name: "Claire Robert",
    },
    {
      title: "EVP & Managing Director",
      img: "https://k72.ca/uploads/teamMembers/PLP2_640x960-640x960.jpg",
      name: "Pierre-Luc Paiement",
    },
    {
      title: "Graphic Designer",
      img: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
      name: "Olivier Duclos",
    },
    {
      title: "Account Executive",
      img: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
      name: "SOPHIE AUGER",
    },
    {
      title: "Business Lead",
      img: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
      name: "CARL GODBOUT",
    },
    {
      title: "Copywriter",
      img: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
      name: "Camille Brière",
    },
    {
      title: "Account Manager",
      img: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
      name: "Claire Robert",
    },
    {
      title: "EVP & Managing Director",
      img: "https://k72.ca/uploads/teamMembers/PLP2_640x960-640x960.jpg",
      name: "Pierre-Luc Paiement",
    },
    {
      title: "Graphic Designer",
      img: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
      name: "Olivier Duclos",
    },
  ];

    return (
      <div className="text-white bg-black w-full min-h-[170vh] mt-50">
          {team.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <AgencyTeam
                  title={item.title}
                  img={item.img}
                  name={item.name}
                />
              </div>
            );
          })}
      </div>
    );
};

export default AgencyMiddle;
