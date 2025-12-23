import React from "react";

const Allow = ({ image, text1, text2 }) => {
  return (
    <div className="flex items-center gap-4 bg-transparent w-full sm:w-[250px]">
      <div className="flex items-center justify-center bg-[#4d61ff] h-[70px] w-[70px] rounded-full shrink-0">
        <img src={image} alt="" className="w-[30px]" />
      </div>
      <div className="text-white flex flex-col">
        <h3 className="text-[20px] font-semibold">{text1}</h3>
        <p className="text-[15px] font-light">{text2}</p>
      </div>
    </div>
  );
};

export default Allow;
