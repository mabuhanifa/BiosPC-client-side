import React from "react";
import logo from "../../assets/pcparts.jpg";
import Summary from "../Summary/Summary";

const About = () => {
  return (
      <>
      <div class="hero py-20 bg-gray-200 rounded-xl my-20">
  <div class="hero-content flex-col lg:flex-row">
    <img src={logo } alt='' class="w-96 rounded-lg shadow-2xl mr-10"/>
    <div>
      <p class="py-6 text-4xl"><span className="text-violet-600 font-bold">Bios</span>
          <span className="text-blue-600 font-bold">PC</span></p>
          <p>
        Founded in 2001, BiosPC began selling PC components and helped popularize the PC-building movement, and in doing so, developed a cult following among PC and DIY enthusiasts. Since then, BiosPC Inc. is the leading tech-focused e-retailer in North America, with a global reach in Europe, South America, Asia Pacific and the Middle East. Today, millions of customers turn to BiosPC to shop for the latest PC components, consumer electronics, smart home and gaming products. BiosPC is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. BiosPC is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.
        </p>
    </div>
  </div>
</div>
    {/* <div className="sm:flex justify-center items-center a-b-t mx-10 sm:mt-10">
      <div className="sm:w-full sm:ml-20 ">
        <img className="object-cover rounded" src={logo} alt="" />
      </div>
      <div className="m-10">
        <p className="text-4xl">
          <span className="text-violet-600 font-bold">Bios</span>
          <span className="text-blue-600 font-bold">PC</span>
        </p>
        <p className="mt-10">
        Founded in 2001, BiosPC began selling PC components and helped popularize the PC-building movement, and in doing so, developed a cult following among PC and DIY enthusiasts. Since then, BiosPC Inc. is the leading tech-focused e-retailer in North America, with a global reach in Europe, South America, Asia Pacific and the Middle East. Today, millions of customers turn to BiosPC to shop for the latest PC components, consumer electronics, smart home and gaming products. BiosPC is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. BiosPC is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.
        </p>
      </div>
    </div> */}
    <Summary></Summary>
    
    </>
  );
};

export default About;
