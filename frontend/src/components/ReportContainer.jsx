import React from "react";

import SoilHealthIntelligencePage from "./SoilHealthIntelligencePage";
import DetailedParameterPage from "./DetailedParameterPage";
import GridAnalysisPage from "./GridAnalysisPage";
import CropSuitability from "./CropSuitability";
import ActionPlanPage from "./ActionPlanPage";
import CarbonImpactPage from "./CarbonImpactPage";
import PDFDownloadButton from "./PDFDownloadButton";

function ReportContainer({ report }) {

  if (!report) return null;

  return (

    <div className="w-full flex flex-col items-center bg-gray-100 py-8">

      {/* DOWNLOAD BUTTON */}

      <div className="sticky top-4 z-50 mb-6">

        <PDFDownloadButton />

      </div>

      {/* PDF CONTENT */}

      <div
        id="report-content"
        className="flex flex-col items-center gap-0"
      >

        {/* PAGE 1 */}

        <div className="pdf-page">

          <SoilHealthIntelligencePage
            report={report}
          />

        </div>

        {/* PAGE 2 */}

        <div className="pdf-page">

          <DetailedParameterPage
            report={report}
          />

        </div>

        {/* PAGE 3 */}

        <div className="pdf-page">

          <GridAnalysisPage
            report={report}
          />

        </div>

        {/* PAGE 4 */}

        <div className="pdf-page">

          <CropSuitability
            report={report}
          />

        </div>

        {/* PAGE 5 */}

        <div className="pdf-page">

          <ActionPlanPage
            report={report}
          />

        </div>

        {/* PAGE 6 */}

        <div className="pdf-page">

          <CarbonImpactPage
            report={report}
          />

        </div>

      </div>

    </div>

  );
}

export default ReportContainer;