"use client";
import React from "react";
import Blob2 from "./blob/Blob2";
import Blob from "./blob/Blob";
import Blob3 from "./blob/Blob3";
import Bigblob2 from "./blob/Bigblob2";

function Experience() {
  const experience = [
    {
      date: "Oct - Dec 2023",
      title: "Web development and AWS program.(Remote internship)",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus possimus suscipit. Quos fugit minus fuga illum maxime voluptatum reprehenderit, ipsam consequatur corrupti debitis saepe sit in, a unde omnis.",
    },
    {
      date: "Nov 2022 - Feb 2023",
      title: "Web Development Intern at RadicalX",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.",
    },
    {
      date: "Mar 2021 - Aug 2021",
      title: "IOTECH · Internship",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.",
    },
  ];
  const education = [
    {
      date: "2017 - 2020",
      title: "Application Design And Development Engineering",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.",
    },
    {
      date: "2017 - 2020",
      title: "Diplome In Networking",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.",
    },
    {
      date: "2016 - 2017",
      title: "Baccalaureat in experimental science",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, sint blanditiis! Mollitia rem error alias molestias nobis vel ullam recusandae illo explicabo asperiores. Eligendi nesciunt laudantium consectetur accusantium obcaecati sunt.",
    },
  ];
  return (
    <div id="experience" className=" ">
      <section className=" overflow-hidden">
        <div className="center mt-[50px] lg:w-[80%] md:mx-auto  flex justify-around gap-3 flex-col ">
          <Blob3 />
          <Bigblob2 />
          <div className="w-fit  ">
            <div className="w-fit mb-5 flex flex-col gap-2 ">
              <h1 className="text-xl font-medium ">Experince and Education</h1>
              <div className="w-full h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
              <div className="w-[70%] h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
            </div>

            {/* <h2 className="text-lg w-fit">I&apos;m a Software Engineer</h2> */}
            <p className="md:w-[80%] mb-5  ">
              Tech-savvy problem solver with a knack for crafting cutting-edge
              software solutions. Proficient in frontend and backend
              development, committed to innovation and collaboration.
            </p>
          </div>

          {/* main */}
          <div className="edu-exp padd-15 flex gap-4 flex-wrap md:flex-nowrap">
            {/*  */}
            <div className="experience w-fit bg-gray-700 p-7 rounded-md">
              <h2 className="mb-6 text-xl">Experience</h2>
              <div className="box relative  rounded-7 after:bg-gradient-to-r from-rose-400 to-red-500">
                {experience.map((item, i) => (
                  <div key={i} className="boxs relative flex items-start mb-6 ">
                    <div className="icon relative">
                      <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2 z-10"></div>
                    </div>
                    <div>
                      <span className="text-xs">{item.date}</span>
                      <h3 className="text-medium font-bold lg:text-lg ">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm">{item.descr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="education w-fit bg-gray-700 p-7 rounded-md ">
              <h2 className="mb-6 text-xl">Education</h2>
              <div className="box relative  rounded-7 after:bg-gradient-to-r from-rose-400 to-red-500">
                {education.map((item, i) => (
                  <div key={i} className="boxs relative flex items-start mb-6">
                    <div className="icon relative">
                      <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2 z-10"></div>
                    </div>
                    <div>
                      <span className="text-xs">{item.date}</span>
                      <h3 className="text-medium font-bold lg:text-lg ">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm">{item.descr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
