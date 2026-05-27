import React, { useState } from "react";

import UploadSection from "./components/UploadSection";

import ReportContainer from "./components/ReportContainer";

import LoadingScreen from "./components/LoadingScreen";

import { generateSoilReport } from "./services/api";

import {
  Leaf,
  ShieldCheck,
  Database,
  BrainCircuit,
} from "lucide-react";

function App() {

  const [file, setFile] = useState(null);

  const [report, setReport] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =========================================
  // GENERATE REPORT
  // =========================================

  const handleGenerateReport = async () => {

    if (!file) {

      alert("Please upload soil report image");

      return;
    }

    try {

      setLoading(true);

      setError("");

      const formData = new FormData();

      formData.append("file", file);

      const response =
        await generateSoilReport(formData);

      console.log(response);

      setReport(response);

    } catch (err) {

      console.error(err);

      setError(
        "AI Report generation failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#eef2ef]">

      {/* ======================================
         HEADER
      ====================================== */}

      <div className="bg-[#062e16] text-white px-10 py-5 shadow-xl">

        <div className="max-w-[1700px] mx-auto flex justify-between items-center">

          {/* LEFT */}

          <div className="flex items-center gap-5">

            <div className="bg-white/10 p-4 rounded-2xl">

              <Leaf size={42} />

            </div>

            <div>

              <h1 className="text-5xl font-black">

                SoilENZ AI Platform

              </h1>

              <p className="text-green-200 mt-1 text-lg">

                Advanced Soil Intelligence &
                Carbon Credit Analytics

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex gap-4">

            <div className="bg-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">

              <ShieldCheck size={22} />

              <span className="font-bold">

                AI Verified

              </span>

            </div>

            <div className="bg-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">

              <Database size={22} />

              <span className="font-bold">

                OCR Extraction

              </span>

            </div>

            <div className="bg-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">

              <BrainCircuit size={22} />

              <span className="font-bold">

                Smart Analytics

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
         HERO SECTION
      ====================================== */}

      <div className="max-w-[1700px] mx-auto px-8 py-10">

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-green-100">

          {/* TOP HERO */}

          <div className="bg-gradient-to-r from-[#14532d] to-green-700 text-white p-12">

            <div className="max-w-5xl">

              <h1 className="text-7xl font-black leading-tight">

                AI Powered Soil Intelligence
                & Carbon Credit Platform

              </h1>

              <p className="text-2xl text-green-100 mt-6 leading-10">

                Upload soil laboratory reports to generate
                enterprise-grade agricultural intelligence,
                nutrient analytics, crop suitability,
                carbon insights and premium PDF reports.

              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-10">

            {/* UPLOAD */}

            <UploadSection
              file={file}
              setFile={setFile}
            />

            {/* BUTTON */}

            <div className="mt-10 flex justify-center">

              <button

                onClick={handleGenerateReport}

                disabled={loading}

                className="bg-[#14532d] hover:bg-[#166534] disabled:opacity-50 text-white px-14 py-6 rounded-3xl text-3xl font-black shadow-xl transition-all duration-300"

              >

                {loading
                  ? "Generating AI Report..."
                  : "Generate Premium AI Report"}

              </button>

            </div>

            {/* ERROR */}

            {error && (

              <div className="mt-8 bg-red-100 border border-red-300 text-red-700 rounded-2xl p-5 text-center font-bold">

                {error}

              </div>

            )}

          </div>

        </div>

        {/* ======================================
           LOADING SCREEN
        ====================================== */}

        {loading && (

          <div className="mt-10">

            <LoadingScreen />

          </div>

        )}

        {/* ======================================
           REPORT
        ====================================== */}

        {report && !loading && (

          <div className="mt-10">

            <ReportContainer
              report={report}
            />

          </div>

        )}

      </div>

    </div>
  );
}

export default App;