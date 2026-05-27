import React from "react";

import html2pdf from "html2pdf.js";

import {
  Download,
} from "lucide-react";

function PDFExportButton() {

  const downloadPDF = () => {

    const element = document.getElementById("full-report");

    if (!element) {

      alert("Report not found");

      return;
    }

    const options = {

      margin: 0.3,

      filename: "SoilENZ_AI_Report.pdf",

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

        unit: "in",

        format: "a4",

        orientation: "portrait",
      },

      pagebreak: {

        mode: [
          "avoid-all",
          "css",
          "legacy",
        ],
      },
    };

    html2pdf()

      .set(options)

      .from(element)

      .save();
  };

  return (

    <div className="flex justify-end mb-8">

      <button

        onClick={downloadPDF}

        className="bg-[#14532d] hover:bg-[#166534] text-white px-10 py-5 rounded-3xl text-2xl font-black shadow-xl flex items-center gap-4"

      >

        <Download size={30} />

        Download Premium PDF

      </button>

    </div>
  );
}

export default PDFExportButton;