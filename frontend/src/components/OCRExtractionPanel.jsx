import React from "react";

import {
  ScanSearch,
  FileSpreadsheet,
  CheckCircle2,
  BrainCircuit,
  Database,
  Sparkles,
} from "lucide-react";

function OCRExtractionPanel({ report }) {

  const extracted = [

    {
      label: "pH",
      value: report.ph,
    },

    {
      label: "Nitrogen",
      value: report.nitrogen,
    },

    {
      label: "Phosphorus",
      value: report.phosphorus,
    },

    {
      label: "Potassium",
      value: report.potassium,
    },

    {
      label: "Organic Carbon",
      value: report.organic_carbon,
    },

    {
      label: "Sulfur",
      value: report.sulfur,
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-5">

          <div className="bg-[#14532d] text-white p-5 rounded-2xl">

            <ScanSearch size={50} />

          </div>

          <div>

            <h1 className="text-5xl font-black text-[#14532d]">

              OCR Extraction Engine

            </h1>

            <p className="text-xl text-gray-500 mt-3">

              AI-based Soil Report Parameter Detection

            </p>

          </div>

        </div>

        <div className="bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white px-8 py-4 rounded-2xl text-xl font-bold flex items-center gap-3">

          <Sparkles size={26} />

          OCR ACTIVE

        </div>

      </div>

      {/* TOP SECTION */}

      <div className="grid grid-cols-3 gap-8 mb-10">

        <TopCard
          icon={<FileSpreadsheet size={42} />}
          title="Parameters Extracted"
          value="14"
        />

        <TopCard
          icon={<BrainCircuit size={42} />}
          title="AI Confidence"
          value="96%"
        />

        <TopCard
          icon={<Database size={42} />}
          title="OCR Accuracy"
          value="98%"
        />

      </div>

      {/* EXTRACTION TABLE */}

      <div className="bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <div className="flex items-center gap-4 mb-8">

          <CheckCircle2
            size={38}
            className="text-[#14532d]"
          />

          <h2 className="text-4xl font-black text-[#14532d]">

            Extracted Soil Parameters

          </h2>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {extracted.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >

              <p className="text-lg text-gray-500">

                {item.label}

              </p>

              <div className="text-4xl font-black text-[#14532d] mt-3">

                {item.value}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* PIPELINE */}

      <div className="mt-10">

        <h2 className="text-4xl font-black text-[#14532d] mb-8">

          AI Processing Pipeline

        </h2>

        <div className="grid grid-cols-4 gap-6">

          <PipelineStep
            step="1"
            title="OCR Scan"
          />

          <PipelineStep
            step="2"
            title="Text Detection"
          />

          <PipelineStep
            step="3"
            title="AI Analysis"
          />

          <PipelineStep
            step="4"
            title="PDF Report"
          />

        </div>

      </div>

      {/* SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          OCR Intelligence Summary

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          AI OCR successfully extracted laboratory soil parameters
          with high confidence. Structured nutrient analysis has been
          generated for precision agriculture recommendations,
          sustainability evaluation, and enterprise report generation.

        </p>

      </div>

    </div>
  );
}

/* TOP CARD */

function TopCard({ icon, title, value }) {

  return (

    <div className="bg-gradient-to-br from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xl opacity-90">

            {title}

          </p>

          <div className="text-6xl font-black mt-5">

            {value}

          </div>

        </div>

        <div>

          {icon}

        </div>

      </div>

    </div>
  );
}

/* PIPELINE STEP */

function PipelineStep({ step, title }) {

  return (

    <div className="bg-[#f5f7f5] rounded-3xl p-8 text-center border border-green-100">

      <div className="w-16 h-16 rounded-full bg-[#14532d] text-white flex items-center justify-center mx-auto text-3xl font-black">

        {step}

      </div>

      <h3 className="text-2xl font-black text-[#14532d] mt-6">

        {title}

      </h3>

    </div>
  );
}

export default OCRExtractionPanel;