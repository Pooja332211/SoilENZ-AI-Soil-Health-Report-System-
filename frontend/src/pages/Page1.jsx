import React from "react";

function Page1() {
  return (
    <div className="bg-white min-h-screen p-10 border-b">

      <h1 className="text-5xl font-black text-green-800 mb-6">
        SOIL HEALTH REPORT
      </h1>

      <div className="grid grid-cols-2 gap-10">

        <div className="bg-green-50 p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Farmer Information
          </h2>

          <div className="space-y-3 text-lg">

            <p><b>Name:</b> Pooja</p>
            <p><b>Location:</b> Karnataka</p>
            <p><b>Crop:</b> Mango</p>
            <p><b>NDVI:</b> 0.65</p>

          </div>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow">

          <h2 className="text-2xl font-bold mb-4">
            Soil Health Score
          </h2>

          <div className="flex items-center justify-center">

            <div className="w-56 h-56 rounded-full border-[18px] border-green-600 flex items-center justify-center text-5xl font-black text-green-700">
              82
            </div>

          </div>

          <p className="text-center mt-6 text-xl font-semibold text-green-700">
            HEALTHY SOIL
          </p>

        </div>

      </div>

    </div>
  );
}

export default Page1;