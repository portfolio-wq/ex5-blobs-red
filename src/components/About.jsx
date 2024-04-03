"use client";
import React from "react";

function About() {
  return (
    <div id="about" className=" overflow-hidden">
      <section>
        <div className="center mt-[50px] lg:w-[80%] md:mx-auto  md:flex lg:justify-around gap-3 bolb-content">
          <div className="w-fit  ">
            <div className="w-fit mb-5 flex flex-col gap-2 ">
              <h1 className="text-xl font-medium ">About Me</h1>
              <div className="w-full h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
              <div className="w-[70%] h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
            </div>

            <h2 className="text-lg w-fit">I&apos;m a Software Engineer</h2>
            <p className="md:w-[80%] mb-5  ">
              Passionate software engineer dedicated to crafting innovative
              solutions. Proficient in multiple programming languages, with
              expertise in both frontend and backend development. Strong
              advocate for collaboration and teamwork, with a commitment to
              continuous learning. Excited about leveraging technology to make a
              positive impact and solve complex challenges.
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-red-400  py-2 px-4 rounded-md font-medium mb-5">
              My cv
            </button>
          </div>

          {/* main */}
          <div className="grid gap-4 items-center relative   md:grid-cols-2 grid-cols-1 w-[100%] ">
            {/* left */}
            <div className="info-row bg-slate-700 p-2  rounded-md shadow-md h-full">
              <div className="h-full ">
                <h3 className="text-xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  About Details
                </h3>

                <ul className="pt-3">
                  <li>
                    Birthday :{" "}
                    <span className="text-gray-400">10 aout 1995</span>
                  </li>
                  <li>
                    Github :
                    <span className="text-gray-400">
                      <button>
                        <a href="https://github.com/" target="_blank">
                          My Github
                        </a>
                      </button>
                    </span>
                  </li>
                  <li>
                    Country : <span className="text-gray-400">Morroco</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Age : <span className="text-gray-400"> 24</span>
                  </li>
                  <li>
                    Email :{" "}
                    <span className="text-gray-400">test@gmail.com</span>
                  </li>
                  <li>
                    Phone : <span className="text-gray-400">+212 45454545</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className="info-row bg-slate-700 p-3  rounded-md shadow-md h-full ">
              <h3 className="text-xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                soft skills
              </h3>
              <ul className=" list-disc px-3 pt-3">
                <li className=" ">Clear communication</li>
                <li>Analytical problem-solving</li>
                <li>Adaptability and learning</li>
                <li>Innovative solutions</li>
                <li>Collaborative teamwork</li>
                <li>Attention to detail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
