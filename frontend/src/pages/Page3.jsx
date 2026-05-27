import React from "react";

function Box({ color }) {

  return (
    <div
      className={`w-16 h-16 ${color} border`}
    ></div>
  );
}

function Page3() {

  return (

    <div className="bg-white min-h-screen p-10 border-b">

      <h1 className="text-4xl font-black text-green-900 mb-8">
        GRID ANALYSIS
      </h1>

      <div className="grid grid-cols-4 gap-2 w-fit">

        <Box color="bg-red-400" />
        <Box color="bg-yellow-400" />
        <Box color="bg-green-400" />
        <Box color="bg-red-500" />

        <Box color="bg-green-500" />
        <Box color="bg-yellow-300" />
        <Box color="bg-green-400" />
        <Box color="bg-red-400" />

        <Box color="bg-yellow-500" />
        <Box color="bg-green-500" />
        <Box color="bg-green-400" />
        <Box color="bg-yellow-400" />

        <Box color="bg-red-300" />
        <Box color="bg-green-300" />
        <Box color="bg-yellow-400" />
        <Box color="bg-green-500" />

      </div>

    </div>
  );
}

export default Page3;