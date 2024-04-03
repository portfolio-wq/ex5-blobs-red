"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import proje2 from "../../public/projet1.jpg";
import proje7 from "../../public/projet7.jpg";

import Image from "next/image";
import Blob from "./blob/Blob";
function Projects() {
  const projects = [
    {
      id: 0,
      name: "first project",
      place: "Rabat, N 02 Street Sidi Kecem",
      images: [proje2, proje2],
      descr:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur reiciendis eum laborum asperiores rerum quae ad rem exercitationem, eveniet tenetur enim quam mollitia officiis inventore quis? Iusto, accusamus quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos delectus nam consequuntur.",
      list: ["list1", "list2", "list3"],
      tools: ["Nextjs", "Django"],
    },
    {
      id: 1,
      name: "second project",
      place: "Rabat, N 02 Street Sidi Kecem",
      images: [proje7, proje7],
      descr:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur reiciendis eum laborum asperiores rerum quae ad rem exercitationem, eveniet tenetur enim quam mollitia officiis inventore quis? Iusto, accusamus quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos delectus nam consequuntur.",
      list: ["list1", "list2", "list3"],
      tools: ["javascript", "mongo DB", "Reactjs"],
    },
    {
      id: 2,
      name: "third project",
      place: "Rabat, N 02 Street Sidi Kecem",
      images: [proje2, proje2],
      descr:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur reiciendis eum laborum asperiores rerum quae ad rem exercitationem, eveniet tenetur enim quam mollitia officiis inventore quis? Iusto, accusamus quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos delectus nam consequuntur.",
      list: ["list1", "list2", "list3"],
      tools: ["HTML", "CSS"],
    },
  ];
  return (
    <div className=" overflow-hidden" id="projects">
      <section className=" z-20 pt-[100px] ">
        <div className="center mt-[50px] lg:w-[80%] md:mx-auto  flex justify-around gap-3 flex-col ">
          <Blob />

          <div className="w-fit  ">
            <div className="w-fit mb-5 flex flex-col gap-2 ">
              <h1 className="text-xl font-medium ">Projects</h1>
              <div className="w-full h-[3px]  bg-gradient-to-r from-fuchsia-600 to-purple-600"></div>
              <div className="w-[70%] h-[3px]  bg-gradient-to-r from-fuchsia-600 to-purple-600"></div>
            </div>

            {/* <h2 className="text-lg w-fit">I&apos;m a Software Engineer</h2> */}
            <p className="md:w-[80%] mb-5  ">
              I have worked on numerous projects, but these specific ones have
              significantly impacted my career, teaching me invaluable lessons.
            </p>
          </div>

          {/* main */}
          <div className="edu-exp padd-15 flex gap-4 flex-wrap md:flex-nowrap">
            {/*  */}
            {projects.map((project, i) => (
              <div
                key={i}
                className="experience w-fit bg-gray-700 p-7 rounded-md flex flex-col "
              >
                <div className=" rounded-md overflow-hidden">
                  <Carousel showThumbs={false}>
                    {project.images.map((img, i) => (
                      <div key={i}>
                        <Image src={img} alt="" />
                      </div>
                    ))}
                  </Carousel>
                  <p className="md:mb-6 text-xl ">{project.name}</p>
                </div>

                <br />
                <div className="bg-gray-600 p-2 rounded-md">
                  <div>
                    <p className=" font-medium ">Description:</p>
                    <br />
                    <p>{project.descr}</p>
                    <br />
                    <p className="font-medium">Steps:</p>
                    <br />
                    <ul className="pl-5">
                      {project.list.map((list, i) => (
                        <li key={i} className=" list-disc">
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-[3px] w-[50%]  bg-gradient-to-r from-fuchsia-600 to-purple-600 self-center mt-5"></div>
                <div className="flex w-full justify-between flex-col pt-5 items-center">
                  <div className="font-medium mb-5 text-lg">Tools</div>
                  <div className="flex justify-center gap-2">
                    {project.tools.map((tool, i) => (
                      <div key={i} className="  bg-gray-800 p-2 rounded-md">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>
    </div>
  );
}

export default Projects;
