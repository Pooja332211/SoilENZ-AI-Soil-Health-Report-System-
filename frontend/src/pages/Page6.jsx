import React from "react";

function Page6() {

  return (

    <div className="bg-white min-h-screen p-10">

      <h1 className="text-4xl font-black text-green-900 mb-8">
        CARBON CREDIT DASHBOARD
      </h1>

      <div className="grid grid-cols-3 gap-8">

        <div className="bg-green-50 p-8 rounded-2xl shadow text-center">

          <h2 className="text-xl font-bold mb-3">
            Carbon Score
          </h2>

          <p className="text-5xl font-black text-green-700">
            78
          </p>

        </div>

        <div className="bg-blue-50 p-8 rounded-2xl shadow text-center">

          <h2 className="text-xl font-bold mb-3">
            CO₂ Saved
          </h2>

          <p className="text-5xl font-black text-blue-700">
            630
          </p>

        </div>

        <div className="bg-yellow-50 p-8 rounded-2xl shadow text-center">

          <h2 className="text-xl font-bold mb-3">
            Credits
          </h2>

          <p className="text-5xl font-black text-yellow-700">
            14
          </p>

        </div>

      </div>

    </div>
  );
}

export default Page6;