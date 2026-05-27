import React from "react";

function CarbonImpactPage({ report }) {

  if (!report) return null;

  return (

    <div className="report-page bg-white">

      {/* HEADER */}

      <div className="mb-8">

        <div className="text-sm font-bold text-white bg-[#14532d] px-4 py-2 rounded-lg inline-block mb-4">

          ARKASHINE INNOVATIONS | SoilENZ Advisory Report

        </div>

        <h1 className="text-[50px] font-black leading-[60px]">

          CARBON CREDIT
          <br />
          IMPACT DASHBOARD

        </h1>

        <p className="text-blue-700 text-lg mt-3">

          Your soil health action leads to
          environment and income generation.

        </p>

      </div>

      {/* TOP FLOW */}

      <div className="grid grid-cols-5 gap-5 mb-10">

        {[
          "Sustainable Practices",
          "Improved Soil Health",
          "Higher Yield",
          "CO₂ Sequestration",
          "Carbon Credit",
        ].map((item, index) => (

          <div
            key={index}
            className="border-2 rounded-3xl p-5 text-center"
          >

            <div className="text-6xl mb-4">

              {
                ["🧪", "🌱", "🌾", "☁️", "♻️"][index]
              }

            </div>

            <h3 className="font-black text-lg">

              {item}

            </h3>

          </div>

        ))}

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-2 gap-8">

        {/* TABLE */}

        <div className="border-2 rounded-3xl p-6">

          <h2 className="text-3xl font-black mb-6">

            ESTIMATED CARBON
            SEQUESTRATION

          </h2>

          <table className="w-full">

            <thead>

              <tr className="bg-[#14532d] text-white">

                <th className="p-3">

                  Parameter
                </th>

                <th className="p-3">

                  Current
                </th>

                <th className="p-3">

                  Improved
                </th>

                <th className="p-3">

                  Annual CO₂
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-4 font-semibold text-blue-700">

                  Organic Carbon

                </td>

                <td className="p-4 text-center">

                  {report.organic_carbon || "0.53"}

                </td>

                <td className="p-4 text-center">

                  0.73

                </td>

                <td className="p-4 text-center font-black text-green-700">

                  180 kg

                </td>

              </tr>

              <tr className="border-b">

                <td className="p-4 font-semibold text-blue-700">

                  Biomass

                </td>

                <td className="p-4 text-center">

                  1.4

                </td>

                <td className="p-4 text-center">

                  2.3

                </td>

                <td className="p-4 text-center font-black text-green-700">

                  260 kg

                </td>

              </tr>

              <tr>

                <td className="p-4 font-black text-xl">

                  TOTAL

                </td>

                <td />

                <td />

                <td className="p-4 text-center font-black text-3xl text-[#14532d]">

                  440 kg CO₂

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* SCORE */}

        <div className="space-y-8">

          {/* BIG NUMBER */}

          <div className="border-2 rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-black mb-6">

              CO₂ SAVED

            </h2>

            <h1 className="text-[70px] font-black text-[#14532d] leading-none">

              440

            </h1>

            <p className="text-4xl font-black mt-4">

              kg CO₂

            </p>

            <p className="text-blue-700 font-bold mt-4">

              Per Acre / Year

            </p>

          </div>

          {/* GAUGE */}

          <div className="border-2 rounded-3xl p-8 text-center">

            <h2 className="text-3xl font-black mb-6">

              CARBON HEALTH SCORE

            </h2>

            <div className="relative w-72 h-36 mx-auto">

              <div className="w-full h-full border-t-[28px] border-l-[28px] border-r-[28px] rounded-t-full border-green-600"></div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">

                <h1 className="text-8xl font-black">

                  {report.carbon_score || 56}

                </h1>

                <p className="text-orange-500 font-black text-4xl">

                  MODERATE

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* INSIGHTS */}

      <div className="grid grid-cols-2 gap-8 mt-10">

        {/* BENEFITS */}

        <div className="border-2 rounded-3xl p-6">

          <h2 className="text-3xl font-black mb-5">

            KEY BENEFITS & INSIGHTS

          </h2>

          <ul className="space-y-4 text-lg leading-8">

            <li>
              ✔ Additional carbon income possible
            </li>

            <li>
              ✔ Improved soil structure
            </li>

            <li>
              ✔ Better water holding capacity
            </li>

            <li>
              ✔ Sustainable climate smart farming
            </li>

            <li>
              ✔ Long term productivity improvement
            </li>

          </ul>

        </div>

        {/* SUMMARY */}

        <div className="border-2 rounded-3xl p-6">

          <h2 className="text-3xl font-black mb-5">

            SOIL CONDITIONS

          </h2>

          <ul className="space-y-4 text-lg leading-8">

            <li>
              • Organic Carbon :
              {report.organic_carbon || "0.53"}
            </li>

            <li>
              • Nitrogen :
              {report.nitrogen || "163"}
            </li>

            <li>
              • pH :
              {report.ph || "7.8"}
            </li>

            <li>
              • EC :
              {report.ec || "0.71"}
            </li>

            <li>
              • Precision nutrient management advised
            </li>

          </ul>

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-6 flex justify-between text-blue-700 font-semibold text-sm">

        <span>
          Note:
          Carbon sequestration varies by climate and crop.
        </span>

        <span>
          Analysis Method:
          Spectroscopy + AI Interpretation
        </span>

      </div>

    </div>
  );
}

export default CarbonImpactPage;