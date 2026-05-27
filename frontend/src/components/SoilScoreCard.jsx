import React from "react";

function SoilScoreCard({ score, carbonScore }) {

  const getColor = (value) => {

    if (value >= 75) return "#15803d";

    if (value >= 50) return "#d97706";

    return "#dc2626";
  };

  return (

    <div className="grid grid-cols-2 gap-8">

      {/* SOIL SCORE */}

      <div className="bg-white rounded-3xl shadow-2xl p-10">

        <h2 className="text-4xl font-black text-[#14532d] mb-10">

          Soil Health Score

        </h2>

        <div className="flex items-center justify-center">

          <div
            className="relative w-72 h-72 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                ${getColor(score)} ${score * 3.6}deg,
                #e5e7eb 0deg
              )`,
            }}
          >

            <div className="absolute w-56 h-56 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">

              <div
                className="text-7xl font-black"
                style={{
                  color: getColor(score),
                }}
              >

                {score}

              </div>

              <p className="text-2xl font-bold text-gray-600 mt-3">

                / 100

              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 text-center">

          <div
            className="inline-block px-8 py-3 rounded-full text-white text-2xl font-bold"
            style={{
              background: getColor(score),
            }}
          >

            {score >= 75
              ? "Healthy Soil"
              : score >= 50
              ? "Moderate Soil"
              : "Poor Soil"}

          </div>

        </div>

      </div>

      {/* CARBON SCORE */}

      <div className="bg-[#14532d] rounded-3xl shadow-2xl p-10 text-white">

        <h2 className="text-4xl font-black mb-10">

          Carbon Intelligence

        </h2>

        <div className="flex items-center justify-center">

          <div
            className="relative w-72 h-72 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                #22c55e ${carbonScore * 3.6}deg,
                #1f2937 0deg
              )`,
            }}
          >

            <div className="absolute w-56 h-56 bg-[#14532d] rounded-full flex flex-col items-center justify-center border-4 border-green-300">

              <div className="text-7xl font-black">

                {carbonScore}

              </div>

              <p className="text-2xl font-bold mt-3">

                Carbon Score

              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-5">

          <div className="bg-white/10 rounded-2xl p-6 text-center">

            <div className="text-5xl font-black">

              1474

            </div>

            <p className="text-xl mt-2">

              CO₂ Saved

            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">

            <div className="text-5xl font-black">

              14.2

            </div>

            <p className="text-xl mt-2">

              Credits

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SoilScoreCard;