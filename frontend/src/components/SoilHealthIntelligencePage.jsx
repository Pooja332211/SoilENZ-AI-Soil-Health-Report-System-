import React from "react";

function InfoCard({
  title,
  value,
}) {

  return (

    <div className="bg-white border rounded-[16px] p-4">

      <p className="text-[10px] text-gray-500 font-bold">

        {title}

      </p>

      <h2 className="text-[18px] font-black mt-2 text-[#0f172a]">

        {value || "N/A"}

      </h2>

    </div>
  );
}

function Indicator({
  label,
  value,
}) {

  return (

    <div className="text-center">

      <p className="text-[10px] font-bold text-gray-500">

        {label}

      </p>

      <h2 className="text-[20px] font-black text-[#14532d] mt-1">

        {value || "N/A"}

      </h2>

    </div>
  );
}

function SoilHealthIntelligencePage({
  report,
}) {
  const data =
  report?.data || {};

const score =
  report?.soil_health?.score ?? 0;

  return (

    <div className="w-[210mm] min-h-[297mm] bg-[#f4f6f8] mx-auto p-[8mm]">

      {/* HEADER */}

      <div className="flex justify-between items-start">

        {/* LEFT */}

        <div>

          <div className="bg-[#14532d] text-white inline-block px-4 py-1 rounded-full text-[10px] font-black">

            ARKASHINE INNOVATIONS | SoilENZ AI Report

          </div>

          <h1 className="text-[34px] leading-[40px] font-black text-[#0f172a] mt-4">

            SOIL HEALTH
            <br />
            INTELLIGENCE REPORT

          </h1>

          <p className="text-blue-600 text-[12px] mt-2 font-semibold">

            AI-powered precision agriculture
            and soil analytics platform

          </p>

        </div>

        {/* RIGHT */}

        <div className="bg-[#14532d] text-white rounded-[18px] p-4 w-[250px]">

          <h2 className="text-[22px] leading-[28px] font-black">

            SOILENZ MEANS
            PRECISION

          </h2>

          <div className="mt-4 space-y-2 text-[11px] leading-6">

            <p>✓ Scientific soil analysis</p>

            <p>✓ AI-powered insights</p>

            <p>✓ Precision farming</p>

            <p>✓ Sustainable agriculture</p>

          </div>

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        {/* FARMER */}

        <div className="bg-white border rounded-[18px] p-5">

          <div className="bg-[#14532d] text-white inline-block px-4 py-2 rounded-xl text-[12px] font-black">

            FARMER INFORMATION

          </div>

          <div className="flex gap-5 mt-5">

            <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center text-[36px]">

              👨‍🌾

            </div>

            <div className="space-y-3 text-[13px]">

              <div className="flex gap-4">

                <span className="font-black w-[120px]">

                  Name

                </span>

                <span>
                  :
                </span>

                <span>
                  {data.farmer_name || "-"}
                </span>

              </div>

              <div className="flex gap-4">

                <span className="font-black w-[120px]">

                  Mobile

                </span>

                <span>
                  :
                </span>

                <span>
                  {data.phone_number || "-"}
                </span>

              </div>

              <div className="flex gap-4">

                <span className="font-black w-[120px]">

                  Location

                </span>

                <span>
                  :
                </span>

                <span>
                  {data.location || "-"}
                </span>

              </div>

              <div className="flex gap-4">

                <span className="font-black w-[120px]">

                  Crop

                </span>

                <span>
                  :
                </span>

                <span>
                  {data.crop || "-"}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* REPORT */}

        <div className="bg-white border rounded-[18px] p-5">

          <div className="bg-[#14532d] text-white inline-block px-4 py-2 rounded-xl text-[12px] font-black">

            REPORT DETAILS

          </div>

          <div className="space-y-5 mt-5 text-[14px]">

            <div className="flex items-center gap-4">

              📅

              <span className="font-black">

                Date :

              </span>

              <span>

  {data.report_date || "N/A"}

              </span>

            </div>

            <div className="flex items-center gap-4">

              🧪

              <span className="font-black">

                Lab :

              </span>

              <span>

                Arkashine Labs

              </span>

            </div>

            <div className="flex items-center gap-4">

              ⏱️

              <span className="font-black">

                Time :

              </span>

              <span>

{data.report_time || "N/A"}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* MIDDLE */}

      <div className="grid grid-cols-3 gap-4 mt-5">

        {/* LEFT */}

        <div className="space-y-5">

          <InfoCard
            title="Soil Type"
            value="Black Soil"
          />

          <InfoCard
            title="Rainfall"
            value="Moderate"
          />

          <InfoCard
            title="Climate"
            value="Semi-Arid"
          />

        </div>

        {/* CENTER IMAGE */}

        <div className="bg-white border rounded-[30px] overflow-hidden relative">

         <img
  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
  alt="farm"
  className="w-full h-[420px] object-cover"
/>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#14532d] text-white rounded-[20px] px-6 py-4 text-center shadow-xl">

            <p className="text-[11px] font-bold">

              OVERALL SOIL
              FERTILITY

            </p>

            <h2 className="text-[34px] font-black mt-1">

{
  report?.soil_health?.category ||
  "N/A"
}
            </h2>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-4">

          {/* SCORE */}

          <div className="bg-white border rounded-[18px] p-5 text-center">

            <h2 className="text-[24px] font-black text-[#0f172a]">

              SOIL HEALTH SCORE

            </h2>

            <div className="w-[180px] h-[90px] border-[14px] border-green-600 border-b-0 rounded-t-full mx-auto mt-5 flex items-end justify-center">

              <div className="mb-2">

                <div className="text-[42px] font-black text-[#0f172a]">

                  {score}

                </div>

                <div className="text-orange-500 font-black text-[12px]">

                 {report?.soil_health?.category || "N/A"}

                </div>

              </div>

            </div>

          </div>

          {/* INDICATORS */}

          <div className="bg-white border rounded-[18px] p-5">

            <h2 className="text-[22px] font-black text-[#0f172a] text-center">

              <div className="bg-white rounded-[24px] p-6 shadow-sm">
</div>
  <h2 className="text-[24px] font-black text-[#0f172a] leading-tight">

    SOIL HEALTH
    <br />
    INDICATORS

  </h2>
{/* INDICATORS */}

<div className="bg-white border rounded-[18px] p-5">

  <h2 className="text-[22px] font-black text-[#0f172a] text-center">

    SOIL HEALTH INDICATORS

  </h2>

  <div className="grid grid-cols-5 gap-2 mt-5">

    {[
      { label: "pH", value: data.ph },
      { label: "EC", value: data.ec },
      { label: "N", value: data.nitrogen },
      { label: "P", value: data.phosphorus },
      { label: "K", value: data.potassium },
    ].map((item, i) => (

      <div
        key={i}
        className="text-center"
      >

        <p className="text-[10px] text-gray-400 font-semibold">
          {item.label}
        </p>

        <p className="text-[15px] font-black text-[#166534]">
          {item.value || "-"}
        </p>

      </div>

    ))}

  </div>

</div>


            </h2>

            <div className="grid grid-cols-5 gap-3 mt-5">

             
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="bg-white border rounded-[18px] p-5 mt-5">

        <h2 className="text-[24px] font-black text-[#0f172a]">

          SOIL SUMMARY

        </h2>

        <div className="grid grid-cols-2 gap-10 mt-5 text-[13px]">

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>
                Organic Carbon
              </span>

              <span className="font-black">

                {data.organic_carbon}

              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Nitrogen
              </span>

              <span className="font-black">

                {data.nitrogen}

              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Phosphorus
              </span>

              <span className="font-black">

                {data.phosphorus}

              </span>

            </div>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>
                Potassium
              </span>

              <span className="font-black">

                {data.potassium}

              </span>

            </div>

            <div className="flex justify-between">

              <span>
                pH
              </span>

              <span className="font-black">

                {data.ph}

              </span>

            </div>

            <div className="flex justify-between">

              <span>
                EC
              </span>

              <span className="font-black">

                {data.ec}

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SoilHealthIntelligencePage;