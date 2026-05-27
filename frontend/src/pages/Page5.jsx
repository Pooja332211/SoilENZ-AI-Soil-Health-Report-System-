import React from "react";

function Page5() {

  return (

    <div className="bg-white min-h-screen p-10 border-b">

      <h1 className="text-4xl font-black text-green-900 mb-8">
        SOIL AMENDMENT PLAN
      </h1>

      <div className="space-y-6">

        <div className="border-l-8 border-red-500 bg-red-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Add Organic Compost
          </h2>
          <p className="mt-2">
            Recommended dose: 1500kg per acre
          </p>
        </div>

        <div className="border-l-8 border-yellow-500 bg-yellow-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Apply Sulfur
          </h2>
          <p className="mt-2">
            Recommended dose: 50kg
          </p>
        </div>

      </div>

    </div>
  );
}

export default Page5;