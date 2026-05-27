import React from "react";

import html2pdf from "html2pdf.js";

function PDFDownloadButton() {

  const downloadPDF = () => {

    const element =
      document.getElementById("report-content");

    if (!element) {

      alert("Report not found");

      return;
    }

    const options = {

      margin: 0,

      filename:
        "SoilENZ_Premium_Report.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0,
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },

      pagebreak: {
        mode: ["avoid-all", "css", "legacy"],
      },
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
  };

  return (

    <div className="flex justify-center my-8">

      <button
        onClick={downloadPDF}
        className="
          bg-[#14532d]
          hover:bg-[#0f3d22]
          text-white
          px-8
          py-4
          rounded-2xl
          text-[16px]
          font-bold
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
        "
      >

        Download Premium PDF Report

      </button>

    </div>
  );
}

export default PDFDownloadButton;