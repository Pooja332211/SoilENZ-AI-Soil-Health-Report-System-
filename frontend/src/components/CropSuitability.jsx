import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";
import React from "react";

import {
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

function CropSuitability() {

  const crops = [

    {
      name: "Wheat",
      score: 6.5,
      status: "Recommended",
      color: "bg-green-700",
      note: "Balanced fertility required",
      icon: "🌾",
    },

    {
      name: "Paddy",
      score: 8.5,
      status: "Highly Recommended",
      color: "bg-green-700",
      note: "Best suited for alkaline pH",
      icon: "🌾",
    },

    {
      name: "Sorghum",
      score: 8.0,
      status: "Highly Recommended",
      color: "bg-green-700",
      note: "Tolerant to alkaline soil",
      icon: "🌽",
    },

    {
      name: "Pearl Millet",
      score: 7.5,
      status: "Recommended",
      color: "bg-green-700",
      note: "Drought tolerant",
      icon: "🌾",
    },

    {
      name: "Cotton",
      score: 7.2,
      status: "Recommended",
      color: "bg-green-700",
      note: "Performs well in high K",
      icon: "🧶",
    },

    {
      name: "Pigeon Pea",
      score: 6.8,
      status: "Recommended",
      color: "bg-green-700",
      note: "Good for fertility",
      icon: "🌱",
    },

    {
      name: "Groundnut",
      score: 5.2,
      status: "Moderately Suitable",
      color: "bg-orange-500",
      note: "Needs better organic matter",
      icon: "🥜",
    },

    {
      name: "Green Gram",
      score: 4.8,
      status: "Moderately Suitable",
      color: "bg-orange-500",
      note: "Sensitive to low Mn",
      icon: "🫛",
    },

    {
      name: "Tomato",
      score: 2.5,
      status: "Not Recommended",
      color: "bg-red-600",
      note: "Sensitive to high pH",
      icon: "🍅",
    },

    {
      name: "Brinjal",
      score: 2.0,
      status: "Not Recommended",
      color: "bg-red-600",
      note: "Needs rich nutrients",
      icon: "🍆",
    },

    {
      name: "Cauliflower",
      score: 1.5,
      status: "Not Recommended",
      color: "bg-red-600",
      note: "Requires high organic matter",
      icon: "🥦",
    },
  ];

  return (

    <div className="report-page">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-black text-[#14532d]">

          CROP SUITABILITY ANALYSIS

        </h1>

        <p className="text-blue-700 mt-3 text-lg">

          Crop suitability based on pH, EC, NPK,
          Organic Carbon and climate intelligence
        </p>

      </div>

      {/* TOP STATS */}

      <div className="grid grid-cols-4 gap-5 mb-10">

        <div className="border rounded-2xl p-5 bg-white">

          <h3 className="text-gray-500">

            Field Area
          </h3>

          <h2 className="text-3xl font-black mt-2">

            -
          </h2>

        </div>

        <div className="border rounded-2xl p-5 bg-white">

          <h3 className="text-gray-500">

            Grid Size
          </h3>

          <h2 className="text-3xl font-black mt-2">

            30m × 30m
          </h2>

        </div>

        <div className="border rounded-2xl p-5 bg-white">

          <h3 className="text-gray-500">

            Total Grids
          </h3>

          <h2 className="text-3xl font-black mt-2">

            16
          </h2>

        </div>

        <div className="border rounded-2xl p-5 bg-white">

          <h3 className="text-gray-500">

            Analysis Date
          </h3>

          <h2 className="text-3xl font-black mt-2">

            19 May 2026
          </h2>

        </div>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">

                Crop
              </th>

              <th className="p-4 text-left">

                Suitability
              </th>

              <th className="p-4 text-left">

                Score
              </th>

              <th className="p-4 text-left">

                Status
              </th>

              <th className="p-4 text-left">

                Key Notes
              </th>

            </tr>

          </thead>

          <tbody>

            {crops.map((crop, index) => (

              <tr
                key={index}
                className="border-b hover:bg-green-50"
              >

                {/* CROP */}

                <td className="p-4">

                  <div className="flex items-center gap-4">

                    <div className="text-4xl">

                      {crop.icon}

                    </div>

                    <div>

                      <h3 className="font-black text-[#14532d]">

                        {crop.name}

                      </h3>

                    </div>

                  </div>

                </td>

                {/* BAR */}

                <td className="p-4 w-[300px]">

                  <div className="w-full bg-gray-200 rounded-full h-5">

                    <div
                      className={`${crop.color} h-5 rounded-full`}
                      style={{
                        width: `${crop.score * 10}%`,
                      }}
                    ></div>

                  </div>

                </td>

                {/* SCORE */}

                <td className="p-4">

                  <h2 className="text-3xl font-black">

                    {crop.score}

                  </h2>

                </td>

                {/* STATUS */}

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    {crop.status ===
                      "Highly Recommended" && (

                      <CheckCircle className="text-green-600" />

                    )}

                    {crop.status ===
                      "Recommended" && (

                      <CheckCircle className="text-green-600" />

                    )}

                    {crop.status ===
                      "Moderately Suitable" && (

                      <AlertTriangle className="text-orange-500" />

                    )}

                    {crop.status ===
                      "Not Recommended" && (

                      <XCircle className="text-red-600" />

                    )}

                    <span className="font-bold">

                      {crop.status}

                    </span>

                  </div>

                </td>

                {/* NOTES */}

                <td className="p-4 text-gray-700">

                  {crop.note}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* FOOTER */}

      <div className="mt-10 bg-[#f5f7f5] border rounded-3xl p-8">

        <h2 className="text-3xl font-black text-[#14532d] mb-4">

          AI Crop Intelligence Summary
        </h2>

        <p className="text-gray-700 leading-8">

          Paddy, Sorghum and Wheat show the highest
          suitability scores based on alkaline soil
          condition, potassium richness and balanced
          phosphorus availability. Vegetable crops such
          as Tomato and Cauliflower are less suitable
          due to elevated pH and micronutrient imbalance.

        </p>

      </div>

    </div>
  );
}

export default CropSuitability;