import React from "react";

import {
  User,
  Phone,
  Leaf,
  MapPin,
} from "lucide-react";

function FarmerInfoCard({ report }) {

  if (!report) return null;

  return (

    <div className="report-page">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            FARMER INFORMATION

          </h1>

          <p className="text-gray-500 mt-2">

            AI Extracted Soil Intelligence
          </p>

        </div>

        <div className="bg-[#14532d] text-white px-6 py-3 rounded-2xl font-bold">

          ACTIVE REPORT

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {/* NAME */}

        <div className="bg-[#f5f7f5] p-6 rounded-2xl border">

          <div className="flex items-center gap-4">

            <User className="text-[#14532d]" size={34} />

            <div>

              <p className="text-gray-500">

                Farmer Name
              </p>

              <h2 className="font-black text-[#14532d]">

                {report.farmer_name || "N/A"}

              </h2>

            </div>

          </div>

        </div>

        {/* MOBILE */}

        <div className="bg-[#f5f7f5] p-6 rounded-2xl border">

          <div className="flex items-center gap-4">

            <Phone className="text-[#14532d]" size={34} />

            <div>

              <p className="text-gray-500">

                Mobile Number
              </p>

              <h2 className="font-black text-[#14532d]">

                {report.mobile || "N/A"}

              </h2>

            </div>

          </div>

        </div>

        {/* CROP */}

        <div className="bg-[#f5f7f5] p-6 rounded-2xl border">

          <div className="flex items-center gap-4">

            <Leaf className="text-[#14532d]" size={34} />

            <div>

              <p className="text-gray-500">

                Crop
              </p>

              <h2 className="font-black text-[#14532d]">

                {report.crop || "N/A"}

              </h2>

            </div>

          </div>

        </div>

        {/* LATLON */}

        <div className="bg-[#f5f7f5] p-6 rounded-2xl border">

          <div className="flex items-center gap-4">

            <MapPin className="text-[#14532d]" size={34} />

            <div>

              <p className="text-gray-500">

                Land Coordinates
              </p>

              <h2 className="font-black text-[#14532d]">

                {report.latlon || "N/A"}

              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* SUMMARY */}

      <div className="mt-10 bg-[#f8faf8] border border-green-200 rounded-2xl p-8">

        <h2 className="text-3xl font-black text-[#14532d] mb-4">

          AI Soil Summary

        </h2>

        <p className="text-gray-700 leading-8">

          The uploaded soil report indicates moderate fertility
          with strong potassium availability and balanced organic
          carbon. Nitrogen optimization and micronutrient support
          are recommended for improving crop productivity and
          long-term soil sustainability.

        </p>

      </div>

    </div>
  );
}

export default FarmerInfoCard;