import React from "react";

const UserCard = () => {
  return (
    <div className="h-[30rem] w-[20rem] bg-blue-400 rounded-2xl overflow-hidden">
      <div className="w-full h-[10rem] bg-red-400 rounded-t-2xl relative">
        <img className='h-full aspect-square rounded-full object-cover object-center absolute translate-x-[50%] translate-y-[25%] border-4 border-red-400 p-1' 
        src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/25850/Avengers-Age-Of-Ultron-Thor-Chris-Hemsworth-iphone-wallpaper-ilikewallpaper_com_640.jpg" alt="" />
      </div>
    </div>
  );
};

export default UserCard;
