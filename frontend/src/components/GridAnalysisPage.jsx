import React from "react";

function GridCard({
  title,
  value,
  status,
  color,
}) {

  return (

<div className="bg-white border rounded-[10px] p-1.5 shadow-sm">
      {/* HEADER */}

      <div className="flex justify-between items-center">

<h2 className="text-[11px] font-black text-[#0f172a]">
          {title}

        </h2>

        <div
className={`px-2 py-[2px] rounded-full text-white text-[8px] font-black ${color}`}        >
          {status}
        </div>

      </div>

      {/* HEATMAP */}

<div className="grid grid-cols-5 gap-1 mt-2">
        {Array.from({ length: 25 }).map(
          (_, index) => (

            <div

              key={index}

              className={`h-2 rounded-sm ${
                index % 4 === 0
                  ? "bg-yellow-400"
                  : index % 3 === 0
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}

            />
          )
        )}

      </div>

      {/* VALUE */}

      <div className="mt-2">

        <p className="text-gray-500 text-[10px]">

          Average

        </p>

<div className="text-[14px] font-black text-[#0f172a] mt-1">
          {value || "N/A"}

        </div>

      </div>

    </div>
  );
}

function GridAnalysisPage({ report }) {

  if (!report) return null;

  
  const data =
  report?.data || {};

  return (

<div className="w-[210mm] h-[297mm] bg-[#f4f6f8] mx-auto p-[8mm] overflow-hidden">
      {/* TOP */}

      <div className="flex justify-between items-start gap-4">

        {/* LEFT */}

        <div>

          <div className="bg-[#14532d] text-white inline-block px-4 py-1 rounded-full text-[10px] font-black">

            ARKASHINE INNOVATIONS | SoilENZ Advisory Report

          </div>

          <h1 className="text-[32px] leading-[38px] font-black text-[#0f172a] mt-4">

            SOILENZ GRID ANALYSIS –
            <br />
            FIELD WISE VARIABILITY

          </h1>

        </div>

        {/* RIGHT */}

        <div className="bg-[#14532d] text-white rounded-[18px] p-4 w-[240px]">

          <h2 className="text-[20px] leading-[24px] font-black">

            SOILENZ MEANS
            PRECISION

          </h2>

          <div className="mt-4 space-y-2 text-[11px] leading-5">

            <p>✓ Scientific AI analysis</p>

            <p>✓ Precision farming insights</p>

            <p>✓ Grid nutrient tracking</p>

            <p>✓ Sustainable soil management</p>

          </div>

        </div>

      </div>

      {/* INFO ROW */}

      <div className="grid grid-cols-4 gap-3 mt-6">

        <div className="bg-white border rounded-[16px] p-4 text-center">

          <p className="text-gray-500 font-semibold text-[10px]">

            Field Area

          </p>

          <h2 className="text-[18px] font-black mt-2">

            1 Acre

          </h2>

        </div>

        <div className="bg-white border rounded-[16px] p-4 text-center">

          <p className="text-gray-500 font-semibold text-[10px]">

            Grid Size

          </p>

          <h2 className="text-[18px] font-black mt-2">

            30m x 30m

          </h2>

        </div>

        <div className="bg-white border rounded-[16px] p-4 text-center">

          <p className="text-gray-500 font-semibold text-[10px]">

            Total Grids

          </p>

          <h2 className="text-[18px] font-black mt-2">

            16

          </h2>

        </div>

        <div className="bg-white border rounded-[16px] p-4 text-center">

          <p className="text-gray-500 font-semibold text-[10px]">

            Analysis Date

          </p>

          <h2 className="text-[18px] font-black mt-2">

            {data.analysis_date || "N/A"}

          </h2>

        </div>

      </div>

      {/* GRID */}
{/* GRID */}

<div className="grid grid-cols-4 gap-2 mt-4">
  <GridCard title="pH (0-14)" value={data.ph} status="Alkaline" color="bg-orange-500" />

  <GridCard title="EC (dS/m)" value={data.ec} status="Normal" color="bg-green-600" />

  <GridCard title="Organic Carbon (%)" value={data.organic_carbon} status="Medium" color="bg-yellow-500" />

  <GridCard title="Nitrogen (kg/ha)" value={data.nitrogen} status="Low" color="bg-red-500" />

  <GridCard title="Phosphorus (kg/ha)" value={data.phosphorus} status="Medium" color="bg-yellow-500" />

  <GridCard title="Potassium (kg/ha)" value={data.potassium} status="High" color="bg-green-700" />

  <GridCard title="Calcium (meq/100g)" value={data.calcium} status="Sufficient" color="bg-green-600" />

  <GridCard title="Magnesium (meq/100g)" value={data.magnesium} status="Sufficient" color="bg-green-600" />

  <GridCard title="Sulfur (ppm)" value={data.sulfur} status="Medium" color="bg-yellow-500" />

  <GridCard title="Iron (ppm)" value={data.iron} status="High" color="bg-green-700" />

  <GridCard title="Zinc (ppm)" value={data.zinc} status="High" color="bg-green-700" />

  <GridCard title="Manganese (ppm)" value={data.manganese} status="Low" color="bg-red-500" />

  <GridCard title="Copper (ppm)" value={data.copper} status="Medium" color="bg-yellow-500" />

  <GridCard title="Boron (ppm)" value={data.boron} status="Low" color="bg-red-500" />

  <GridCard
  title="Soil Score"
  value={report?.soil_health?.score}
  status="Score"
  color="bg-blue-600"
/>

<GridCard
  title="Organic Matter"
  value={data.organic_carbon}
  status="Derived"
  color="bg-green-700"
/>
</div>

      {/* INSIGHTS */}

<div className="bg-white border rounded-[18px] p-4 mt-4 shadow-sm">
<h2 className="text-[16px] font-black text-[#0f172a]">
          GRID ANALYSIS INSIGHTS

        </h2>

<div className="grid grid-cols-2 gap-4 mt-2 text-[10px] text-gray-700 leading-5">
          <div>

            <p>
              • Soil pH is moderately alkaline
            </p>

            <p>
              • Nitrogen deficiency observed
            </p>

            <p>
              • Potassium concentration high
            </p>

            <p>
              • Organic carbon medium
            </p>

          </div>

          <div>

            <p>
              • Precision nitrogen dosing advised
            </p>

            <p>
              • Sulfur supplementation required
            </p>

            <p>
              • Balanced irrigation recommended
            </p>

            <p>
              • Organic compost improves fertility
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GridAnalysisPage;