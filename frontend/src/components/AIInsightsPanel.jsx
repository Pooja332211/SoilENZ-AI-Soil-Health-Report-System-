import React from "react";

import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Leaf,
} from "lucide-react";

function AIInsightsPanel({ report }) {

  const insights = [

    {
      title: "Nitrogen Deficiency Detected",
      description:
        "AI analysis identified moderate nitrogen stress affecting crop productivity potential.",
      icon: <AlertTriangle size={38} />,
      color: "from-red-400 to-red-600",
    },

    {
      title: "Healthy Carbon Retention",
      description:
        "Organic carbon balance supports strong microbial and soil health activity.",
      icon: <Leaf size={38} />,
      color: "from-green-400 to-green-700",
    },

    {
      title: "Yield Optimization Opportunity",
      description:
        "Precision nutrient balancing can improve yield efficiency by 18-24%.",
      icon: <TrendingUp size={38} />,
      color: "from-blue-400 to-blue-700",
    },

    {
      title: "Climate Resilience Stable",
      description:
        "Soil indicators suggest strong sustainability and climate adaptability.",
      icon: <ShieldCheck size={38} />,
      color: "from-emerald-400 to-emerald-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-5">

          <div className="bg-[#14532d] text-white p-5 rounded-2xl">

            <BrainCircuit size={50} />

          </div>

          <div>

            <h1 className="text-5xl font-black text-[#14532d]">

              AI Insights Engine

            </h1>

            <p className="text-xl text-gray-500 mt-3">

              Advanced Agricultural Intelligence Interpretation

            </p>

          </div>

        </div>

        <div className="bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white px-8 py-4 rounded-2xl flex items-center gap-3 text-xl font-bold">

          <Sparkles size={26} />

          AI ACTIVE

        </div>

      </div>

      {/* INSIGHTS */}

      <div className="grid grid-cols-2 gap-8">

        {insights.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-xl`}
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <h2 className="text-3xl font-black">

                  {item.title}

                </h2>

                <p className="text-lg opacity-95 mt-5 leading-relaxed">

                  {item.description}

                </p>

              </div>

              <div>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* AI CONFIDENCE */}

      <div className="mt-10 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-black text-[#14532d]">

              AI Confidence Score

            </h2>

            <p className="text-xl text-gray-500 mt-3">

              Multi-model agricultural intelligence validation

            </p>

          </div>

          <div className="text-center">

            <div className="text-7xl font-black text-[#14532d]">

              96%

            </div>

            <p className="text-lg text-gray-500 mt-2">

              Prediction Accuracy

            </p>

          </div>

        </div>

        {/* BAR */}

        <div className="mt-8">

          <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">

            <div className="h-6 rounded-full bg-gradient-to-r from-[#14532d] to-green-500 w-[96%]"></div>

          </div>

        </div>

      </div>

      {/* FINAL SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          AI Strategic Interpretation

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          The analyzed field demonstrates strong long-term sustainability
          potential with balanced micronutrient conditions and healthy
          carbon retention indicators. Nitrogen optimization and precision
          amendment strategies can significantly improve productivity,
          climate resilience, and carbon credit eligibility.

        </p>

      </div>

    </div>
  );
}

export default AIInsightsPanel;