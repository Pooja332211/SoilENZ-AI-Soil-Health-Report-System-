import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";
import React from "react";

function ActionPlanPage() {

  const amendments = [

    {
      input: "FYM / Compost",
      dose: "1500 – 2000 kg",
      purpose:
        "Improve organic matter & soil biology",
      timing: "Pre sowing",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🪵",
    },

    {
      input: "Vermicompost",
      dose: "500 kg",
      purpose:
        "Improve microbial activity",
      timing: "Pre sowing",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🪱",
    },

    {
      input: "Gypsum / Dolomite",
      dose: "100 kg",
      purpose:
        "Improve Mg deficiency & balance",
      timing: "Pre sowing",
      priority: "HIGH",
      color: "text-red-600",
      icon: "⚪",
    },

    {
      input: "Urea (46% N)",
      dose: "55 kg",
      purpose:
        "Nitrogen supply",
      timing: "Split dose",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🧪",
    },

    {
      input: "DAP (18-46-0)",
      dose: "40 kg",
      purpose:
        "Basal phosphorus supply",
      timing: "Basal",
      priority: "MEDIUM",
      color: "text-orange-500",
      icon: "🧴",
    },

    {
      input: "MOP (0-0-60)",
      dose: "No need",
      purpose:
        "Potassium already sufficient",
      timing: "Basal",
      priority: "LOW",
      color: "text-black",
      icon: "🟢",
    },

    {
      input: "Magnesium Sulphate",
      dose: "25 kg",
      purpose:
        "Correct Mg deficiency",
      timing: "Basal",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🧂",
    },

    {
      input: "Ferrous Sulphate",
      dose: "10 kg",
      purpose:
        "Correct iron deficiency",
      timing: "Basal",
      priority: "HIGH",
      color: "text-red-600",
      icon: "⚫",
    },

    {
      input: "MnSO₄",
      dose: "10 kg",
      purpose:
        "Improve Mn availability",
      timing: "Basal",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🔵",
    },

    {
      input: "Boron",
      dose: "1 kg",
      purpose:
        "Correct boron deficiency",
      timing: "Basal",
      priority: "HIGH",
      color: "text-red-600",
      icon: "🟠",
    },
  ];

  return (

    <div className="report-page bg-white">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-6xl font-black leading-tight">

          SOIL AMENDMENT &
          ACTION PLAN
        </h1>

        <p className="text-blue-700 mt-3 text-lg">

          Balanced soil nutrition is the key to
          sustainable high yield and health.
        </p>

      </div>

      {/* TABLE */}

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-[#14532d] text-white">

            <th className="p-4">

              Input / Amendment
            </th>

            <th className="p-4">

              Dose (Per Acre)
            </th>

            <th className="p-4">

              Purpose
            </th>

            <th className="p-4">

              Timing
            </th>

            <th className="p-4">

              Priority
            </th>

          </tr>

        </thead>

        <tbody>

          {amendments.map((item, index) => (

            <tr
              key={index}
              className="border-b hover:bg-green-50"
            >

              <td className="p-4">

                <div className="flex items-center gap-4">

                  <div className="text-3xl">

                    {item.icon}

                  </div>

                  <span className="font-semibold text-blue-700">

                    {item.input}

                  </span>

                </div>

              </td>

              <td className="p-4 text-center font-bold">

                {item.dose}

              </td>

              <td className="p-4 text-blue-700">

                {item.purpose}

              </td>

              <td className="p-4 text-center">

                {item.timing}

              </td>

              <td className={`p-4 text-center font-black ${item.color}`}>

                ● {item.priority}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* TIMELINE */}

      <div className="mt-10 border rounded-3xl p-8">

        <h2 className="text-4xl font-black mb-8">

          ACTION PLAN TIMELINE
        </h2>

        <div className="grid grid-cols-4 gap-8 text-center">

          <div>

            <div className="text-7xl mb-4">

              🚜

            </div>

            <h3 className="font-black text-2xl">

              Pre Sowing
            </h3>

            <p className="text-blue-700 font-semibold">

              (0 – 7 Days)
            </p>

            <ul className="text-sm mt-4 space-y-2 text-left">

              <li>• Apply FYM / Compost</li>

              <li>• Apply Gypsum</li>

              <li>• Prepare field</li>

              <li>• Improve drainage</li>

            </ul>

          </div>

          <div>

            <div className="text-7xl mb-4">

              🌱

            </div>

            <h3 className="font-black text-2xl">

              Basal Dose
            </h3>

            <p className="text-blue-700 font-semibold">

              (At Sowing)
            </p>

            <ul className="text-sm mt-4 space-y-2 text-left">

              <li>• Apply DAP</li>

              <li>• Apply MgSO₄</li>

              <li>• Apply FeSO₄</li>

              <li>• Apply Boron</li>

            </ul>

          </div>

          <div>

            <div className="text-7xl mb-4">

              🌾

            </div>

            <h3 className="font-black text-2xl">

              During Growth
            </h3>

            <p className="text-blue-700 font-semibold">

              (20 – 45 DAS)
            </p>

            <ul className="text-sm mt-4 space-y-2 text-left">

              <li>• Split urea application</li>

              <li>• Monitor deficiency</li>

              <li>• Irrigation management</li>

              <li>• Weed control</li>

            </ul>

          </div>

          <div>

            <div className="text-7xl mb-4">

              📋

            </div>

            <h3 className="font-black text-2xl">

              Pre Harvest
            </h3>

            <p className="text-blue-700 font-semibold">

              (90 – 103 DAS)
            </p>

            <ul className="text-sm mt-4 space-y-2 text-left">

              <li>• Balanced irrigation</li>

              <li>• Avoid excess nitrogen</li>

              <li>• Harvest at maturity</li>

            </ul>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* LEFT */}

        <div className="border rounded-3xl p-6">

          <h2 className="text-3xl font-black mb-5 text-blue-700">

            IMPORTANT CORRECTIONS
          </h2>

          <ul className="space-y-3 text-sm leading-7">

            <li>
              ✔ Low nitrogen → apply split urea doses
            </li>

            <li>
              ✔ Medium phosphorus → apply basal DAP
            </li>

            <li>
              ✔ High potassium → avoid potash
            </li>

            <li>
              ✔ Low sulfur → apply sulfur correction
            </li>

            <li>
              ✔ Improve organic matter with compost
            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div className="border rounded-3xl p-6">

          <h2 className="text-3xl font-black mb-5 text-blue-700">

            KEY SOIL TEST SUMMARY
          </h2>

          <ul className="space-y-3 text-sm leading-7">

            <li>
              🔴 Low:
              Nitrogen, Sulfur, Mn
            </li>

            <li>
              🟠 Medium:
              Organic Carbon, P
            </li>

            <li>
              🟢 High:
              Potassium, Zinc
            </li>

            <li>
              ✔ Sufficient:
              Calcium, Magnesium
            </li>

            <li>
              📌 pH:
              7.88 (Alkaline)
            </li>

            <li>
              📌 EC:
              0.7162 dS/m (Normal)
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default ActionPlanPage;