import React from "react";

import {
  TrendingUp,
  Activity,
  Droplets,
  Leaf,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function AnalyticsSummary({ report }) {

  const cards = [

    {
      title: "Yield Potential",
      value: "High",
      description:
        "AI predicts strong crop productivity potential.",
      icon: <TrendingUp size={42} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Microbial Activity",
      value: "Stable",
      description:
        "Organic carbon supports healthy soil biology.",
      icon: <Activity size={42} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "Water Retention",
      value: "Moderate",
      description:
        "Balanced moisture retention across field zones.",
      icon: <Droplets size={42} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      title: "Sustainability",
      value: "Strong",
      description:
        "Field shows positive regenerative farming indicators.",
      icon: <Leaf size={42} />,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            AI Analytics Summary

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Enterprise Agricultural Intelligence Dashboard

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl flex items-center gap-3 text-xl font-bold">

          <BarChart3 size={28} />

          LIVE INSIGHTS

        </div>

      </div>

      {/* ANALYTICS GRID */}

      <div className="grid grid-cols-2 gap-8">

        {cards.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-xl`}
          >

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black">

                  {item.title}

                </h2>

                <p className="text-lg opacity-90 mt-3 leading-relaxed">

                  {item.description}

                </p>

              </div>

              <div>

                {item.icon}

              </div>

            </div>

            <div className="mt-10">

              <div className="text-6xl font-black">

                {item.value}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SCORE SECTION */}

      <div className="mt-10 grid grid-cols-3 gap-8">

        <ScoreCard
          title="Soil Health"
          score={report.soil_score}
          color="text-green-700"
        />

        <ScoreCard
          title="Carbon Index"
          score={report.carbon_score}
          color="text-blue-700"
        />

        <ScoreCard
          title="AI Confidence"
          score="96"
          color="text-purple-700"
        />

      </div>

      {/* SUMMARY */}

      <div className="mt-10 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <div className="flex items-center gap-4 mb-6">

          <ShieldCheck
            size={42}
            className="text-[#14532d]"
          />

          <h2 className="text-3xl font-black text-[#14532d]">

            AI Executive Summary

          </h2>

        </div>

        <p className="text-2xl text-gray-700 leading-relaxed">

          AI analysis confirms healthy macro nutrient balance with
          moderate nitrogen optimization requirements. The field
          demonstrates strong sustainability indicators, healthy
          carbon retention capability, and high long-term agricultural
          productivity potential.

        </p>

      </div>

    </div>
  );
}

/* SCORE CARD */

function ScoreCard({ title, score, color }) {

  return (

    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm text-center">

      <p className="text-xl text-gray-500">

        {title}

      </p>

      <div className={`text-7xl font-black mt-5 ${color}`}>

        {score}

      </div>

      <p className="text-lg text-gray-400 mt-3">

        Score Index

      </p>

    </div>
  );
}

export default AnalyticsSummary;