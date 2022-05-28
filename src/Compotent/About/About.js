import React from "react";
import logo from "../../assets/pcparts.jpg";
import Summary from "../Summary/Summary";
import Reviewsall from "./Reviewsall";

const About = () => {
  return (
      <>
      <div class="py-20 bg-gray-200 rounded-xl my-20">
  <div class="grid grid-cols-1 sm:grid-cols-2  flex-col">
    <div className="m-20">
    <img src={logo } alt='' class="rounded-lg shadow-2xl mr-10"/>
    </div>
    <div className="m-20">
      <p class="py-6 text-4xl mt-10"><span className="text-violet-600 font-bold">Bios</span>
          <span className="text-blue-600 font-bold">PC</span></p>
          <p className="mt-10">
        Founded in 2001, BiosPC began selling PC components and helped popularize the PC-building movement, and in doing so, developed a cult following among PC and DIY enthusiasts. Since then, BiosPC Inc. is the leading tech-focused e-retailer in North America, with a global reach in Europe, South America, Asia Pacific and the Middle East. Today, millions of customers turn to BiosPC to shop for the latest PC components, consumer electronics, smart home and gaming products. BiosPC is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. BiosPC is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.
        </p>
    </div>
  </div>
</div>
    <Summary></Summary>
    <Reviewsall></Reviewsall>
    
    </>
  );
};

export default About;
