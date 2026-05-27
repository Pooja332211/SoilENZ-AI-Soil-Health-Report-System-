import React from "react";

function Page2() {

  const rows = [
    ["pH", "8.2", "Basic"],
    ["EC", "0.77", "Normal"],
    ["Nitrogen", "232", "Low"],
    ["Phosphorus", "41", "Medium"],
    ["Potassium", "525", "High"],
  ];

  return (

    <div className="bg-white min-h-screen p-10 border-b">

      <h1 className="text-4xl font-black text-green-900 mb-8">
        DETAILED 14 PARAMETER TEST
      </h1>

      <table className="w-full border shadow-lg">

        <thead className="bg-green-800 text-white">

          <tr>
            <th className="p-4 border">Parameter</th>
            <th className="p-4 border">Value</th>
            <th className="p-4 border">Status</th>
          </tr>

        </thead>

        <tbody>

          {rows.map((item, index) => (

            <tr key={index} className="text-center">

              <td className="p-4 border">{item[0]}</td>
              <td className="p-4 border">{item[1]}</td>
              <td className="p-4 border">{item[2]}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Page2;