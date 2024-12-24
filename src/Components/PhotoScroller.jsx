import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const PhotoScroller = () => {
    const [val, setVal] = useState(false);
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="w-full  bg-zinc-300  h-full flex justify-center items-center ">
          <div className="w-60 h-32 bg-zinc-500 relative image-container overflow-hidden flex ">
            <img
              className={`w-full h-full object-cover  rounded-md shrink-0 ${
                val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
              } transition-transform`}
              src="https://images.unsplash.com/photo-1440993443326-9e9f5aea703a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className={`w-full h-full object-cover  rounded-md shrink-0 ${
                val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
              } transition-transform`}
              src="https://images.unsplash.com/photo-1696281570303-8b6fb434135f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <span
              onClick={() => setVal(!val)}
              className=" absolute bottom-0 text-black-100  text-xs p-2 bg-[#dadada7b] rounded-full   left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <FaArrowRight size={".7em"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoScroller;
