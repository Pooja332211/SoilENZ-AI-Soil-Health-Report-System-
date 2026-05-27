import React from "react";

function NutrientTable({ report }) {

  if (!report) return null;

  const nutrients = [

    {
      name: "pH",
      value: report.ph,
      status:
        report.ph > 7.5
          ? "Basic"
          : "Normal",
      color: "text-orange-500",
    },

    {
      name: "Nitrogen (N)",
      value: report.nitrogen,
      status:
        report.nitrogen < 280
          ? "Low"
          : "Good",
      color:
        report.nitrogen < 280
          ? "text-red-500"
          : "text-green-600",
    },

    {
      name: "Phosphorus (P)",
      value: report.phosphorus,
      status: "Medium",
      color: "text-yellow-600",
    },

    {
      name: "Potassium (K)",
      value: report.potassium,
      status:
        report.potassium > 500
          ? "High"
          : "Normal",
      color:
        report.potassium > 500
          ? "text-green-600"
          : "text-yellow-600",
    },

    {
      name: "Organic Carbon",
      value: report.organic_carbon,
      status: "Medium",
      color: "text-yellow-600",
    },

    {
      name: "Sulfur",
      value: report.sulfur,
      status: "High",
      color: "text-green-600",
    },

    {
      name: "EC",
      value: report.ec,
      status: "Normal",
      color: "text-green-600",
    },
  ];

  return (

    <div className="report-page">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-black text-[#14532d]">

          DETAILED SOIL PARAMETERS

        </h1>

        <p className="text-gray-500 mt-3">

          AI extracted laboratory nutrient analysis
        </p>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="w-full border-collapse overflow-hidden rounded-3xl">

          <thead>

            <tr className="bg-[#14532d] text-white">

              <th className="p-5 text-left text-2xl">

                Parameter
              </th>

              <th className="p-5 text-left text-2xl">

                Value
              </th>

              <th className="p-5 text-left text-2xl">

                Status
              </th>

              <th className="p-5 text-left text-2xl">

                AI Interpretation
              </th>

            </tr>

          </thead>

          <tbody>

            {nutrients.map((item, index) => (

              <tr
                key={index}
                className="border-b bg-white hover:bg-green-50"
              >

                <td className="p-5 font-bold text-[#14532d]">

                  {item.name}

                </td>

                <td className="p-5 font-black text-2xl">

                  {item.value || "N/A"}

                </td>

                <td className={`p-5 font-bold ${item.color}`}>

                  {item.status}

                </td>

                <td className="p-5 text-gray-700">

                  {item.status === "Low" &&
                    "Immediate nutrient support recommended."}

                  {item.status === "Medium" &&
                    "Balanced condition with monitoring advised."}

                  {item.status === "High" &&
                    "Strong nutrient availability detected."}

                  {item.status === "Normal" &&
                    "Healthy soil condition detected."}

                  {item.status === "Basic" &&
                    "Alkaline condition may affect nutrient absorption."}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* AI SUMMARY */}

      <div className="mt-10 bg-[#f5f7f5] border border-green-200 rounded-3xl p-8">

        <h2 className="text-3xl font-black text-[#14532d] mb-4">

          AI Nutrient Analysis Summary
        </h2>

        <p className="text-gray-700 leading-8">

          The extracted soil laboratory report indicates moderate
          organic carbon with strong potassium availability.
          Nitrogen deficiency is present and requires balanced
          fertilizer intervention for sustainable productivity.
          Soil pH indicates alkaline tendency which may reduce
          micronutrient absorption efficiency.

        </p>

      </div>

    </div>
  );
}

export default NutrientTable;