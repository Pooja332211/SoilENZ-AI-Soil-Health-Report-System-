import React, { useState } from "react";

import UploadSection from "./components/UploadSection";
import LoadingScreen from "./components/LoadingScreen";
import ReportContainer from "./components/ReportContainer";

import { generateSoilReport } from "./services/api";

function App() {
  const [file, setFile] = useState(null);

  const [report, setReport] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =====================================
  // GENERATE REPORT
  // =====================================

  const handleGenerateReport = async () => {
    if (!file) {
      alert("Please upload soil report image");
      return;
    }

    try {
      setLoading(true);

      setError("");

      const response =
        await generateSoilReport(file);

      console.log(
        "========== BACKEND RESPONSE =========="
      );

      console.log(response);

      console.log(
        "REPORT.DATA =>",
        response?.data
      );

      setReport(response);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to generate AI report"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-[#eef2ef]">

      {/* HEADER */}

      <div className="bg-[#14532d] text-white shadow-xl">
        <div className="max-w-[1700px] mx-auto px-10 py-8 flex justify-between items-center">

          <div>
            <h1 className="text-[52px] font-black leading-[56px]">
              SoilENZ AI Platform
            </h1>

            <p className="text-green-100 text-[18px] mt-3">
              AI Soil Intelligence,
              Carbon Analytics &
              Precision Farming
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-[22px]">
            <h2 className="text-[24px] font-black">
              Enterprise Edition
            </h2>

            <p className="text-green-100 text-[14px] mt-2">
              OCR + AI + PDF Engine
            </p>
          </div>

        </div>
      </div>

      {/* BODY */}

      <div className="max-w-[1700px] mx-auto px-8 py-10">

        <div className="bg-white border rounded-[30px] p-10 shadow-xl">

          <div className="flex justify-between items-center flex-wrap gap-6">

            <div>
              <h2 className="text-[40px] font-black text-[#0f172a]">
                Upload Soil Test Report
              </h2>

              <p className="text-gray-500 text-[17px] mt-3 max-w-3xl leading-8">
                Upload laboratory soil report image for OCR extraction,
                AI nutrient analysis, crop intelligence,
                sustainability scoring and premium PDF generation.
              </p>
            </div>

            <button
              onClick={handleGenerateReport}
              disabled={loading}
              className="bg-[#14532d] hover:bg-[#166534] transition-all duration-300 text-white px-10 py-5 rounded-[22px] text-[22px] font-black shadow-lg"
            >
              {loading
                ? "Generating..."
                : "Generate AI Report"}
            </button>

          </div>

          <div className="mt-10">
            <UploadSection
              file={file}
              setFile={setFile}
            />
          </div>

          {error && (
            <div className="mt-8 bg-red-100 border border-red-300 text-red-700 p-5 rounded-2xl text-center font-bold">
              {error}
            </div>
          )}

        </div>

        {loading && (
          <div className="mt-10">
            <LoadingScreen />
          </div>
        )}

        {report && !loading && (
          <div className="mt-12">

            {console.log(
              "REPORT STATE =>",
              report
            )}

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