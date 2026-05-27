import React from "react";

import {
  Satellite,
  BrainCircuit,
  CloudRain,
  Globe2,
  Tractor,
  Bot,
} from "lucide-react";

function FutureScope() {

  const features = [

    {
      title: "Satellite Integration",
      description:
        "Future integration with satellite imagery for field-level monitoring and crop intelligence.",
      icon: <Satellite size={44} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "Advanced AI Prediction",
      description:
        "Machine learning models for yield forecasting and nutrient prediction.",
      icon: <BrainCircuit size={44} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      title: "Climate Intelligence",
      description:
        "Weather risk analysis and rainfall-based precision farming insights.",
      icon: <CloudRain size={44} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      title: "Global Carbon Market",
      description:
        "Blockchain-enabled carbon credit marketplace integration for farmers.",
      icon: <Globe2 size={44} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Smart Farming Automation",
      description:
        "IoT and precision agriculture automation systems for sustainable farming.",
      icon: <Tractor size={44} />,
      color: "from-orange-400 to-orange-600",
    },

    {
      title: "AI Copilot",
      description:
        "Conversational agricultural AI assistant for farmers and enterprises.",
      icon: <Bot size={44} />,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Future Scope & Innovation

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Next Generation Agricultural Intelligence Roadmap

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          R&D VISION 2030

        </div>

      </div>

      {/* FEATURES */}

      <div className="grid grid-cols-2 gap-8">

        {features.map((item, index) => (

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

      {/* ROADMAP */}

      <div className="mt-12 bg-[#f5f7f5] rounded-3xl p-10 border border-green-100">

        <h2 className="text-4xl font-black text-[#14532d] mb-10">

          Planned Platform Evolution

        </h2>

        <div className="grid grid-cols-4 gap-6">

          <RoadmapCard
            year="2025"
            feature="OCR + AI Analytics"
          />

          <RoadmapCard
            year="2026"
            feature="Satellite Monitoring"
          />

          <RoadmapCard
            year="2027"
            feature="Carbon Marketplace"
          />

          <RoadmapCard
            year="2030"
            feature="Autonomous AI Farming"
          />

        </div>

      </div>

      {/* FINAL SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          Vision Statement

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          SoilENZ aims to become a complete AI-powered agricultural
          intelligence ecosystem integrating precision farming,
          sustainability analytics, climate resilience, carbon markets,
          and autonomous decision systems to empower the future of
          global agriculture.

        </p>

      </div>

    </div>
  );
}

/* ROADMAP CARD */

function RoadmapCard({ year, feature }) {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">

      <div className="text-4xl font-black text-[#14532d]">

        {year}

      </div>

      <p className="text-xl text-gray-600 mt-4 leading-relaxed">

        {feature}

      </p>

    </div>
  );
}

export default FutureScope;