import React from "react";
import html2pdf from "html2pdf.js";

function ReportPreview({ reportData }) {

  const downloadPDF = () => {

    const element = document.getElementById("report");

    html2pdf()
      .set({
        margin: 0.5,
        filename: "SoilENZ_Report.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();
  };

  return (

    <div className="mt-10">

      <div className="flex justify-end mb-6">

        <button
          onClick={downloadPDF}
          className="green-btn"
        >
          Download PDF
        </button>

      </div>

      <div id="report" className="space-y-10">

        {/* PAGE 1 */}

        <div className="report-page">

          <div className="report-header">

            <div>

              <h1 className="text-5xl font-black">
                SOIL HEALTH INTELLIGENCE REPORT
              </h1>

              <p className="mt-3 text-lg">
                Advanced Soil Intelligence Platform
              </p>

            </div>

            <div className="text-right">

              <h2 className="text-2xl font-bold">
                Powered by SoilENZ
              </h2>

            </div>

          </div>

          <div className="grid-2">

            <div className="info-card">

              <h2 className="section-title">
                Farmer Information
              </h2>

              <div className="space-y-4 text-xl">

                <p>
                  <b>Name:</b> {reportData.farmer}
                </p>

                <p>
                  <b>Village:</b> {reportData.village}
                </p>

                <p>
                  <b>Crop:</b> {reportData.crop}
                </p>

                <p>
                  <b>Soil pH:</b> {reportData.ph}
                </p>

              </div>

            </div>

            <div className="score-box">

              <div className="big-score">

                {reportData.soil_score}

              </div>

              <p className="text-3xl">
                Soil Health Score
              </p>

            </div>

          </div>

          <div className="grid-3 mt-10">

            <div className="info-card">

              <h3 className="text-2xl font-bold mb-4">
                Nitrogen
              </h3>

              <p className="text-4xl font-black text-red-600">

                {reportData.nitrogen}

              </p>

            </div>

            <div className="info-card">

              <h3 className="text-2xl font-bold mb-4">
                Phosphorus
              </h3>

              <p className="text-4xl font-black text-orange-500">

                {reportData.phosphorus}

              </p>

            </div>

            <div className="info-card">

              <h3 className="text-2xl font-bold mb-4">
                Potassium
              </h3>

              <p className="text-4xl font-black text-green-700">

                {reportData.potassium}

              </p>

            </div>

          </div>

        </div>

        {/* PAGE 2 */}

        <div className="report-page">

          <div className="report-header">

            <h1 className="text-4xl font-black">
              Detailed 14 Parameter Analysis
            </h1>

          </div>

          <table className="parameter-table">

            <thead>

              <tr>

                <th>Parameter</th>
                <th>Value</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td>pH</td>
                <td>{reportData.ph}</td>
                <td className="status-medium">Basic</td>
              </tr>

              <tr>
                <td>Nitrogen</td>
                <td>{reportData.nitrogen}</td>
                <td className="status-low">Low</td>
              </tr>

              <tr>
                <td>Phosphorus</td>
                <td>{reportData.phosphorus}</td>
                <td className="status-medium">Medium</td>
              </tr>

              <tr>
                <td>Potassium</td>
                <td>{reportData.potassium}</td>
                <td className="status-good">High</td>
              </tr>

              <tr>
                <td>Organic Carbon</td>
                <td>{reportData.organic_carbon}</td>
                <td className="status-medium">Medium</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* PAGE 3 */}

        <div className="report-page">

          <div className="report-header">

            <h1 className="text-4xl font-black">
              Grid Analysis Heatmap
            </h1>

          </div>

          <div className="grid-3">

            {[1,2,3,4,5,6].map((item)=>(

              <div
                key={item}
                className="info-card h-64 flex items-center justify-center text-3xl font-bold text-green-700"
              >

                Heatmap {item}

              </div>

            ))}

          </div>

        </div>

        {/* PAGE 4 */}

        <div className="report-page">

          <div className="report-header">

            <h1 className="text-4xl font-black">
              Crop Suitability Analysis
            </h1>

          </div>

          <div className="grid-2">

            <div className="info-card">

              <h2 className="text-3xl font-bold mb-6">
                Recommended Crops
              </h2>

              <ul className="space-y-4 text-2xl">

                <li>🌾 Paddy</li>
                <li>🌽 Maize</li>
                <li>🥭 Mango</li>
                <li>🌱 Sorghum</li>

              </ul>

            </div>

            <div className="score-box">

              <div className="big-score">

                91

              </div>

              <p className="text-2xl">
                Crop Suitability Index
              </p>

            </div>

          </div>

        </div>

        {/* PAGE 5 */}

        <div className="report-page">

          <div className="report-header">

            <h1 className="text-4xl font-black">
              Soil Amendment & Action Plan
            </h1>

          </div>

          <div className="space-y-6">

            {reportData.recommendations.map((item,index)=>(

              <div
                key={index}
                className="info-card text-2xl font-semibold"
              >

                ✅ {item}

              </div>

            ))}

          </div>

        </div>

        {/* PAGE 6 */}

        <div className="report-page">

          <div className="report-header">

            <h1 className="text-4xl font-black">
              Carbon Credit Impact Dashboard
            </h1>

          </div>

          <div className="grid-3">

            <div className="score-box">

              <div className="big-score">

                {reportData.carbon_score}

              </div>

              <p>Carbon Score</p>

            </div>

            <div className="score-box">

              <div className="big-score">

                1474

              </div>

              <p>CO₂ Saved</p>

            </div>

            <div className="score-box">

              <div className="big-score">

                14.2

              </div>

              <p>Carbon Credits</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReportPreview;