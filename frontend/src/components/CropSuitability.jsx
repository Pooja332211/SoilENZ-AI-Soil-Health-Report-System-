import React from "react";

function CropSuitability({ report }) {

  const crops =
  report?.crop_recommendations ||
  report?.recommendations?.crops ||
  [];
console.log("CROPS", crops);
  const topCrop =
    crops.length > 0
      ? crops[0].crop
      : "No Recommendation";

  const topRecommended = crops
    .filter((c) => c.score >= 6)
    .slice(0, 5)
    .map((c) => c.crop)
    .join(", ");

  const cropIcons = {
    Wheat: "🌾",
    Paddy: "🌾",
    Sorghum: "🌽",
    "Pearl Millet": "🌾",
    Cotton: "☁️",
    "Pigeon Pea": "🌱",
    Groundnut: "🥜",
    "Green Gram": "🫛",
    Tomato: "🍅",
    Brinjal: "🍆",
    Cauliflower: "🥦",
  };

  const getStatusIcon = (status) => {
    if (status.includes("Highly")) return "✅";
    if (status.includes("Recommended")) return "✔️";
    if (status.includes("Moderately")) return "⚠️";
    return "❌";
  };

  const analysisDate = new Date().toLocaleDateString();

  return (

<div className="w-[210mm] h-[297mm] bg-[#f4f6f8] mx-auto p-[8mm] overflow-hidden">
      {/* HEADER */}

      <div className="flex justify-between items-start mb-4">

        <div>

          <h1 className="text-[24px] font-black text-[#0f172a]">

            CROP SUITABILITY ANALYSIS

          </h1>

          <p className="text-[10px] text-blue-700 font-semibold">

            Crop suitability based on soil pH,
            EC, N, P, K, OC and climate intelligence

          </p>

        </div>

        <div className="text-right">

          <div className="text-[22px] font-black text-green-800">

            SoilENZ

          </div>

          <div className="text-[9px] text-blue-700 font-semibold">

            Advanced Soil Intelligence

          </div>

        </div>

      </div>

      {/* INFO CARDS */}

      <div className="grid grid-cols-4 gap-3 mb-4">

        <div className="border rounded-xl p-3 bg-gray-50">
          <div className="text-[9px] text-gray-500 font-bold">
            Field Area
          </div>
          <div className="text-[16px] font-black mt-1">
            1 Acre
          </div>
        </div>

        <div className="border rounded-xl p-3 bg-gray-50">
          <div className="text-[9px] text-gray-500 font-bold">
            Grid Size
          </div>
          <div className="text-[16px] font-black mt-1">
            30m x 30m
          </div>
        </div>

        <div className="border rounded-xl p-3 bg-gray-50">
          <div className="text-[9px] text-gray-500 font-bold">
            Total Grids
          </div>
          <div className="text-[16px] font-black mt-1">
            16
          </div>
        </div>

        <div className="border rounded-xl p-3 bg-gray-50">
          <div className="text-[9px] text-gray-500 font-bold">
            Analysis Date
          </div>
          <div className="text-[16px] font-black mt-1">
            {analysisDate}
          </div>
        </div>

      </div>

      {/* TABLE */}

      <div className="border rounded-xl overflow-hidden">

        <div className="grid grid-cols-[180px_1fr_60px_150px_200px] bg-gray-100 text-[10px] font-black p-2">

          <div>Crop</div>
          <div>Suitability Score</div>
          <div>Score</div>
          <div>Status</div>
          <div>Key Notes</div>

        </div>

        {crops.map((crop, index) => {

          const color =
            crop.score >= 8
              ? "bg-green-700"
              : crop.score >= 6
              ? "bg-green-500"
              : crop.score >= 4
              ? "bg-orange-500"
              : "bg-red-600";

          return (

            <div
              key={index}
              className="grid grid-cols-[180px_1fr_60px_150px_200px] items-center border-b px-2 py-2"
            >

              <div className="flex items-center gap-2">

                <span className="text-lg">
                  {cropIcons[crop.crop] || "🌱"}
                </span>

                <span className="text-[11px] font-semibold">
                  {crop.crop}
                </span>

              </div>

              <div className="pr-3">

                <div className="w-full bg-gray-200 h-3 rounded-full">

                  <div
                    className={`${color} h-3 rounded-full`}
                    style={{
                      width: `${crop.score * 10}%`,
                    }}
                  />

                </div>

              </div>

              <div className="font-black text-[12px]">
                {crop.score}
              </div>

              <div className="text-[10px] font-semibold flex items-center gap-1">

                <span>
                  {getStatusIcon(crop.status)}
                </span>

                <span>
                  {crop.status}
                </span>

              </div>

              <div className="text-[10px] text-gray-600">
                {crop.note}
              </div>

            </div>

          );

        })}

      </div>

      {/* BOTTOM CARDS */}

      <div className="grid grid-cols-2 gap-3 mt-4">

        <div className="border rounded-xl p-4 bg-gray-50">

          <div className="text-[14px] font-black text-[#14532d]">

            TOP RECOMMENDED CROPS

          </div>

          <div className="text-[11px] mt-2 text-blue-700 font-semibold">

            {topRecommended}

          </div>

          <div className="text-[10px] mt-3 text-gray-600">

            Focus on balanced irrigation,
            nutrient management and organic
            matter improvement for maximum yield.

          </div>

        </div>

        <div className="border rounded-xl p-4 bg-gray-50">

          <div className="text-[14px] font-black text-[#14532d]">

            AI CROP SUMMARY

          </div>

          <div className="text-[10px] mt-2 text-gray-600">

            {topCrop} is currently the most suitable
            crop based on soil fertility,
            nutrient balance and pH conditions.

          </div>

        </div>

      </div>

    </div>

  );
}

export default CropSuitability;