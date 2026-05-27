import React from "react";

import {
  UploadCloud,
  FileSearch,
  BarChart3,
  Leaf,
} from "lucide-react";

function EmptyState() {

  const steps = [

    {
      icon: <UploadCloud size={40} />,
      title: "Upload Soil Receipt",
      description:
        "Upload JPG, PNG, or PDF soil laboratory reports.",
    },

    {
      icon: <FileSearch size={40} />,
      title: "AI Extraction",
      description:
        "OCR and AI extract nutrient parameters automatically.",
    },

    {
      icon: <BarChart3 size={40} />,
      title: "Generate Intelligence",
      description:
        "Build enterprise-grade soil analytics and recommendations.",
    },

    {
      icon: <Leaf size={40} />,
      title: "Download PDF",
      description:
        "Export premium multi-page agricultural intelligence reports.",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-14 mt-10">

      {/* TOP */}

      <div className="text-center">

        <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-[#14532d] text-white shadow-xl">

          <UploadCloud size={80} />

        </div>

        <h1 className="text-6xl font-black text-[#14532d] mt-10">

          SoilENZ AI Platform

        </h1>

        <p className="text-2xl text-gray-500 mt-5 max-w-4xl mx-auto leading-relaxed">

          Upload your soil laboratory receipt to generate
          AI-powered soil intelligence reports, nutrient analytics,
          carbon insights, crop suitability analysis, and enterprise PDF exports.

        </p>

      </div>

      {/* WORKFLOW */}

      <div className="grid grid-cols-2 gap-8 mt-16">

        {steps.map((item, index) => (

          <div
            key={index}
            className="bg-[#f5f7f5] rounded-3xl p-8 border border-green-100 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex items-start gap-6">

              <div className="bg-[#14532d] text-white p-5 rounded-2xl">

                {item.icon}

              </div>

              <div>

                <h2 className="text-3xl font-black text-[#14532d]">

                  {item.title}

                </h2>

                <p className="text-xl text-gray-600 mt-4 leading-relaxed">

                  {item.description}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* FEATURES */}

      <div className="mt-16 bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-10 shadow-xl">

        <h2 className="text-4xl font-black mb-8">

          Platform Capabilities

        </h2>

        <div className="grid grid-cols-3 gap-8">

          <Feature text="AI Soil Analytics" />
          <Feature text="OCR Parameter Extraction" />
          <Feature text="Carbon Credit Intelligence" />
          <Feature text="Precision Agriculture" />
          <Feature text="Heatmap Visualization" />
          <Feature text="Enterprise PDF Reports" />

        </div>

      </div>

    </div>
  );
}

/* FEATURE */

function Feature({ text }) {

  return (

    <div className="bg-white/10 rounded-2xl p-5 text-center text-xl font-bold">

      {text}

    </div>
  );
}

export default EmptyState;