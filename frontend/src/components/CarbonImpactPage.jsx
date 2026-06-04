import React from "react";

function CarbonImpactPage({ report }) {

  const carbon =
  report?.carbon_data || {};

const data =
  report?.data || {};

  return (

<div className="w-[210mm] h-[297mm] bg-[#f4f6f8] mx-auto p-[8mm] overflow-hidden">
      {/* HEADER */}

      <div className="flex justify-between items-start">

        {/* LEFT */}

        <div>

          <div className="bg-[#14532d] text-white inline-block px-4 py-1 rounded-full text-[10px] font-black">

            ARKASHINE INNOVATIONS | SoilENZ Advisory Report

          </div>

          <h1 className="text-[34px] leading-[40px] font-black text-[#0f172a] mt-4">

            CARBON CREDIT
            <br />
            IMPACT DASHBOARD

          </h1>

          <p className="text-blue-600 text-[12px] mt-2 font-semibold">

            Your soil health contributes to
            environmental sustainability and
            carbon intelligence.

          </p>

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-5 gap-3 mt-6">

        {[
          ["🌿", "Sustainable Practices"],
          ["🌱", "Improved Soil Health"],
          ["🌾", "Higher Yield"],
          ["☁️", "CO₂ Sequestration"],
          ["♻️", "Carbon Credit"],
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white border rounded-[18px] p-4 text-center shadow-sm"
          >

            <div className="text-[38px]">

              {item[0]}

            </div>

            <h2 className="text-[12px] font-black text-[#0f172a] mt-2 leading-5">

              {item[1]}

            </h2>

          </div>

        ))}

      </div>

      {/* MIDDLE */}

      <div className="grid grid-cols-2 gap-4 mt-5">

        {/* TABLE */}

        <div className="bg-white border rounded-[18px] p-5 shadow-sm">

          <h2 className="text-[22px] font-black text-[#0f172a]">

            ESTIMATED CARBON
            SEQUESTRATION

          </h2>

          <div className="mt-5 border rounded-xl overflow-hidden">

            <div className="grid grid-cols-4 bg-[#14532d] text-white text-[10px] font-black px-3 py-3">

              <div>Parameter</div>
              <div>Current</div>
              <div>Improved</div>
              <div>Annual CO₂</div>

            </div>

            {[
              [
  "Organic Carbon",
  carbon.current_oc || 0,
  carbon.improved_oc || 0,
  carbon.annual_oc_gain || 0,
],
              [
  "Biomass",
  carbon.biomass_current || 0,
  carbon.biomass_improved || 0,
  carbon.biomass_gain || 0,
],
            ].map((row, idx) => (

              <div
                key={idx}
                className="grid grid-cols-4 px-3 py-3 text-[11px] border-b"
              >

                <div className="font-bold text-[#14532d]">

                  {row[0]}

                </div>

                <div>{row[1]}</div>

                <div>{row[2]}</div>

                <div className="font-black text-green-700">

                  {row[3]}

                </div>

              </div>

            ))}

            <div className="grid grid-cols-4 px-3 py-3 text-[11px] font-black">

              <div>TOTAL</div>
              <div></div>
              <div></div>
              <div className="text-green-700">

                {carbon.co2_sequestered_kg || 0} kg CO₂

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col gap-4">

          {/* CO2 SAVED */}

          <div className="bg-white border rounded-[18px] p-5 shadow-sm text-center">

            <h2 className="text-[24px] font-black text-[#0f172a]">

              CO₂ SAVED

            </h2>

            <div className="text-[54px] font-black text-[#14532d] mt-4">

              {carbon.co2_sequestered_kg || 0}

            </div>

            <p className="text-[14px] text-gray-500">

              kg CO₂

            </p>

            <p className="text-blue-600 text-[11px] font-bold mt-3">

              Per Acre / Year

            </p>

          </div>

          {/* SCORE */}

          <div className="bg-white border rounded-[18px] p-5 shadow-sm text-center">

            <h2 className="text-[22px] font-black text-[#0f172a]">

              CARBON HEALTH SCORE

            </h2>

            <div className="w-[220px] h-[110px] border-[16px] border-green-600 border-b-0 rounded-t-full mx-auto mt-6 flex items-end justify-center">

              <div className="mb-2">

                <div className="text-[42px] font-black text-[#0f172a]">

                 {carbon.carbon_score || 0}
                </div>

                <div className="text-orange-500 font-black text-[12px]">

                 {carbon.carbon_status || "Low"}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
<div className="bg-white border rounded-[18px] p-5 shadow-sm">

  <h2 className="text-[20px] font-black">

    CARBON CREDIT POTENTIAL

  </h2>

  <div className="mt-4 text-[12px] leading-7">

    <p>

      Credits:

      {" "}
      {carbon.estimated_carbon_credits_low}
      {" - "}
      {carbon.estimated_carbon_credits_high}

    </p>

    <p>

      Income:

      {" "}
      ₹{carbon.estimated_income_low}
      {" - "}
      ₹{carbon.estimated_income_high}

    </p>

  </div>

</div>
      {/* BOTTOM */}

      <div className="grid grid-cols-2 gap-4 mt-5">

        {/* BENEFITS */}

        <div className="bg-white border rounded-[18px] p-5 shadow-sm">

          <h2 className="text-[20px] font-black text-[#0f172a]">

            KEY BENEFITS & INSIGHTS

          </h2>

          <div className="mt-4 text-[12px] text-gray-700 leading-7">

            <p>
              ✓ Additional carbon income possible
            </p>

            <p>
              ✓ Improved soil structure
            </p>

            <p>
              ✓ Better water holding capacity
            </p>

            <p>
              ✓ Sustainable climate-smart farming
            </p>

            <p>
              ✓ Long-term productivity improvement
            </p>

          </div>

        </div>

        {/* CONDITIONS */}

        <div className="bg-white border rounded-[18px] p-5 shadow-sm">

          <h2 className="text-[20px] font-black text-[#0f172a]">

            SOIL CONDITIONS

          </h2>

          <div className="mt-4 text-[12px] text-gray-700 leading-7">

            <p>
              • Organic Carbon:
              {" "}
              {data?.organic_carbon || 0}
            </p>

            <p>
              • Nitrogen:
              {" "}
              {data?.nitrogen || 0}
            </p>

            <p>
              • pH:
              {" "}
              {data?.ph || 0}
            </p>

            <p>
              • EC:
              {" "}
              {data?.ec || 0}
            </p>

            <p>
              • Precision nutrient management advised
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="flex justify-between mt-6 text-[10px] text-blue-700 font-bold">

        <div>

          Note:
          Carbon sequestration varies
          by climate and crop.

        </div>

        <div>

          Analysis Method:
          Spectroscopy + AI Interpretation

        </div>

      </div>

    </div>
  );
}

export default CarbonImpactPage;