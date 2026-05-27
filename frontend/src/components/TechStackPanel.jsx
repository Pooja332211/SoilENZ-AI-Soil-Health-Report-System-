import React from "react";

import {
  Code2,
  Database,
  Cpu,
  Globe,
  Server,
  FileCode2,
  BrainCircuit,
  Layers3,
} from "lucide-react";

function TechStackPanel() {

  const stack = [

    {
      category: "Frontend",
      tech: "React + Tailwind CSS",
      icon: <Code2 size={42} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      category: "Backend",
      tech: "FastAPI + Python",
      icon: <Server size={42} />,
      color: "from-green-500 to-green-700",
    },

    {
      category: "Database",
      tech: "PostgreSQL",
      icon: <Database size={42} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      category: "OCR Engine",
      tech: "EasyOCR + OpenCV",
      icon: <FileCode2 size={42} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      category: "AI/ML",
      tech: "XGBoost + Analytics",
      icon: <BrainCircuit size={42} />,
      color: "from-pink-500 to-pink-700",
    },

    {
      category: "Visualization",
      tech: "Recharts + PDF",
      icon: <Layers3 size={42} />,
      color: "from-orange-400 to-orange-600",
    },

    {
      category: "Deployment",
      tech: "Docker + AWS",
      icon: <Globe size={42} />,
      color: "from-emerald-500 to-emerald-700",
    },

    {
      category: "Processing",
      tech: "AI Pipeline Engine",
      icon: <Cpu size={42} />,
      color: "from-lime-500 to-green-600",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Technology Stack

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Full Stack AI Agricultural Intelligence Architecture

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          ENTERPRISE READY

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-8">

        {stack.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl`}
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <p className="text-xl opacity-90">

                  {item.category}

                </p>

                <h2 className="text-3xl font-black mt-4">

                  {item.tech}

                </h2>

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

          Architecture Intelligence

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          SoilENZ combines modern frontend engineering, scalable backend
          architecture, OCR extraction systems, AI analytics pipelines,
          enterprise visualization frameworks, and sustainability intelligence
          into a unified precision agriculture platform.

        </p>

      </div>

    </div>
  );
}

export default TechStackPanel;