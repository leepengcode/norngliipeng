import React from "react";
import { SkillBar } from "react-skills";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  const value = 0.66;
  return (
    <div className="h-screen">
      <div>
        <div>
          <h1 className="text-gray-400 text-center uppercase">
            Technical and professional
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-center font-bold text-4xl text-cyan-650 uppercase">
            My Skills
          </h1>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-2  mt-10 mb-10 ">
          <div className="">
            <h1 className="font-bold text-2xl text-center">Technical Skills</h1>
            <div className=" gap-10 mt-12 mr-32">
              <div className="">
                <SkillBar name="HTML" level={80} color="black" />
              </div>
              <div className="mt-9">
                <SkillBar name="ReactJS" level={70} color="orange" />
              </div>
              <div className="mt-9">
                <SkillBar name="JavaScript" level={60} color="cyan" />
              </div>
              <div className="mt-9">
                <SkillBar name="PHP" level={90} color="blue" />
              </div>
              <div className="mt-9">
                <SkillBar name="NodeJs" level={70} color="red" />
              </div>
              <div className="mt-9">
                <SkillBar name="Flutter" level={90} color="green" />
              </div>
            </div>
          </div>
          <div className="w-[100%] ">
            <h1 className="font-bold text-2xl text-center">
              Professional Skills
            </h1>
            <div className="grid grid-cols-2 gap-10 mt-11 mr-32">
              <div className="w-36 h-36">
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
                <h2 className="text-center">Team work</h2>
              </div>
              <div className="w-36 h-36">
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}% `}
                />
                <h2 className="text-center">Creativity</h2>
              </div>
              <div className="w-36 h-36">
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
                <h2 className="text-center">Project Management</h2>
              </div>
              <div className="w-36 h-36">
                <CircularProgressbar
                  value={`${value}`}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
                <h2 className="text-center">Work commitments</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
