import React from "react";

import {
  BrainCircuit,
  FileSearch,
  BarChart3,
  Globe2,
  ShieldCheck,
  Leaf,
  FileDown,
  Database,
} from "lucide-react";

function ProjectHighlights() {

  const highlights = [

    {
      title: "AI Soil Intelligence",
      description:
        "Advanced AI-driven soil analysis for nutrient and sustainability insights.",
      icon: <BrainCircuit size={44} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      title: "OCR Extraction Engine",
      description:
        "Automated extraction of soil laboratory parameters from uploaded reports.",
      icon: <FileSearch size={44} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "Enterprise Analytics",
      description:
        "Professional dashboards, charts, and multi-page report intelligence.",
      icon: <BarChart3 size={44} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Carbon Credit Intelligence",
      description:
        "Sustainability analysis and regenerative agriculture insights.",
      icon: <Globe2 size={44} />,
      color: "from-emerald-500 to-emerald-700",
    },

    {
      title: "AI Verification",
      description:
        "AI confidence scoring and precision recommendation systems.",
      icon: <ShieldCheck size={44} />,
      color: "from-orange-400 to-orange-600",
    },

    {
      title: "Precision Farming",
      description:
        "Actionable agricultural strategies for optimized productivity.",
      icon: <Leaf size={44} />,
      color: "from-lime-500 to-green-600",
    },

    {
      title: "Premium PDF Export",
      description:
        "Enterprise-grade printable agricultural intelligence reports.",
      icon: <FileDown size={44} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      title: "Scalable Architecture",
      description:
        "FastAPI + React scalable enterprise-ready system architecture.",
      icon: <Database size={44} />,
      color: "from-pink-500 to-pink-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Project Highlights

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Enterprise AI Agricultural Intelligence Platform Features

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          MCA MAJOR PROJECT

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-8">

        {highlights.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl`}
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <h2 className="text-3xl font-black">

                  {item.title}

                </h2>

                <p className="text-lg opacity-95 mt-5 leading-relaxed">

                  {item.description}

                </p>

              </div>

              <div>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SUMMARY */}

      <div className="mt-12 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          Platform Overview

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          SoilENZ is an AI-powered agricultural intelligence platform
          designed to automate soil analysis, nutrient interpretation,
          sustainability evaluation, carbon intelligence, and enterprise
          report generation using OCR, AI analytics, and precision
          agriculture technologies.

        </p>

      </div>

    </div>
  );
}
export default ProjectHighlights;