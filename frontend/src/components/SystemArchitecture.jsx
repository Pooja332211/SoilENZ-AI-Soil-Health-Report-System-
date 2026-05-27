import React from "react";

import {
  UploadCloud,
  ScanSearch,
  BrainCircuit,
  BarChart3,
 FileDown,
  Database,
} from "lucide-react";

function SystemArchitecture() {

  const flow = [

    {
      title: "Upload Receipt",
      description:
        "User uploads soil laboratory report.",
      icon: <UploadCloud size={42} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "OCR Extraction",
      description:
        "AI OCR extracts nutrient parameters.",
      icon: <ScanSearch size={42} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      title: "AI Intelligence",
      description:
        "Machine learning analyzes soil health.",
      icon: <BrainCircuit size={42} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Analytics Engine",
      description:
        "Enterprise dashboards and insights generated.",
      icon: <BarChart3 size={42} />,
      color: "from-orange-400 to-orange-600",
    },

    {
      title: "Database Storage",
      description:
        "Results stored securely for future analysis.",
      icon: <Database size={42} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      title: "PDF Export",
      description:
        "Premium enterprise report generated.",
      icon: <FileDown size={42} />,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            SoilENZ System Architecture

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            AI-Powered Agricultural Intelligence Workflow

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          FULL STACK PIPELINE

        </div>

      </div>

      {/* FLOW */}

      <div className="grid grid-cols-3 gap-8">

        {flow.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl relative overflow-hidden`}
          >

            {/* NUMBER */}

            <div className="absolute top-5 right-5 text-6xl font-black opacity-20">

              {index + 1}

            </div>

            {/* CONTENT */}

            <div className="relative z-10">

              <div className="mb-6">

                {item.icon}

              </div>

              <h2 className="text-3xl font-black">

                {item.title}

              </h2>

              <p className="text-lg mt-4 opacity-95 leading-relaxed">

                {item.description}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* STACK */}

      <div className="mt-12 bg-[#f5f7f5] rounded-3xl p-10 border border-green-100">

        <h2 className="text-4xl font-black text-[#14532d] mb-8">

          Technology Stack

        </h2>

        <div className="grid grid-cols-4 gap-6">

          <StackCard
            title="Frontend"
            value="React + Tailwind"
          />

          <StackCard
            title="Backend"
            value="FastAPI"
          />

          <StackCard
            title="OCR"
            value="EasyOCR"
          />

          <StackCard
            title="AI Engine"
            value="ML Analytics"
          />

        </div>

      </div>

      {/* SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          Architecture Summary

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          SoilENZ combines OCR extraction, AI-driven agricultural analytics,
          enterprise visualization systems, and sustainability intelligence
          into a unified precision farming platform capable of generating
          advanced multi-page agricultural intelligence reports.

        </p>

      </div>

    </div>
  );
}

/* STACK CARD */

function StackCard({ title, value }) {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">

      <p className="text-lg text-gray-500">

        {title}

      </p>

      <div className="text-3xl font-black text-[#14532d] mt-3">

        {value}

      </div>

    </div>
  );
}

export default SystemArchitecture;