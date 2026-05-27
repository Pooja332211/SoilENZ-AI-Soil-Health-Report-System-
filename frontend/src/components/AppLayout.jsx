import React from "react";

import Navbar from "./Navbar";
import BackendStatus from "./BackendStatus";
import UploadSection from "./UploadSection";
import UploadPreview from "./UploadPreview";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import EmptyState from "./EmptyState";
import ReportContainer from "./ReportContainer";

function AppLayout({
  file,
  loading,
  error,
  report,
  setFile,
  generateReport,
  retry,
}) {

  return (

    <div className="min-h-screen bg-[#eef2ef] p-6">

      <div className="max-w-[1700px] mx-auto space-y-8">

        {/* NAVBAR */}

        <Navbar />

        {/* BACKEND STATUS */}

        <BackendStatus />

        {/* UPLOAD SECTION */}

        <UploadSection
          file={file}
          setFile={setFile}
          generateReport={generateReport}
          loading={loading}
        />

        {/* FILE PREVIEW */}

        {file && !loading && !report && (

          <UploadPreview file={file} />

        )}

        {/* EMPTY */}

        {!file && !loading && !report && !error && (

          <EmptyState />

        )}

        {/* LOADING */}

        {loading && (

          <LoadingScreen />

        )}

        {/* ERROR */}

        {error && (

          <ErrorScreen retry={retry} />

        )}

        {/* REPORT */}

        {report && !loading && (

          <ReportContainer report={report} />

        )}

      </div>

    </div>
  );
}

export default AppLayout;