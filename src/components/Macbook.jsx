import React, {useState} from "react";
import { macbookModels } from "../data/index";

const Macbook = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const handleSelectedChip = (index) => {
    setSelectedChip(index);
  }
  return (
    <div className="flex flex-col items-center justify-around bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Select your Macbook
      </h1>
      <div className="flex">
        {macbookModels.map((mb, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border ${
              index === 0 ? "rounded-l-xl" : "rounded-r-xl"
            } 
            ${ index === selectedChip ? "border-2 cursor-pointer border-blue-600" : "border-gray-800"}`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              With {mb.chip} 
            </span>
            <span className="2xl:text-lg xl:text-sm text-xs text-gray-600">
              {mb.price}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col 2xl:p-4 md:items-center items-center">
        <div className="w-80 h-64 2xl:mb-0 mb-8">
          <img className="2xl:w-72 xl:w-52 w-48 h-fit 2xl:mt-0 sm:mt-6" src="images/macbook-air-gold-m2.jpg" alt="MacBook" />
          <span className="2xl:w-72 xl:w-52 w-48 font-medium text-gray-800 mb-2 text-center md:text-left">Gold</span>
          <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
            <button className="2xl:w-6 sm:w-5 w-4 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
            <button className="2xl:w-6 sm:w-5 w-4 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
            <button className="2xl:w-6 sm:w-5 w-4 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
