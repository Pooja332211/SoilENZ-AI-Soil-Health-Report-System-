import React from "react";

import {
  LoaderCircle,
  Leaf,
  Database,
  FileSearch,
  BarChart3,
} from "lucide-react";

function LoadingScreen() {

  const steps = [

    {
      icon: <FileSearch size={34} />,
      title: "Analyzing Soil Receipt",
    },

    {
      icon: <Database size={34} />,
      title: "Extracting Nutrient Data",
    },

    {
      icon: <Leaf size={34} />,
      title: "Generating AI Insights",
    },

    {
      icon: <BarChart3 size={34} />,
      title: "Building Enterprise Report",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-14 mt-10">

      {/* TOP */}

      <div className="flex flex-col items-center justify-center">

        <div className="bg-[#14532d] p-8 rounded-full shadow-xl">

          <LoaderCircle
            size={90}
            className="text-white animate-spin"
          />

        </div>

        <h1 className="text-5xl font-black text-[#14532d] mt-10">

          Generating AI Soil Report

        </h1>

        <p className="text-2xl text-gray-500 mt-4">

          Please wait while SoilENZ AI processes your report

        </p>

      </div>

      {/* STEPS */}

      <div className="grid grid-cols-2 gap-8 mt-16">

        {steps.map((item, index) => (

          <div
            key={index}
            className="bg-[#f5f7f5] rounded-3xl p-8 border border-green-100 flex items-center gap-6 shadow-sm"
          >

            <div className="bg-[#14532d] text-white p-5 rounded-2xl">

              {item.icon}

            </div>

            <div>

              <h2 className="text-2xl font-black text-[#14532d]">

                {item.title}

              </h2>

              <p className="text-lg text-gray-500 mt-2">

                AI Processing Active

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* PROGRESS */}

      <div className="mt-16">

        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">

          <div className="h-6 bg-gradient-to-r from-[#14532d] to-green-500 rounded-full animate-pulse w-[85%]"></div>

        </div>

        <div className="flex justify-between mt-4 text-lg text-gray-500">

          <span>Initializing AI Engine</span>

          <span>85% Completed</span>

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;