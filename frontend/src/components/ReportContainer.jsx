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

    <div className="pb-20">

      {/* SINGLE PDF BUTTON */}

      <PDFDownloadButton />

      {/* REPORT */}

      <div
        id="report-content"
        className="space-y-8"
      >

        {/* PAGE 1 */}

        <div className="page-break">

          <SoilHealthIntelligencePage
            report={report}
          />

        </div>

        {/* PAGE 2 */}

        <div className="page-break">

          <DetailedParameterPage
            report={report}
          />

        </div>

        {/* PAGE 3 */}

        <div className="page-break">

          <GridAnalysisPage
            report={report}
          />

        </div>

        {/* PAGE 4 */}

        <div className="page-break">

          <CropSuitability
            report={report}
          />

        </div>

        {/* PAGE 5 */}

        <div className="page-break">

          <ActionPlanPage
            report={report}
          />

        </div>

        {/* PAGE 6 */}

        <div className="page-break">

          <CarbonImpactPage
            report={report}
          />

        </div>

      </div>

    </div>
  );
}

export default ReportContainer;