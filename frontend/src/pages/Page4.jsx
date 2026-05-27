import React from "react";

function Page4() {

  return (

    <div className="bg-white min-h-screen p-10 border-b">

      <h1 className="text-4xl font-black text-green-900 mb-8">
        CROP SUITABILITY
      </h1>

      <div className="space-y-5">

        <div className="border p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Mango</h2>
          <p className="text-lg text-green-700 font-semibold">
            Highly Recommended
          </p>
        </div>

        <div className="border p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Tomato</h2>
          <p className="text-lg text-yellow-600 font-semibold">
            Moderate
          </p>
        </div>

        <div className="border p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Rice</h2>
          <p className="text-lg text-red-600 font-semibold">
            Not Recommended
          </p>
        </div>

      </div>

    </div>
  );
}

export default Page4;