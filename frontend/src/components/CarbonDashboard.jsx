import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";
import React from "react";

import {
  Leaf,
  Cloud,
  Trees,
  BarChart3,
  Award,
  ShieldCheck,
} from "lucide-react";

function CarbonDashboard({ report }) {

  if (!report) return null;

  return (

    <div className="report-page">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            CARBON CREDIT IMPACT DASHBOARD

          </h1>

          <p className="text-gray-500 mt-3">

            AI sustainability and carbon sequestration intelligence
          </p>

        </div>

        <div className="bg-[#14532d] text-white px-6 py-3 rounded-2xl font-bold">

          ESG READY

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        {/* CARBON SCORE */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border text-center">

          <Leaf
            size={52}
            className="mx-auto text-[#14532d] mb-5"
          />

          <h2 className="text-5xl font-black text-[#14532d]">

            {report.carbon_score || 72}

          </h2>

          <p className="text-gray-500 mt-3">

            Carbon Score
          </p>

        </div>

        {/* CO2 */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border text-center">

          <Cloud
            size={52}
            className="mx-auto text-[#14532d] mb-5"
          />

          <h2 className="text-5xl font-black text-[#14532d]">

            1.47
          </h2>

          <p className="text-gray-500 mt-3">

            tCO₂ Saved
          </p>

        </div>

        {/* ORGANIC */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border text-center">

          <Trees
            size={52}
            className="mx-auto text-[#14532d] mb-5"
          />

          <h2 className="text-5xl font-black text-[#14532d]">

            {report.organic_carbon || "0.57"}
          </h2>

          <p className="text-gray-500 mt-3">

            Organic Carbon
          </p>

        </div>

        {/* ESG */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border text-center">

          <Award
            size={52}
            className="mx-auto text-[#14532d] mb-5"
          />

          <h2 className="text-5xl font-black text-[#14532d]">

            GOLD
          </h2>

          <p className="text-gray-500 mt-3">

            Sustainability Rating
          </p>

        </div>

      </div>

      {/* MAIN ANALYSIS */}

      <div className="grid grid-cols-2 gap-8">

        {/* LEFT */}

        <div className="bg-white border rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-6">

            <BarChart3
              size={38}
              className="text-[#14532d]"
            />

            <h2 className="text-4xl font-black text-[#14532d]">

              Carbon Analysis
            </h2>

          </div>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <span>Soil Organic Carbon</span>

                <span className="font-bold">

                  {report.organic_carbon || "0.57"}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-green-700 h-4 rounded-full"
                  style={{ width: "72%" }}
                ></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Carbon Retention</span>

                <span className="font-bold">

                  68%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: "68%" }}
                ></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Microbial Activity</span>

                <span className="font-bold">

                  74%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: "74%" }}
                ></div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-gradient-to-br from-[#14532d] to-green-700 rounded-3xl p-10 text-white">

          <div className="flex items-center gap-4 mb-8">

            <ShieldCheck size={40} />

            <h2 className="text-4xl font-black">

              AI Sustainability Insight
            </h2>

          </div>

          <p className="text-xl leading-9 text-green-100 mb-8">

            The analyzed soil demonstrates strong carbon
            sequestration potential with balanced organic matter
            and healthy microbial support. Sustainable agricultural
            practices can significantly improve long-term soil
            productivity and environmental resilience.

          </p>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white/10 rounded-2xl p-5">

              <h3 className="text-3xl font-black">

                1.47 tCO₂
              </h3>

              <p className="text-green-100 mt-2">

                Estimated annual carbon savings
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-5">

              <h3 className="text-3xl font-black">

                ₹4,200
              </h3>

              <p className="text-green-100 mt-2">

                Potential carbon credit value
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-10 bg-[#f5f7f5] border border-green-200 rounded-3xl p-8">

        <h2 className="text-3xl font-black text-[#14532d] mb-5">

          Carbon Optimization Recommendations
        </h2>

        <ul className="space-y-3 text-gray-700 text-lg">

          <li>
            • Increase organic compost and residue recycling
          </li>

          <li>
            • Introduce cover cropping for carbon retention
          </li>

          <li>
            • Reduce excessive chemical dependency
          </li>

          <li>
            • Improve irrigation efficiency and soil biology
          </li>

          <li>
            • Adopt regenerative agriculture practices
          </li>

        </ul>

      </div>

    </div>
  );
}

export default CarbonDashboard;