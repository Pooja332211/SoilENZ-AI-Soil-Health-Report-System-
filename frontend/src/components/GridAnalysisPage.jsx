import React from "react";

function GridAnalysisPage({ report }) {

  if (!report) return null;

  const cards = [

    {
      title: "pH (0-14)",
      value: report.ph,
      status: "Alkaline",
      color: "bg-orange-500",
    },

    {
      title: "EC (dS/m)",
      value: report.ec,
      status: "Normal",
      color: "bg-green-500",
    },

    {
      title: "Organic Carbon (%)",
      value: report.organic_carbon,
      status: "Medium",
      color: "bg-yellow-500",
    },

    {
      title: "Nitrogen (kg/ha)",
      value: report.nitrogen,
      status: "Low",
      color: "bg-red-500",
    },

    {
      title: "Phosphorus (kg/ha)",
      value: report.phosphorus,
      status: "Medium",
      color: "bg-yellow-500",
    },

    {
      title: "Potassium (kg/ha)",
      value: report.potassium,
      status: "High",
      color: "bg-green-700",
    },

  ];

  return (

    <div className="w-[210mm] h-[285mm] bg-white mx-auto p-[8mm] overflow-hidden">

      <div className="border-[3px] border-[#14532d] rounded-[20px] p-5 h-full">

        {/* HEADER */}

        <div className="flex justify-between items-start mb-5">

          <div>

            <div className="bg-[#14532d] text-white px-3 py-1 rounded-md text-[9px] font-bold inline-block mb-2">

              ARKASHINE INNOVATIONS | SoilENZ Advisory Report

            </div>

            <h1 className="text-[28px] font-black leading-[30px]">

              SOILENZ GRID ANALYSIS –
              <br />
              FIELD WISE VARIABILITY

            </h1>

          </div>

          <div className="bg-[#14532d] text-white p-4 rounded-2xl w-[250px]">

            <h2 className="font-black text-[16px] mb-3">

              SOILENZ MEANS PRECISION

            </h2>

            <ul className="space-y-2 text-[10px]">

              <li>✓ Scientific 14 parameter soil test</li>

              <li>✓ AI based heatmap analysis</li>

              <li>✓ Precision farming insights</li>

              <li>✓ Grid level variability tracking</li>

              <li>✓ Sustainable nutrient management</li>

            </ul>

          </div>

        </div>

        {/* TOP CARDS */}

        <div className="grid grid-cols-4 gap-4 mb-6">

          <div className="border border-gray-300 rounded-xl p-4 text-center">

            <h3 className="text-[11px] font-bold">

              Field Area

            </h3>

            <p className="text-[18px] font-black mt-2">

              1 Acre

            </p>

          </div>

          <div className="border border-gray-300 rounded-xl p-4 text-center">

            <h3 className="text-[11px] font-bold">

              Grid Size

            </h3>

            <p className="text-[18px] font-black mt-2">

              30m x 30m

            </p>

          </div>

          <div className="border border-gray-300 rounded-xl p-4 text-center">

            <h3 className="text-[11px] font-bold">

              Total Grids

            </h3>

            <p className="text-[18px] font-black mt-2">

              16

            </p>

          </div>

          <div className="border border-gray-300 rounded-xl p-4 text-center">

            <h3 className="text-[11px] font-bold">

              Analysis Date

            </h3>

            <p className="text-[18px] font-black mt-2">

              19 May 2026

            </p>

          </div>

        </div>

        {/* GRID ANALYSIS */}

        <div className="grid grid-cols-3 gap-4">

          {cards.map((item, index) => (

            <div
              key={index}
              className="border border-gray-300 rounded-2xl p-4"
            >

              <h2 className="text-[13px] font-black mb-3">

                {item.title}

              </h2>

              {/* FAKE HEATMAP */}

              <div className="grid grid-cols-5 gap-1 mb-3">

                {[...Array(25)].map((_, i) => (

                  <div
                    key={i}
                    className={`
                      h-6 rounded-sm
                      ${i % 2 === 0
                        ? "bg-green-500"
                        : i % 3 === 0
                        ? "bg-yellow-400"
                        : "bg-orange-500"
                      }
                    `}
                  />

                ))}

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-[10px] text-gray-500">

                    Average

                  </p>

                  <h3 className="text-[18px] font-black">

                    {item.value || "N/A"}

                  </h3>

                </div>

                <div
                  className={`${item.color} text-white px-4 py-1 rounded-full text-[10px] font-bold`}
                >

                  {item.status}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* BOTTOM INSIGHTS */}

        <div className="border border-gray-300 rounded-2xl p-4 mt-5">

          <h2 className="text-[16px] font-black mb-3">

            GRID ANALYSIS INSIGHTS

          </h2>

          <div className="grid grid-cols-2 gap-5 text-[11px] leading-6">

            <ul className="space-y-1">

              <li>• Soil pH is moderately alkaline</li>

              <li>• Nitrogen deficiency observed</li>

              <li>• Potassium concentration high</li>

              <li>• Organic carbon medium</li>

            </ul>

            <ul className="space-y-1">

              <li>• Precision nitrogen dosing advised</li>

              <li>• Sulfur supplementation required</li>

              <li>• Balanced irrigation recommended</li>

              <li>• Organic compost improves fertility</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GridAnalysisPage;