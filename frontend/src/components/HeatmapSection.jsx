import React from "react";

import {
  Map,
  Thermometer,
  Leaf,
  Droplets,
  Mountain,
  Waves,
} from "lucide-react";

function HeatmapSection({ report }) {

  const heatmaps = [

    {
      title: "Nitrogen Distribution",
      color: "from-red-200 via-yellow-200 to-green-400",
      icon: <Leaf size={40} />,
      status: "Variable",
    },

    {
      title: "Moisture Retention",
      color: "from-blue-200 via-cyan-300 to-blue-600",
      icon: <Droplets size={40} />,
      status: "Moderate",
    },

    {
      title: "pH Stability",
      color: "from-purple-200 via-pink-200 to-purple-500",
      icon: <Thermometer size={40} />,
      status: "Stable",
    },

    {
      title: "Organic Carbon",
      color: "from-green-200 via-lime-300 to-green-700",
      icon: <Mountain size={40} />,
      status: "Healthy",
    },

    {
      title: "Salinity Zones",
      color: "from-yellow-100 via-orange-300 to-red-500",
      icon: <Waves size={40} />,
      status: "Low Risk",
    },

    {
      title: "Field Intelligence",
      color: "from-teal-200 via-green-300 to-emerald-700",
      icon: <Map size={40} />,
      status: "AI Analyzed",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Grid Heatmap Intelligence

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            AI Spatial Soil Variability Mapping

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          SATELLITE + AI ANALYSIS

        </div>

      </div>

      {/* HEATMAP GRID */}

      <div className="grid grid-cols-3 gap-8">

        {heatmaps.map((item, index) => (

          <div
            key={index}
            className="bg-[#f9fafb] rounded-3xl overflow-hidden shadow-lg border border-gray-200"
          >

            {/* TOP */}

            <div
              className={`h-56 bg-gradient-to-br ${item.color} relative`}
            >

              {/* GRID EFFECT */}

              <div className="absolute inset-0 opacity-30">

                <div className="grid grid-cols-6 h-full">

                  {[...Array(36)].map((_, i) => (

                    <div
                      key={i}
                      className="border border-white/40"
                    ></div>

                  ))}

                </div>

              </div>

              {/* ICON */}

              <div className="absolute top-5 right-5 bg-white/80 p-4 rounded-2xl text-[#14532d]">

                {item.icon}

              </div>

              {/* STATUS */}

              <div className="absolute bottom-5 left-5 bg-black/60 text-white px-5 py-2 rounded-full text-lg font-bold">

                {item.status}

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <h2 className="text-2xl font-black text-[#14532d]">

                {item.title}

              </h2>

              <p className="text-gray-600 mt-3 text-lg leading-relaxed">

                AI-generated spatial variability insights identifying
                nutrient concentration zones and field-level optimization
                opportunities.

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* AI SUMMARY */}

      <div className="mt-10 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <h2 className="text-3xl font-black text-[#14532d] mb-5">

          AI Spatial Interpretation

        </h2>

        <p className="text-2xl leading-relaxed text-gray-700">

          Heatmap analysis reveals moderate nutrient variability across
          field zones with localized nitrogen deficiency pockets.
          Organic carbon distribution remains stable, indicating healthy
          microbial conditions and strong soil resilience potential.
          Precision nutrient targeting is recommended for optimized yield.

        </p>

      </div>

    </div>
  );
}

export default HeatmapSection;