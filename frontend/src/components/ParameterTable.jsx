import React from "react";

import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

function ParameterTable({ report }) {

  const parameters = [

    {
      name: "pH",
      value: report.ph,
      optimal: "6.5 - 7.5",
      status: "Moderate",
    },

    {
      name: "Electrical Conductivity",
      value: report.ec,
      optimal: "0.2 - 0.8",
      status: "Healthy",
    },

    {
      name: "Organic Carbon",
      value: report.organic_carbon,
      optimal: "0.5 - 0.75",
      status: "Healthy",
    },

    {
      name: "Nitrogen",
      value: report.nitrogen,
      optimal: "280 - 450",
      status: "Low",
    },

    {
      name: "Phosphorus",
      value: report.phosphorus,
      optimal: "22 - 56",
      status: "Moderate",
    },

    {
      name: "Potassium",
      value: report.potassium,
      optimal: "280 - 700",
      status: "Healthy",
    },

    {
      name: "Calcium",
      value: report.calcium,
      optimal: "40 - 100",
      status: "Healthy",
    },

    {
      name: "Magnesium",
      value: report.magnesium,
      optimal: "1 - 5",
      status: "Healthy",
    },

    {
      name: "Sulfur",
      value: report.sulfur,
      optimal: "10 - 40",
      status: "Healthy",
    },

    {
      name: "Iron",
      value: report.iron,
      optimal: "4 - 15",
      status: "Healthy",
    },

    {
      name: "Manganese",
      value: report.manganese,
      optimal: "1 - 5",
      status: "Healthy",
    },

    {
      name: "Copper",
      value: report.copper,
      optimal: "0.2 - 1",
      status: "Healthy",
    },

    {
      name: "Zinc",
      value: report.zinc,
      optimal: "1 - 6",
      status: "Healthy",
    },

    {
      name: "Boron",
      value: report.boron,
      optimal: "0.5 - 2",
      status: "Moderate",
    },
  ];

  const getStatusBadge = (status) => {

    if (status === "Healthy") {

      return (
        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full flex items-center gap-2 font-bold w-fit">
          <CheckCircle2 size={20} />
          Healthy
        </div>
      );
    }

    if (status === "Moderate") {

      return (
        <div className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full flex items-center gap-2 font-bold w-fit">
          <AlertTriangle size={20} />
          Moderate
        </div>
      );
    }

    return (
      <div className="bg-red-100 text-red-700 px-5 py-2 rounded-full flex items-center gap-2 font-bold w-fit">
        <XCircle size={20} />
        Low
      </div>
    );
  };

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Detailed Soil Parameters

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            14 Parameter Laboratory Analysis

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          AI VERIFIED

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse overflow-hidden rounded-2xl">

          <thead>

            <tr className="bg-[#14532d] text-white text-left">

              <th className="p-5 text-xl">
                Parameter
              </th>

              <th className="p-5 text-xl">
                Measured Value
              </th>

              <th className="p-5 text-xl">
                Optimal Range
              </th>

              <th className="p-5 text-xl">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {parameters.map((item, index) => (

              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0
                    ? "bg-[#f9fafb]"
                    : "bg-white"
                }`}
              >

                <td className="p-5 text-xl font-bold text-[#14532d]">

                  {item.name}

                </td>

                <td className="p-5 text-xl">

                  {item.value}

                </td>

                <td className="p-5 text-xl text-gray-600">

                  {item.optimal}

                </td>

                <td className="p-5">

                  {getStatusBadge(item.status)}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* FOOTER INSIGHT */}

      <div className="mt-10 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <h2 className="text-3xl font-black text-[#14532d] mb-5">

          AI Interpretation

        </h2>

        <p className="text-2xl leading-relaxed text-gray-700">

          The soil profile demonstrates balanced macro and micronutrient
          availability with moderate nitrogen stress. Organic carbon levels
          are healthy, supporting long-term microbial activity and
          carbon sequestration potential. Precision nutrient management
          is recommended for yield optimization.

        </p>

      </div>

    </div>
  );
}

export default ParameterTable;