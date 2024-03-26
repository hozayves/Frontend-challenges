import React from "react";

function Profile({name, location, bio}) {
  return (
    <div className="text-white flex flex-col items-center justif-start gap-1 sm:gap-3">
      <div className="rounded-full w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]">
        <img src="./avatar-jessica.jpeg" alt="" className="rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-2 sm:gap-1">
        <h2 className="leading-none font-medium sm:text-2xl text-lg">{name}</h2>
        <p className="font-medium text-green text-lg">{location}</p>
      </div>
      <div className="leading-none text-center italic mt-3 text-sm">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
