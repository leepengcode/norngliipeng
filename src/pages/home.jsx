import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGitlab } from "react-icons/fi";
import Zoom from "react-reveal/Bounce";
import Flash from "react-reveal/Flash";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from "react-reveal/Swing";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ReactiveButton from "reactive-button";
import profile from "../assets/1.jpg";

const home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "App Developer", "System Engineering"],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 100,
  });

  return (
    <div className="w-[75%] h-screen mx-auto">
      <div className=" mt-20 flex justify-between items-center">
        <div className="w-[50%]">
          <Zoom>
            <h1 className="uppercase font-bold text-4xl ">
              Hi! I'm Norng LiiPeng
            </h1>
          </Zoom>

          <h1 className=" mt-5 uppercase font-bold text-3xl  ">
            I'm a <span className="text-cyan-650">{text}</span>
            <span>
              <Cursor cursorStyle="|" cursorColor="red" />
            </span>
          </h1>
          <Flash>
            <p className=" w-[67%] mt-5">
              A Frontend and Backend developer focused Web Developer building
              the Frontend of Websites and Web Applications that leads to the
              success of the overall product.
            </p>
          </Flash>
          <div className="flex justify-start gap-7 mt-10">
            <div className="">
              <h1 className="font-bold">Email : </h1>
              <a
                href="mailto:norngpeng@gmail.com"
                target="_blank"
                className="hover:text-cyan-650"
              >
                Norngliipeng@gmail.com
              </a>
            </div>
            <div>
              <h1 className="font-bold">Outlook : </h1>
              <a
                href="mailto:norngpeng@gmail.com"
                target="_blank"
                className="hover:text-cyan-650"
              >
                info.liipeng@outlook.com
              </a>
            </div>
          </div>
          <div className="flex justify-start gap-7 mt-3">
            <div className="">
              <ReactiveButton
                shadow
                color="teal"
                width={180}
                idleText="Download CV"
              />
            </div>
            <div>
              <ReactiveButton
                shadow
                color="teal"
                width={180}
                idleText="Hire Me"
              />
            </div>
          </div>
          <Reveal>
            <div className="flex justify-start gap-7 mt-16 ">
              <FaFacebookF
                size={30}
                className="hover:animate-bounce hover:text-blue-500 p-1 border-2 border-cyan-650"
              />
              <FaInstagram
                size={30}
                className="hover:animate-bounce hover:text-orange-400 p-1 border-2 border-cyan-650"
              />
              <FaXTwitter
                size={30}
                className="hover:animate-bounce hover:text-gray-600 p-1 border-2 border-cyan-650"
              />
              <FaGithub
                size={30}
                className="hover:animate-bounce hover:text-lime-300 p-1 border-2 border-cyan-650"
              />
              <FiGitlab
                size={30}
                className="hover:animate-bounce hover:text-amber-600 p-1 border-2 border-cyan-650"
              />
              <FaTelegramPlane
                size={30}
                className="hover:animate-bounce hover:text-cyan-650 p-1 border-2 border-cyan-650"
              />
            </div>
          </Reveal>
        </div>
        <div>
          <LightSpeed>
            <img
              src={profile}
              alt="profile"
              className="size-96 rounded-xl border-2 border-cyan-650"
            />
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};

export default home;
