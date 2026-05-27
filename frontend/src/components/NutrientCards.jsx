import React from "react";

import {
  FlaskConical,
  Leaf,
  Waves,
  Sprout,
  Activity,
  TestTube,
} from "lucide-react";

function NutrientCards({ report }) {

  const nutrients = [

    {
      title: "Nitrogen",
      value: report.nitrogen,
      unit: "kg/ha",
      color: "from-red-500 to-red-700",
      icon: <Leaf size={40} />,
      status: "Low",
    },

    {
      title: "Phosphorus",
      value: report.phosphorus,
      unit: "kg/ha",
      color: "from-orange-400 to-orange-600",
      icon: <FlaskConical size={40} />,
      status: "Moderate",
    },

    {
      title: "Potassium",
      value: report.potassium,
      unit: "kg/ha",
      color: "from-green-500 to-green-700",
      icon: <Sprout size={40} />,
      status: "High",
    },

    {
      title: "Organic Carbon",
      value: report.organic_carbon,
      unit: "%",
      color: "from-blue-500 to-blue-700",
      icon: <Activity size={40} />,
      status: "Healthy",
    },

    {
      title: "Soil pH",
      value: report.ph,
      unit: "",
      color: "from-purple-500 to-purple-700",
      icon: <TestTube size={40} />,
      status: "Basic",
    },

    {
      title: "Sulfur",
      value: report.sulfur,
      unit: "ppm",
      color: "from-yellow-400 to-yellow-600",
      icon: <Waves size={40} />,
      status: "Balanced",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Nutrient Intelligence

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            AI-based Soil Nutrient Analytics

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          14 PARAMETERS ANALYZED

        </div>

      </div>

      <div className="grid grid-cols-3 gap-8">

        {nutrients.map((item, index) => (

          <div
            key={index}
            className={`rounded-3xl p-8 text-white bg-gradient-to-br ${item.color} shadow-xl`}
          >

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-3xl font-black">

                  {item.title}

                </h2>

                <p className="text-lg mt-2 opacity-90">

                  {item.status}

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

              <p className="text-2xl mt-3">

                {item.unit}

              </p>

            </div>

            {/* STATUS BAR */}

            <div className="mt-8">

              <div className="w-full bg-white/20 rounded-full h-4">

                <div
                  className="bg-white h-4 rounded-full"
                  style={{
                    width: `${Math.min(item.value, 100)}%`,
                  }}
                ></div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* INSIGHTS */}

      <div className="mt-10 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <h2 className="text-3xl font-black text-[#14532d] mb-5">

          AI Nutrient Insights

        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow">

            <h3 className="text-2xl font-bold text-red-600">

              Nitrogen Deficiency

            </h3>

            <p className="text-lg text-gray-600 mt-3">

              Soil shows moderate nitrogen stress requiring balanced
              fertilizer application.

            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <h3 className="text-2xl font-bold text-green-700">

              Strong Potassium Levels

            </h3>

            <p className="text-lg text-gray-600 mt-3">

              Potassium reserves are strong and suitable for crop growth.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NutrientCards;