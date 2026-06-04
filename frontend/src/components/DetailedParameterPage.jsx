import React from "react";

function ParameterRow({
  index,
  parameter,
  value,
  unit,
  status,
  ideal,
  interpretation,
}) {

  const statusColor =
    status === "High"
      ? "text-green-700"
      : status === "Medium"
      ? "text-yellow-600"
      : status === "Low"
      ? "text-red-500"
      : "text-blue-600";

  return (

    <div className="grid grid-cols-[35px_150px_60px_65px_80px_80px_1fr] items-center border-b py-1 text-[10px]">

      <div className="font-bold text-gray-500">
        {index}
      </div>

      <div className="font-bold text-[#0f172a]">
        {parameter}
      </div>

      <div className={`font-bold ${statusColor}`}>
        {value || "-"}
      </div>

      <div>
        {unit}
      </div>

      <div className={`font-bold ${statusColor}`}>
        {status}
      </div>

      <div>
        {ideal}
      </div>

      <div className="text-blue-700 leading-4">
        {interpretation}
      </div>

    </div>
  );
}

function getStatus(value, low, high) {

  const val = parseFloat(value || 0);

  if (val < low)
    return "Low";

  if (val > high)
    return "High";

  return "Medium";
}

function DetailedParameterPage({ report }) {

  if (!report) return null;

const data =
  report?.data || {};

  const rows = [

  {
    parameter: "pH (0-14)",
    value: data.ph,
    unit: "pH",
    ideal: "6.0 - 7.5",
    interpretation: "Alkaline soil, may impact nutrient availability",
    status: parseFloat(data.ph) > 7.5 ? "Alkaline" : "Normal",
  },

  {
    parameter: "Electrical Conductivity (EC)",
    value: data.ec,
    unit: "dS/m",
    ideal: "< 4.0",
    interpretation: "Good, no salinity stress",
    status: "Normal",
  },

  {
    parameter: "Organic Carbon (OC)",
    value: data.organic_carbon,
    unit: "%",
    ideal: "> 0.75",
    interpretation: "Medium organic matter",
    status: getStatus(data.organic_carbon, 0.5, 0.75),
  },

  {
    parameter: "Nitrogen (N)",
    value: data.nitrogen,
    unit: "kg/ha",
    ideal: "> 280",
    interpretation: "Deficient, apply urea split doses",
    status: getStatus(data.nitrogen, 280, 500),
  },

  {
    parameter: "Phosphorus (P)",
    value: data.phosphorus,
    unit: "kg/ha",
    ideal: "> 22",
    interpretation: "Medium supply level",
    status: getStatus(data.phosphorus, 22, 50),
  },

  {
    parameter: "Potassium (K)",
    value: data.potassium,
    unit: "kg/ha",
    ideal: "> 280",
    interpretation: "High, no need for potash fertilizer",
    status: getStatus(data.potassium, 120, 280),
  },

  {
    parameter: "Calcium (Ca)",
    value: data.calcium,
    unit: "meq/100g",
    ideal: "> 2.0",
    interpretation: "Sufficient for crop",
    status: "Sufficient",
  },

  {
    parameter: "Magnesium (Mg)",
    value: data.magnesium,
    unit: "meq/100g",
    ideal: "> 1.0",
    interpretation: "Sufficient Mg",
    status: "Sufficient",
  },

  {
    parameter: "Sulfur (S)",
    value: data.sulfur,
    unit: "ppm",
    ideal: "> 10",
    interpretation: "Deficient, apply sulfur",
    status: getStatus(data.sulfur, 10, 40),
  },

  {
    parameter: "Iron (Fe)",
    value: data.iron,
    unit: "ppm",
    ideal: "> 4.5",
    interpretation: "Adequate, no need for iron",
    status: "Adequate",
  },

  {
    parameter: "Manganese (Mn)",
    value: data.manganese,
    unit: "ppm",
    ideal: "> 2.0",
    interpretation: "Deficient, apply MnSO₄",
    status: getStatus(data.manganese, 2.0, 10),
  },

  {
    parameter: "Copper (Cu)",
    value: data.copper,
    unit: "ppm",
    ideal: "> 0.6",
    interpretation: "High, no need for copper",
    status: getStatus(data.copper, 0.6, 2),
  },

  {
    parameter: "Zinc (Zn)",
    value: data.zinc,
    unit: "ppm",
    ideal: "> 0.2",
    interpretation: "High, no need for zinc",
    status: getStatus(data.zinc, 0.2, 4),
  },

  {
    parameter: "Boron (B)",
    value: data.boron,
    unit: "ppm",
    ideal: "> 0.5",
    interpretation: "Marginal, may affect growth",
    status: getStatus(data.boron, 0.5, 1.5),
  },

];

  return (

    <div className="w-[210mm] -h-[297mm] bg-[#f4f6f8] mx-auto p-[10mm]">

      {/* TOP */}

      <div className="flex justify-between items-start">

        {/* LEFT */}

        <div>

          <h1 className="text-[36px] leading-[42px] font-black text-[#0f172a]">

            ARKASHINE SOILENZ
            RESULTS –
            <br />
            DETAILED 14 PARAMETER
            TEST

          </h1>

          <div className="mt-5">

            <h2 className="text-[#14532d] text-2xl font-black">

              SoilENZ

            </h2>

            <p className="text-blue-600 font-semibold">

              Advanced Soil Intelligence
              <br />
              from Arkashine Labs

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-[#14532d] text-white rounded-[24px] p-7 w-[260px]">

          <h2 className="text-xl font-black">

            SOILENZ MEANS
            PRECISION

          </h2>

          <div className="mt-5 space-y-3 text-[15px] leading-7">

            <p>
              ✓ Scientific 14 parameter soil test
            </p>

            <p>
              ✓ Lab grade accuracy in your field
            </p>

            <p>
              ✓ Helps in smart recommendation
            </p>

            <p>
              ✓ Enables data-driven farming
            </p>

            <p>
              ✓ Improves soil health
            </p>

          </div>

        </div>

      </div>

      {/* DATE */}

      <div className="flex justify-end mt-5">

        <div className="text-blue-700 font-black text-lg">

          Analysis Date : {data.report_date || "N/A"}
          Analysis Time : {data.report_time || "N/A"}
        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-[24px] border shadow-sm mt-5 overflow-hidden">

        {/* HEADER */}

<div className="grid grid-cols-[35px_150px_60px_65px_80px_80px_1fr] bg-[#14532d] text-white px-3 py-2 font-black text-[10px]">
          <div>#</div>
          <div>Parameter</div>
          <div>Value</div>
          <div>Unit</div>
          <div>Status</div>
          <div>Ideal Range</div>
          <div>Interpretation</div>

        </div>

        {/* BODY */}

        <div className="px-5">

          {rows.map((item, index) => (

            <ParameterRow
              key={index}
              index={index + 1}
              parameter={item.parameter}
              value={item.value}
              unit={item.unit}
              status={item.status}
              ideal={item.ideal}
              interpretation={item.interpretation}
            />

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-8 flex justify-between items-center">

        <div className="text-blue-700 font-black text-lg">

          Analysis Method:
          Spectroscopy + AI Interpretation

        </div>

        <div className="text-gray-500 font-semibold">

          SoilENZ Enterprise Intelligence Engine

        </div>

      </div>

    </div>
  );
}

export default DetailedParameterPage;