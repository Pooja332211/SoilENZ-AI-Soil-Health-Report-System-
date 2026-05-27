import React from "react";

import {
  GraduationCap,
  BrainCircuit,
  Leaf,
  Globe2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

function PresentationSlide() {

  const points = [

    {
      title: "AI Soil Intelligence",
      icon: <BrainCircuit size={42} />,
    },

    {
      title: "OCR Report Extraction",
      icon: <ShieldCheck size={42} />,
    },

    {
      title: "Carbon Credit Analytics",
      icon: <Globe2 size={42} />,
    },

    {
      title: "Precision Farming Insights",
      icon: <Leaf size={42} />,
    },

    {
      title: "Enterprise Dashboards",
      icon: <BarChart3 size={42} />,
    },

    {
      title: "Multi-page PDF Reports",
      icon: <GraduationCap size={42} />,
    },
  ];

  return (

    <div className="bg-gradient-to-br from-[#14532d] to-[#1f8b45] text-white rounded-3xl shadow-2xl p-14">

      {/* TOP */}

      <div className="text-center">

        <h1 className="text-7xl font-black leading-tight">

          SoilENZ AI Platform

        </h1>

        <p className="text-3xl mt-6 opacity-95">

          AI Powered Soil Intelligence & Carbon Credit System

        </p>

      </div>

      {/* CENTER */}

      <div className="grid grid-cols-3 gap-8 mt-16">

        {points.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 rounded-3xl p-8 text-center backdrop-blur-sm"
          >

            <div className="flex justify-center mb-6">

              {item.icon}

            </div>

            <h2 className="text-2xl font-black">

              {item.title}

            </h2>

          </div>

        ))}

      </div>

      {/* BOTTOM */}

      <div className="mt-16 bg-white/10 rounded-3xl p-10">

        <div className="grid grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-5xl font-black leading-tight">

              MCA Major Project

            </h2>

            <p className="text-2xl mt-6 opacity-95 leading-relaxed">

              Enterprise-grade agricultural intelligence platform
              integrating OCR, AI analytics, sustainability insights,
              carbon intelligence, and precision farming systems.

            </p>

          </div>

          <div className="text-center">

            <div className="text-9xl font-black">

              AI

            </div>

            <p className="text-3xl mt-4">

              Agriculture Intelligence

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PresentationSlide;