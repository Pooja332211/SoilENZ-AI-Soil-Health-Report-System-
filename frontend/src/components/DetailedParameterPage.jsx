import React from "react";
import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";

function DetailedParameterPage({ report }) {

  if (!report) return null;

  const rows = [

    {
      no: 1,
      parameter: "pH (0-14)",
      value: report.ph || "7.88",
      unit: "pH",
      status: "Alkaline",
      range: "6.0 - 7.5",
      interpretation:
        "Alkaline soil, may limit nutrient availability",
    },

    {
      no: 2,
      parameter: "Electrical Conductivity (EC)",
      value: report.ec || "0.716",
      unit: "dS/m",
      status: "Normal",
      range: "< 4.0",
      interpretation:
        "Good, no salinity stress",
    },

    {
      no: 3,
      parameter: "Organic Carbon (OC)",
      value: report.organic_carbon || "0.53",
      unit: "%",
      status: "Medium",
      range: "> 0.75",
      interpretation:
        "Medium organic matter",
    },

    {
      no: 4,
      parameter: "Nitrogen (N)",
      value: report.nitrogen || "163.46",
      unit: "kg/ha",
      status: "Low",
      range: "> 280",
      interpretation:
        "Deficient, apply urea in split doses",
    },

    {
      no: 5,
      parameter: "Phosphorus (P)",
      value: report.phosphorus || "43.76",
      unit: "kg/ha",
      status: "Medium",
      range: "> 22",
      interpretation:
        "Marginal, apply basal P",
    },

    {
      no: 6,
      parameter: "Potassium (K)",
      value: report.potassium || "670.52",
      unit: "kg/ha",
      status: "High",
      range: "> 280",
      interpretation:
        "High, no need for potash fertilizer",
    },

    {
      no: 7,
      parameter: "Calcium (Ca)",
      value: "54.08",
      unit: "meq/100g",
      status: "Sufficient",
      range: "> 2.0",
      interpretation:
        "Sufficient for crop",
    },

    {
      no: 8,
      parameter: "Magnesium (Mg)",
      value: "2.559",
      unit: "meq/100g",
      status: "Sufficient",
      range: "> 1.0",
      interpretation:
        "Sufficient Mg",
    },

    {
      no: 9,
      parameter: "Sulfur (S)",
      value: report.sulfur || "33.755",
      unit: "ppm",
      status: "Low",
      range: "> 10",
      interpretation:
        "Deficient, apply sulfur",
    },

    {
      no: 10,
      parameter: "Iron (Fe)",
      value: "6.770",
      unit: "ppm",
      status: "Adequate",
      range: "> 4.5",
      interpretation:
        "Adequate, no need for iron",
    },

    {
      no: 11,
      parameter: "Manganese (Mn)",
      value: "1.991",
      unit: "ppm",
      status: "Low",
      range: "> 2.0",
      interpretation:
        "Deficient, apply MnSO₄",
    },

    {
      no: 12,
      parameter: "Copper (Cu)",
      value: "1.182",
      unit: "ppm",
      status: "High",
      range: "> 0.6",
      interpretation:
        "High, no need for copper",
    },

    {
      no: 13,
      parameter: "Zinc (Zn)",
      value: "4.676",
      unit: "ppm",
      status: "High",
      range: "> 0.2",
      interpretation:
        "High, no need for zinc",
    },

    {
      no: 14,
      parameter: "Boron (B)",
      value: "0.974",
      unit: "ppm",
      status: "Medium",
      range: "> 0.5",
      interpretation:
        "Marginal, may affect growth",
    },
  ];

  const getColor = (status) => {

    if (status === "Low")
      return "text-red-600";

    if (status === "High")
      return "text-green-700";

    if (status === "Medium")
      return "text-orange-500";

    if (status === "Normal")
      return "text-green-600";

    if (status === "Sufficient")
      return "text-green-700";

    return "text-blue-700";
  };

  return (

    <div className="report-page bg-white">

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <h1 className="text-6xl font-black leading-tight">

            ARKASHINE SOILENZ RESULTS –
            <br />
            DETAILED 14 PARAMETER TEST
          </h1>

          <div className="mt-4">

            <h2 className="text-5xl font-black text-[#14532d]">

              SoilENZ
            </h2>

            <p className="text-blue-700 font-semibold mt-2">

              Advanced Soil Intelligence
              <br />
              from Arkashine Labs
            </p>

          </div>

        </div>

        {/* RIGHT BOX */}

        <div className="bg-[#14532d] text-white rounded-3xl p-6 w-[340px]">

          <h2 className="text-2xl font-black mb-5">

            SOILENZ MEANS PRECISION
          </h2>

          <ul className="space-y-3 text-sm">

            <li>
              ✅ Scientific 14 parameter soil test
            </li>

            <li>
              ✅ Lab grade accuracy in your field
            </li>

            <li>
              ✅ Helps in smart recommendation
            </li>

            <li>
              ✅ Enables data-driven farming
            </li>

            <li>
              ✅ Improves soil health
            </li>

          </ul>

        </div>

      </div>

      {/* DATE */}

      <div className="text-right text-blue-700 font-bold mb-5">

        Analysis Date : 19 May 2026

      </div>

      {/* TABLE */}

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-[#14532d] text-white">

            <th className="p-3">#</th>

            <th className="p-3 text-left">

              Parameter
            </th>

            <th className="p-3">

              Value
            </th>

            <th className="p-3">

              Unit
            </th>

            <th className="p-3">

              Status
            </th>

            <th className="p-3">

              Ideal Range
            </th>

            <th className="p-3 text-left">

              Interpretation
            </th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr
              key={index}
              className="border-b hover:bg-green-50"
            >

              <td className="p-3 text-center font-bold text-blue-700">

                {row.no}

              </td>

              <td className="p-3 text-blue-700 font-semibold">

                {row.parameter}

              </td>

              <td className={`p-3 font-black text-center ${getColor(row.status)}`}>

                {row.value}

              </td>

              <td className="p-3 text-center">

                {row.unit}

              </td>

              <td className={`p-3 text-center font-bold ${getColor(row.status)}`}>

                {row.status}

              </td>

              <td className="p-3 text-center">

                {row.range}

              </td>

              <td className="p-3 text-blue-700">

                {row.interpretation}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* FOOTER */}

      <div className="mt-6 text-blue-700 font-semibold text-sm">

        Analysis Method:
        Spectroscopy + AI Interpretation

      </div>

    </div>
  );
}

export default DetailedParameterPage;