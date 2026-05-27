import React from "react";

import {
  Leaf,
  Droplets,
  FlaskConical,
  ShieldCheck,
  Trees,
  Sprout,
} from "lucide-react";

function RecommendationSection({ report }) {

  if (!report) return null;

  const recommendations = [

    {
      icon: <Leaf size={28} />,
      title: "Nitrogen Optimization",
      desc:
        "Apply balanced nitrogen fertilizer to improve crop productivity and chlorophyll development.",
    },

    {
      icon: <Droplets size={28} />,
      title: "Irrigation Management",
      desc:
        "Use drip irrigation for efficient nutrient absorption and water conservation.",
    },

    {
      icon: <FlaskConical size={28} />,
      title: "pH Stabilization",
      desc:
        "Use organic amendments to reduce alkaline soil effects and improve micronutrient uptake.",
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Micronutrient Support",
      desc:
        "Improve zinc and sulfur balance for enhanced plant resistance and root development.",
    },

    {
      icon: <Trees size={28} />,
      title: "Carbon Improvement",
      desc:
        "Increase compost and organic residue usage to improve carbon sequestration potential.",
    },

    {
      icon: <Sprout size={28} />,
      title: "Soil Regeneration",
      desc:
        "Introduce crop rotation and biofertilizers for long-term soil sustainability.",
    },
  ];

  return (

    <div className="report-page">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-black text-[#14532d]">

          AI RECOMMENDATION ENGINE

        </h1>

        <p className="text-gray-500 mt-3">

          Precision agriculture recommendations generated from
          OCR extracted soil intelligence
        </p>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {recommendations.map((item, index) => (

          <div

            key={index}

            className="bg-[#f5f7f5] border rounded-3xl p-8 hover:shadow-xl transition-all"

          >

            <div className="flex items-center gap-4 mb-5">

              <div className="bg-[#14532d] text-white p-4 rounded-2xl">

                {item.icon}

              </div>

              <h2 className="text-3xl font-black text-[#14532d]">

                {item.title}

              </h2>

            </div>

            <p className="text-gray-700 leading-8 text-lg">

              {item.desc}

            </p>

          </div>

        ))}

      </div>

      {/* AI ACTION PLAN */}

      <div className="mt-10 bg-gradient-to-r from-[#14532d] to-green-700 rounded-3xl p-10 text-white">

        <h2 className="text-4xl font-black mb-6">

          SoilENZ Smart Action Plan
        </h2>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-black mb-3">

              Phase 1
            </h3>

            <p className="text-green-100">

              Nitrogen balancing and pH correction.
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-black mb-3">

              Phase 2
            </h3>

            <p className="text-green-100">

              Organic compost and microbial enhancement.
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-black mb-3">

              Phase 3
            </h3>

            <p className="text-green-100">

              Irrigation optimization and crop monitoring.
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-black mb-3">

              Phase 4
            </h3>

            <p className="text-green-100">

              Carbon credit readiness and sustainability tracking.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RecommendationSection;