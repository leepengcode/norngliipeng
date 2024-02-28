import React from "react";
import { SiVorondesign } from "react-icons/si";
import ReactiveButton from "reactive-button";
import { GrSystem } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="h-screen w-[85%] mx-auto">
      <div>
        <div>
          <h1 className="text-gray-400 text-center uppercase">
            What i will do for you
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-center font-bold text-4xl text-cyan-650 uppercase">
            Our Services
          </h1>
        </div>
        <div className="w-full mt-10">
          <div className=" grid grid-cols-3 gap-10">
            <div className="bg-slate-800 text-center px-4 py-4">
              <div className="w-52 h-60 mt-4 border-cyan-650 rounded-full bg-black border-2 mx-auto">
                <SiVorondesign
                  size={160}
                  color="cyan"
                  className="mx-auto mt-11"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-3xl">Graphic Designer</h1>
              </div>
              <div className="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis incidunt quasi debitis, ipsam eaque eius, impedit
                  exercitationem beatae minus architecto sed nihil repellat. Quo
                  animi laboriosam eos numquam corrupti? Aliquid?
                </p>
              </div>
              <div className="mt-8">
                <ReactiveButton
                  shadow
                  color="teal"
                  width={180}
                  height={40}
                  idleText="Learn More"
                />
              </div>
            </div>
            <div className="bg-slate-800 text-center px-4 py-4">
              <div className="w-52 h-60 mt-4 border-cyan-650 rounded-full bg-black border-2 mx-auto">
                <GrSystem size={160} color="cyan" className="mx-auto mt-11" />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-3xl">POS System</h1>
              </div>
              <div className="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis incidunt quasi debitis, ipsam eaque eius, impedit
                  exercitationem beatae minus architecto sed nihil repellat. Quo
                  animi laboriosam eos numquam corrupti? Aliquid?
                </p>
              </div>
              <div className="mt-8">
                <ReactiveButton
                  shadow
                  color="teal"
                  width={180}
                  height={40}
                  idleText="Learn More"
                />
              </div>
            </div>
            <div className="bg-slate-800 text-center px-4 py-4">
              <div className="w-52 h-60 mt-4 border-cyan-650 rounded-full bg-black border-2 mx-auto">
                <FaLaptopCode
                  size={160}
                  color="cyan"
                  className="mx-auto mt-11"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-3xl">App Development</h1>
              </div>
              <div className="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis incidunt quasi debitis, ipsam eaque eius, impedit
                  exercitationem beatae minus architecto sed nihil repellat. Quo
                  animi laboriosam eos numquam corrupti? Aliquid?
                </p>
              </div>
              <div className="mt-8">
                <ReactiveButton
                  shadow
                  color="teal"
                  width={180}
                  height={40}
                  idleText="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
