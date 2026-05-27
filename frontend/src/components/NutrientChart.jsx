import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

function NutrientChart({ report }) {

  const data = [

    {
      name: "N",
      value: report.nitrogen,
      color: "#ef4444",
    },

    {
      name: "P",
      value: report.phosphorus,
      color: "#f59e0b",
    },

    {
      name: "K",
      value: report.potassium,
      color: "#22c55e",
    },

    {
      name: "OC",
      value: report.organic_carbon,
      color: "#3b82f6",
    },

    {
      name: "S",
      value: report.sulfur,
      color: "#8b5cf6",
    },

    {
      name: "Zn",
      value: report.zinc,
      color: "#14b8a6",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      <h1 className="text-5xl font-black text-[#14532d] mb-10">

        Nutrient Analytics Dashboard

      </h1>

      <div className="h-[500px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" radius={[10, 10, 0, 0]}>

              {data.map((entry, index) => (

                <Cell key={index} fill={entry.color} />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default NutrientChart;