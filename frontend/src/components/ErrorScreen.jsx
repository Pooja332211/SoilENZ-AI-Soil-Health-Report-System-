import React from "react";

import {
  AlertTriangle,
  RefreshCcw,
  ServerCrash,
  WifiOff,
} from "lucide-react";

function ErrorScreen({ retry }) {

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-14 mt-10">

      {/* TOP */}

      <div className="flex flex-col items-center justify-center text-center">

        <div className="bg-red-100 text-red-600 p-8 rounded-full shadow-lg">

          <AlertTriangle size={90} />

        </div>

        <h1 className="text-6xl font-black text-red-600 mt-10">

          Report Generation Failed

        </h1>

        <p className="text-2xl text-gray-500 mt-5 max-w-3xl leading-relaxed">

          SoilENZ AI was unable to process the uploaded report.
          Please verify the file format or reconnect to the backend service.

        </p>

      </div>

      {/* ERROR CARDS */}

      <div className="grid grid-cols-2 gap-8 mt-16">

        <ErrorCard
          icon={<ServerCrash size={46} />}
          title="Backend Connection Issue"
          description="FastAPI backend may not be running or API route is unavailable."
        />

        <ErrorCard
          icon={<WifiOff size={46} />}
          title="Network/API Failure"
          description="Unable to communicate with the AI processing engine."
        />

      </div>

      {/* ACTIONS */}

      <div className="mt-16 flex justify-center">

        <button
          onClick={retry}
          className="bg-[#14532d] hover:bg-[#166534] text-white px-10 py-5 rounded-2xl text-2xl font-black shadow-xl flex items-center gap-4"
        >

          <RefreshCcw size={32} />

          Retry Report Generation

        </button>

      </div>

      {/* HELP */}

      <div className="mt-16 bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

        <h2 className="text-3xl font-black text-[#14532d] mb-6">

          Troubleshooting Guide

        </h2>

        <div className="space-y-5 text-xl text-gray-700">

          <p>
            • Ensure FastAPI backend is running on:
            <span className="font-bold text-[#14532d]">
              {" "}http://127.0.0.1:8000
            </span>
          </p>

          <p>
            • Verify uploaded file format is JPG, PNG, or PDF.
          </p>

          <p>
            • Restart frontend using:
            <span className="font-bold text-[#14532d]">
              {" "}npm run dev
            </span>
          </p>

          <p>
            • Restart backend using:
            <span className="font-bold text-[#14532d]">
              {" "}python -m uvicorn app.main:app --reload
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

function ErrorCard({ icon, title, description }) {

  return (

    <div className="bg-[#fff5f5] border border-red-100 rounded-3xl p-8 shadow-sm">

      <div className="text-red-600">

        {icon}

      </div>

      <h2 className="text-3xl font-black text-red-600 mt-6">

        {title}

      </h2>

      <p className="text-xl text-gray-600 mt-4 leading-relaxed">

        {description}

      </p>

    </div>
  );
}

export default ErrorScreen;