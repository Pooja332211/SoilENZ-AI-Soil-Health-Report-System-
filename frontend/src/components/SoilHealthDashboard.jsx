import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";
import React from "react";

import {
  MapPin,
  FlaskConical,
  Droplets,
  Thermometer,
  Leaf,
  Mountain,
  CloudRain,
  CheckSquare,
} from "lucide-react";

function SoilHealthIntelligencePage({ report }) {

  if (!report) return null;

  return (

    <div className="report-page bg-white text-black">

      {/* =======================================
         TOP HEADER
      ======================================= */}

      <div className="flex justify-between items-start border-b pb-5">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-4">

            <div className="bg-[#14532d] text-white p-4 rounded-2xl">

              <Leaf size={40} />

            </div>

            <div>

              <h1 className="text-6xl font-black leading-tight">

                SOIL HEALTH
                <br />
                INTELLIGENCE REPORT
              </h1>

              <div className="bg-[#14532d] text-white px-4 py-1 rounded-lg inline-block mt-2 text-sm font-bold">

                Powered by SoilENZ
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="text-right">

          <h2 className="text-5xl font-black text-[#14532d]">

            SoilENZ
          </h2>

          <p className="text-blue-700 font-semibold mt-2">

            Advanced Soil Intelligence
            <br />
            from Arkashine Labs
          </p>

        </div>

      </div>

      {/* =======================================
         TOP INFO SECTION
      ======================================= */}

      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* FARMER INFO */}

        <div className="border rounded-2xl p-5">

          <div className="bg-[#14532d] text-white px-4 py-2 rounded-lg inline-block text-sm font-bold mb-5">

            FARMER INFORMATION
          </div>

          <div className="grid grid-cols-[100px_1fr] gap-5">

            {/* ICON */}

            <div className="flex justify-center">

              <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-5xl">

                👨‍🌾

              </div>

            </div>

            {/* DETAILS */}

            <div className="space-y-3">

              <div className="flex">

                <span className="w-36 font-semibold">

                  Name
                </span>

                <span>

                  : {report.farmer_name || "N/A"}

                </span>

              </div>

              <div className="flex">

                <span className="w-36 font-semibold">

                  Mobile
                </span>

                <span>

                  : {report.mobile || "N/A"}

                </span>

              </div>

              <div className="flex">

                <span className="w-36 font-semibold">

                  Land Location
                </span>

                <span>

                  : {report.latlon || "N/A"}

                </span>

              </div>

              <div className="flex">

                <span className="w-36 font-semibold">

                  Crop
                </span>

                <span>

                  : {report.crop || "N/A"}

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* REPORT DETAILS */}

        <div className="border rounded-2xl p-5">

          <div className="bg-[#14532d] text-white px-4 py-2 rounded-lg inline-block text-sm font-bold mb-5">

            REPORT DETAILS
          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <CheckSquare />

              <span className="font-semibold">

                Date of Analysis :
              </span>

              <span>

                19 May 2026
              </span>

            </div>

            <div className="flex items-center gap-4">

              <FlaskConical />

              <span className="font-semibold">

                Lab Name :
              </span>

              <span>

                Arkashine Labs
              </span>

            </div>

            <div className="flex items-center gap-4">

              <Thermometer />

              <span className="font-semibold">

                Report Time :
              </span>

              <span>

                10:35 PM
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =======================================
         MAIN CONTENT
      ======================================= */}

      <div className="grid grid-cols-[220px_1fr_320px] gap-6 mt-8">

        {/* LEFT SIDE */}

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <MapPin size={20} />

            <div>

              <h3 className="font-bold">

                Location
              </h3>

              <p className="text-sm">

                {report.latlon || "N/A"}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Leaf size={20} />

            <div>

              <h3 className="font-bold">

                Crop
              </h3>

              <p className="text-sm">

                {report.crop || "N/A"}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Mountain size={20} />

            <div>

              <h3 className="font-bold">

                Soil Type
              </h3>

              <p className="text-sm">

                Black Soil
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <CloudRain size={20} />

            <div>

              <h3 className="font-bold">

                Rainfall
              </h3>

              <p className="text-sm">

                Moderate
              </p>

            </div>

          </div>

        </div>

        {/* CENTER IMAGE */}

        <div className="flex justify-center">

          <div className="bg-gradient-to-b from-sky-100 to-green-100 rounded-full w-[300px] h-[420px] flex items-center justify-center overflow-hidden border">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2909/2909762.png"
              alt="crop"
              className="w-[220px]"
            />

          </div>

        </div>

        {/* RIGHT SCORE */}

        <div>

          <div className="border rounded-2xl p-6 text-center">

            <h2 className="text-4xl font-black mb-6">

              SOIL HEALTH SCORE
            </h2>

            <div className="relative w-56 h-28 mx-auto">

              <div className="w-full h-full border-t-[20px] border-l-[20px] border-r-[20px] rounded-t-full border-green-500"></div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">

                <h1 className="text-7xl font-black">

                  {report.soil_score || 50}

                </h1>

                <p className="text-orange-500 font-black text-3xl">

                  MEDIUM
                </p>

              </div>

            </div>

          </div>

          {/* INDICATORS */}

          <div className="mt-6 border rounded-2xl p-5">

            <h2 className="text-3xl font-black mb-5">

              SOIL HEALTH INDICATORS
            </h2>

            <div className="grid grid-cols-5 gap-3 text-center">

              <div>

                <p className="font-bold">

                  pH
                </p>

                <h3 className="font-black text-xl">

                  {report.ph || "N/A"}

                </h3>

              </div>

              <div>

                <p className="font-bold">

                  EC
                </p>

                <h3 className="font-black text-xl">

                  {report.ec || "N/A"}

                </h3>

              </div>

              <div>

                <p className="font-bold">

                  N
                </p>

                <h3 className="font-black text-xl">

                  {report.nitrogen || "N/A"}

                </h3>

              </div>

              <div>

                <p className="font-bold">

                  P
                </p>

                <h3 className="font-black text-xl">

                  {report.phosphorus || "N/A"}

                </h3>

              </div>

              <div>

                <p className="font-bold">

                  K
                </p>

                <h3 className="font-black text-xl">

                  {report.potassium || "N/A"}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =======================================
         BOTTOM SECTION
      ======================================= */}

      <div className="grid grid-cols-2 gap-6 mt-10">

        {/* RECOMMENDATIONS */}

        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-black mb-5">

            RECOMMENDATION
          </h2>

          <ul className="space-y-3 text-sm leading-7">

            <li>
              • Apply balanced nitrogen fertilizer
            </li>

            <li>
              • Improve organic compost usage
            </li>

            <li>
              • Maintain pH stability
            </li>

            <li>
              • Improve irrigation efficiency
            </li>

            <li>
              • Introduce micronutrient support
            </li>

          </ul>

        </div>

        {/* SUMMARY */}

        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-black mb-5">

            SOIL SUMMARY
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">

              <span>Organic Carbon</span>

              <span>

                {report.organic_carbon || "N/A"}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Nitrogen</span>

              <span>

                {report.nitrogen || "N/A"}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Phosphorus</span>

              <span>

                {report.phosphorus || "N/A"}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Potassium</span>

              <span>

                {report.potassium || "N/A"}
              </span>

            </div>

            <div className="flex justify-between">

              <span>pH</span>

              <span>

                {report.ph || "N/A"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SoilHealthIntelligencePage;