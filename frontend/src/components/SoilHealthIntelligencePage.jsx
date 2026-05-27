import React from "react";

import {
  MapPin,
  Leaf,
  Mountain,
  CloudRain,
  FlaskConical,
  Thermometer,
  CheckSquare,
} from "lucide-react";

function SoilHealthIntelligencePage({ report }) {

  if (!report) return null;

  return (

    <div className="w-[210mm] h-[285mm] bg-white mx-auto p-[8mm] overflow-hidden">

      <div className="border-[3px] border-[#14532d] rounded-[20px] p-3 h-full">

        {/* HEADER */}

        <div className="flex justify-between items-start border-b-[2px] border-[#14532d] pb-3">

          {/* LEFT */}

          <div>

            <div className="bg-[#14532d] text-white px-3 py-1 rounded-md text-[8px] font-bold inline-block mb-2">

              ARKASHINE INNOVATIONS | Soil ENZ Advisory Report

            </div>

            <h1 className="text-[24px] font-black leading-[26px]">

              SOIL HEALTH
              <br />
              INTELLIGENCE REPORT

            </h1>

          </div>

          {/* RIGHT */}

          <div className="text-right">

            <h2 className="text-[22px] font-black text-[#14532d]">

              SoilENZ

            </h2>

            <p className="text-[9px] text-blue-700 leading-4 font-medium mt-1">

              Advanced Soil Intelligence
              <br />
              from Arkashine Labs

            </p>

          </div>

        </div>

        {/* TOP INFO */}

        <div className="grid grid-cols-2 gap-3 mt-3">

          {/* FARMER INFO */}

          <div className="border border-gray-300 rounded-[16px] p-3">

            <div className="bg-[#14532d] text-white px-3 py-2 rounded-lg inline-block text-[10px] font-bold mb-3">

              FARMER INFORMATION

            </div>

            <div className="flex gap-4">

              {/* ICON */}

              <div className="w-[60px] h-[60px] rounded-full border-[3px] border-black flex items-center justify-center text-[28px]">

                👨‍🌾

              </div>

              {/* DETAILS */}

              <div className="flex-1 space-y-2 text-[10px]">

                <div className="grid grid-cols-[100px_10px_1fr]">

                  <span className="font-bold">

                    Name

                  </span>

                  <span>:</span>

                  <span>

                    {report.farmer_name || "N/A"}

                  </span>

                </div>

                <div className="grid grid-cols-[100px_10px_1fr]">

                  <span className="font-bold">

                    Mobile

                  </span>

                  <span>:</span>

                  <span>

                    {report.mobile || "N/A"}

                  </span>

                </div>

                <div className="grid grid-cols-[100px_10px_1fr]">

                  <span className="font-bold">

                    Land Location

                  </span>

                  <span>:</span>

                  <span>

                    {report.latlon || "N/A"}

                  </span>

                </div>

                <div className="grid grid-cols-[100px_10px_1fr]">

                  <span className="font-bold">

                    Crop

                  </span>

                  <span>:</span>

                  <span>

                    {report.crop || "N/A"}

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* REPORT DETAILS */}

          <div className="border border-gray-300 rounded-[16px] p-3">

            <div className="bg-[#14532d] text-white px-3 py-2 rounded-lg inline-block text-[10px] font-bold mb-3">

              REPORT DETAILS

            </div>

            <div className="space-y-4 text-[10px]">

              <div className="flex items-center gap-3">

                <CheckSquare size={18} />

                <span className="font-bold">

                  Date :

                </span>

                <span>

                  19 May 2026

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FlaskConical size={18} />

                <span className="font-bold">

                  Lab :

                </span>

                <span>

                  Arkashine Labs

                </span>

              </div>

              <div className="flex items-center gap-3">

                <Thermometer size={18} />

                <span className="font-bold">

                  Time :

                </span>

                <span>

                  10:35 PM

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* MAIN SECTION */}

        <div className="grid grid-cols-[120px_1fr_220px] gap-3 mt-4">

          {/* LEFT */}

          <div className="space-y-4">

            <div className="flex items-start gap-2">

              <MapPin size={16} />

              <div>

                <h3 className="font-bold text-[10px]">

                  Location

                </h3>

                <p className="text-[9px]">

                  {report.latlon || "N/A"}

                </p>

              </div>

            </div>

            <div className="flex items-start gap-2">

              <Leaf size={16} />

              <div>

                <h3 className="font-bold text-[10px]">

                  Crop

                </h3>

                <p className="text-[9px]">

                  {report.crop || "N/A"}

                </p>

              </div>

            </div>

            <div className="flex items-start gap-2">

              <Mountain size={16} />

              <div>

                <h3 className="font-bold text-[10px]">

                  Soil Type

                </h3>

                <p className="text-[9px]">

                  Black Soil

                </p>

              </div>

            </div>

            <div className="flex items-start gap-2">

              <CloudRain size={16} />

              <div>

                <h3 className="font-bold text-[10px]">

                  Rainfall

                </h3>

                <p className="text-[9px]">

                  Moderate

                </p>

              </div>

            </div>

          </div>

          {/* CENTER IMAGE */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="w-[210px] h-[300px] rounded-[70px] overflow-hidden border-[4px] border-gray-200 shadow-lg">

                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
                  alt="soil"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* SCORE */}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">

                <div className="bg-[#14532d] text-white rounded-2xl px-4 py-3 text-center shadow-xl">

                  <p className="text-[8px] font-bold uppercase tracking-wide text-green-200">

                    OVERALL SOIL FERTILITY

                  </p>

                  <h2 className="text-[18px] font-black text-orange-400">

                    MEDIUM

                  </h2>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-4">

            {/* SCORE */}

            <div className="border border-gray-300 rounded-[16px] p-3 text-center">

              <h2 className="text-[13px] font-black mb-3">

                SOIL HEALTH SCORE

              </h2>

              <div className="w-[130px] h-[65px] border-[10px] border-green-600 border-b-0 rounded-t-full mx-auto relative">

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">

                  <h3 className="text-[28px] font-black">

                    80

                  </h3>

                  <p className="text-orange-500 font-black text-[9px]">

                    MEDIUM

                  </p>

                </div>

              </div>

            </div>

            {/* INDICATORS */}

            <div className="border border-gray-300 rounded-[16px] p-3">

              <h2 className="text-[13px] font-black text-center mb-3">

                SOIL HEALTH INDICATORS

              </h2>

              <div className="grid grid-cols-5 gap-2 text-center">

                <div>

                  <p className="text-[8px] font-bold">

                    pH

                  </p>

                  <h3 className="text-[12px] font-black text-[#14532d]">

                    {report.ph || "N/A"}

                  </h3>

                </div>

                <div>

                  <p className="text-[8px] font-bold">

                    EC

                  </p>

                  <h3 className="text-[12px] font-black text-[#14532d]">

                    {report.ec || "N/A"}

                  </h3>

                </div>

                <div>

                  <p className="text-[8px] font-bold">

                    N

                  </p>

                  <h3 className="text-[12px] font-black text-[#14532d]">

                    {report.nitrogen || "N/A"}

                  </h3>

                </div>

                <div>

                  <p className="text-[8px] font-bold">

                    P

                  </p>

                  <h3 className="text-[12px] font-black text-[#14532d]">

                    {report.phosphorus || "N/A"}

                  </h3>

                </div>

                <div>

                  <p className="text-[8px] font-bold">

                    K

                  </p>

                  <h3 className="text-[12px] font-black text-[#14532d]">

                    {report.potassium || "N/A"}

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="grid grid-cols-2 gap-4 mt-4">

          {/* RECOMMENDATIONS */}

          <div className="border border-gray-300 rounded-2xl p-3">

            <h2 className="text-[14px] font-black mb-2">

              RECOMMENDATIONS

            </h2>

            <ul className="text-[9px] space-y-1 leading-4">

              <li>• Apply split nitrogen fertilizer doses</li>

              <li>• Improve organic compost usage</li>

              <li>• Use precision irrigation practices</li>

              <li>• Add micronutrient supplements</li>

              <li>• Improve soil organic carbon</li>

            </ul>

          </div>

          {/* SUMMARY */}

          <div className="border border-gray-300 rounded-2xl p-3">

            <h2 className="text-[14px] font-black mb-2">

              SOIL SUMMARY

            </h2>

            <div className="space-y-2 text-[9px]">

              <div className="flex justify-between">

                <span>Organic Carbon</span>

                <span>{report.organic_carbon || "0.52"}</span>

              </div>

              <div className="flex justify-between">

                <span>Nitrogen</span>

                <span>{report.nitrogen || "21.35"}</span>

              </div>

              <div className="flex justify-between">

                <span>Phosphorus</span>

                <span>{report.phosphorus || "21.35"}</span>

              </div>

              <div className="flex justify-between">

                <span>Potassium</span>

                <span>{report.potassium || "21.35"}</span>

              </div>

              <div className="flex justify-between">

                <span>pH</span>

                <span>{report.ph || "7.9"}</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SoilHealthIntelligencePage;