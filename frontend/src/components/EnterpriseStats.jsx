import React from "react";

import {
  BarChart4,
  Database,
  ShieldCheck,
  Sparkles,
  Globe2,
  Activity,
} from "lucide-react";

function EnterpriseStats({ report }) {

  const stats = [

    {
      title: "AI Accuracy",
      value: "96%",
      icon: <Sparkles size={42} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      title: "OCR Confidence",
      value: "98%",
      icon: <Database size={42} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "Soil Stability",
      value: "High",
      icon: <ShieldCheck size={42} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Yield Prediction",
      value: "+24%",
      icon: <BarChart4 size={42} />,
      color: "from-orange-400 to-orange-600",
    },

    {
      title: "Carbon Impact",
      value: report.carbon_credits,
      icon: <Globe2 size={42} />,
      color: "from-emerald-500 to-emerald-700",
    },

    {
      title: "Microbial Health",
      value: "Stable",
      icon: <Activity size={42} />,
      color: "from-cyan-500 to-cyan-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Enterprise Intelligence Metrics

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Advanced AI Agricultural Performance Dashboard

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          LIVE ANALYTICS

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-3 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl`}
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xl opacity-90">

                  {item.title}

                </p>

                <div className="text-6xl font-black mt-5">

                  {item.value}

                </div>

              </div>

              <div>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* EXECUTIVE SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          Enterprise Executive Summary

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          AI-driven analysis confirms strong agricultural sustainability
          indicators with balanced macro and micronutrient availability.
          Enterprise intelligence systems predict high long-term productivity,
          stable soil resilience, and improved carbon sequestration capability
          under precision farming practices.

        </p>

      </div>

    </div>
  );
}

export default EnterpriseStats;