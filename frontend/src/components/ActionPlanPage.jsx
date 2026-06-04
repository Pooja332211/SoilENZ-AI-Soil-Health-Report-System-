import React from "react";

const defaultAmendments = 
   [
  {
    name: "FYM / Compost",
    dose: "1500 – 2000 kg",
    purpose: "Improve organic matter & soil biology",
    timing: "Pre sowing",
    priority: "HIGH",
    icon: "🪴",
  },
  {
    name: "Vermicompost",
    dose: "500 kg",
    purpose: "Improve microbial activity",
    timing: "Pre sowing",
    priority: "HIGH",
    icon: "🪱",
  },
  {
    name: "Gypsum / Dolomite",
    dose: "100 kg",
    purpose: "Improve Mg sufficiency & balance",
    timing: "Pre sowing",
    priority: "HIGH",
    icon: "⚪",
  },
  {
    name: "Urea (46% N)",
    dose: "55 kg",
    purpose: "Nitrogen supply",
    timing: "Split dose",
    priority: "HIGH",
    icon: "🧪",
  },
  {
    name: "DAP (18-46-0)",
    dose: "40 kg",
    purpose: "Basal phosphorus supply",
    timing: "Basal",
    priority: "MEDIUM",
    icon: "🧴",
  },
  {
    name: "MOP (0-0-60)",
    dose: "No need",
    purpose: "Potassium already sufficient",
    timing: "Basal",
    priority: "LOW",
    icon: "🟢",
  },
];

function ActionPlanPage({ report }) {

  const soil = report?.data || {};

  const amendments =
    Array.isArray(report?.action_plan) &&
    report.action_plan.length > 0
      ? report.action_plan
      : defaultAmendments;

  const corrections = [];

if (Number(soil.nitrogen) < 280)
  corrections.push(
    "Low nitrogen → apply split urea doses"
  );

if (Number(soil.phosphorus) < 22)
  corrections.push(
    "Low phosphorus → apply basal DAP"
  );

if (Number(soil.organic_carbon) < 0.75)
  corrections.push(
    "Improve organic matter → apply FYM"
  );

if (Number(soil.sulfur) < 10)
  corrections.push(
    "Apply sulfur source"
  );

const low = [];
const medium = [];
const high = [];

if (Number(soil.nitrogen) < 280)
  low.push("Nitrogen");

if (Number(soil.manganese) < 2)
  low.push("Manganese");

if (Number(soil.boron) < 0.5)
  low.push("Boron");

if (Number(soil.organic_carbon) < 0.75)
  medium.push("Organic Carbon");

if (Number(soil.phosphorus) < 50)
  medium.push("Phosphorus");

if (Number(soil.potassium) > 280)
  high.push("Potassium");

if (Number(soil.zinc) > 2)
  high.push("Zinc");

  return (

<div className="w-[210mm] h-[297mm] bg-[#f4f6f8] mx-auto p-[8mm] overflow-hidden">
      {/* HEADER */}

      <div>

        <h1 className="text-[34px] font-black text-[#0f172a]">

          SOIL AMENDMENT & ACTION PLAN

        </h1>

        <p className="text-blue-600 text-[12px] mt-1 font-semibold">

          Science-driven solutions to improve
          nutrient balance and crop productivity

        </p>

      </div>

      {/* TABLE */}

      <div className="bg-white border rounded-[18px] mt-5 overflow-hidden shadow-sm">

        {/* HEADER */}

        <div className="grid grid-cols-5 bg-[#14532d] text-white px-4 py-3 text-[11px] font-black">

          <div>Input / Amendment</div>
          <div>Dose (Per Acre)</div>
          <div>Purpose</div>
          <div>Timing</div>
          <div>Priority</div>

        </div>

        {/* ROWS */}

        {amendments.map((item, index) => (

          <div
            key={index}
            className="grid grid-cols-5 items-center px-4 py-4 border-b text-[11px]"
          >

            {/* NAME */}

            <div className="flex items-center gap-3 font-black text-[#14532d]">

              <span className="text-[22px]">

                {item.icon}

              </span>

              {item.name}

            </div>

            {/* DOSE */}

            <div className="font-bold">

              {item.dose}

            </div>

            {/* PURPOSE */}

            <div className="text-blue-600">

              {item.purpose}

            </div>

            {/* TIMING */}

            <div>

              {item.timing}

            </div>

            {/* PRIORITY */}

            <div
              className={`font-black ${
                item.priority === "HIGH"
                  ? "text-red-500"
                  : item.priority === "MEDIUM"
                  ? "text-orange-500"
                  : "text-black"
              }`}
            >

              • {item.priority}

            </div>

          </div>

        ))}

      </div>

      {/* TIMELINE */}

      <div className="bg-white border rounded-[18px] p-5 mt-5 shadow-sm">

        <h2 className="text-[22px] font-black text-[#0f172a]">

          ACTION PLAN TIMELINE

        </h2>

        <div className="grid grid-cols-4 gap-4 mt-6">

          {[
            {
              icon: "🚜",
              title: "Pre Sowing",
              subtitle: "(0–7 Days)",
              points: [
                "Apply FYM / Compost",
                "Apply Gypsum",
                "Prepare field",
                "Improve drainage",
              ],
            },
            {
              icon: "🌱",
              title: "Basal Dose",
              subtitle: "(At Sowing)",
              points: [
                "Apply DAP",
                "Apply MgSO₄",
                "Apply FeSO₄",
                "Apply Boron",
              ],
            },
            {
              icon: "🌾",
              title: "During Growth",
              subtitle: "(20–45 DAS)",
              points: [
                "Split urea application",
                "Monitor deficiency",
                "Irrigation management",
                "Weed control",
              ],
            },
            {
              icon: "📋",
              title: "Pre Harvest",
              subtitle: "(90–120 DAS)",
              points: [
                "Balanced irrigation",
                "Avoid excess nitrogen",
                "Harvest at maturity",
              ],
            },
          ].map((step, i) => (

            <div
              key={i}
              className="text-center"
            >

              <div className="text-[50px]">

                {step.icon}

              </div>

              <h2 className="font-black text-[16px] mt-2">

                {step.title}

              </h2>

              <p className="text-blue-600 text-[11px] font-bold">

                {step.subtitle}

              </p>

              <div className="text-left text-[11px] mt-4 text-gray-700 leading-6">

                {step.points.map(
                  (point, idx) => (

                    <p key={idx}>
                      • {point}
                    </p>
                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM */}

      <div className="grid grid-cols-2 gap-4 mt-5">

        {/* CORRECTIONS */}

        <div className="bg-white border rounded-[18px] p-5 shadow-sm">

          <h2 className="text-[20px] font-black text-blue-700">

            IMPORTANT CORRECTIONS

          </h2>

          <div className="mt-4 text-[12px] text-gray-700 leading-7">

  {corrections.map((item, index) => (
    <p key={index}>
      ✓ {item}
    </p>
  ))}

  <p>✓ Maintain proper drainage</p>

</div>

        </div>

        {/* SUMMARY */}

        <div className="bg-white border rounded-[18px] p-5 shadow-sm">

          <h2 className="text-[20px] font-black text-blue-700">

            KEY SOIL TEST SUMMARY

          </h2>

          <div className="mt-4 text-[12px] text-gray-700 leading-7">

            <p>

  🔴 Low: {low.join(", ") || "None"}

</p>

<p>

  🟠 Medium: {medium.join(", ") || "None"}

</p>

<p>

  🟢 High: {high.join(", ") || "None"}

</p>

<p>

  🔵 pH:
  {Number(soil.ph) > 7.5
    ? " Alkaline"
    : " Normal"}

</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ActionPlanPage;