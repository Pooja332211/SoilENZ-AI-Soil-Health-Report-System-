import React from "react";

function LoadingCard({
  title,
  desc,
  icon,
}) {

  return (

    <div className="bg-white border rounded-[18px] p-5 shadow-sm">

      <div className="text-[40px]">

        {icon}

      </div>

      <h2 className="text-[22px] font-black text-[#0f172a] mt-4">

        {title}

      </h2>

      <p className="text-[12px] text-gray-500 leading-6 mt-3">

        {desc}

      </p>

    </div>
  );
}

function LoadingScreen() {

  return (

    <div className="bg-[#f4f6f8] border rounded-[28px] p-10 shadow-xl">

      {/* TOP */}

      <div className="text-center">

        <div className="w-24 h-24 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[42px] mx-auto animate-spin">

          🧠

        </div>

        <h1 className="text-[42px] font-black text-[#0f172a] mt-6">

          SoilENZ AI Processing

        </h1>

        <p className="text-gray-500 text-[15px] mt-4 max-w-3xl mx-auto leading-8">

          OCR extraction, nutrient analysis,
          crop recommendation, carbon scoring,
          sustainability intelligence and PDF
          generation are in progress.

        </p>

      </div>

      {/* STEPS */}

      <div className="grid grid-cols-2 gap-5 mt-10">

        <LoadingCard
          icon="📄"
          title="OCR Extraction"
          desc="Reading nutrient values and farmer details from uploaded report."
        />

        <LoadingCard
          icon="📊"
          title="AI Nutrient Analysis"
          desc="Analyzing pH, EC, NPK and micronutrient balance."
        />

        <LoadingCard
          icon="🌾"
          title="Crop Intelligence"
          desc="Generating crop suitability and amendment strategy."
        />

        <LoadingCard
          icon="♻️"
          title="Carbon Analytics"
          desc="Computing sustainability and carbon impact metrics."
        />

      </div>

      {/* FOOTER */}

      <div className="text-center mt-10">

        <div className="inline-flex items-center gap-3 bg-[#14532d] text-white px-8 py-4 rounded-full text-[16px] font-black shadow-lg">

          <div className="w-3 h-3 rounded-full bg-white animate-bounce"></div>

          Generating Premium AI Report

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;