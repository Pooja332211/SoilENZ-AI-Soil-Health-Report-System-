import React from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function PDFDownloadButton() {

  const downloadPDF = async () => {

    const report =
      document.getElementById(
        "report-content"
      );

    if (!report) return;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pages =
      report.querySelectorAll(
        ".pdf-page"
      );

    for (
      let i = 0;
      i < pages.length;
      i++
    ) {

      const page =
        pages[i];

      const canvas =
        await html2canvas(
          page,
          {
            scale: 3,
            useCORS: true,
            allowTaint: true,
            backgroundColor:
              "#ffffff",
            logging: false,
            scrollX: 0,
            scrollY: 0,
          }
        );

      const imgData =
        canvas.toDataURL(
          "image/jpeg",
          1.0
        );

      const pdfWidth = 210;
      const pdfHeight = 297;

      if (i !== 0) {

        pdf.addPage();
      }

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST"
      );
    }

    pdf.save(
      "SoilENZ_AI_Report.pdf"
    );
  };

  return (

    <button

      onClick={downloadPDF}

      className="
        bg-[#14532d]
        hover:bg-[#166534]
        transition-all
        duration-300
        text-white
        px-8
        py-3
        rounded-xl
        text-lg
        font-bold
        shadow-lg
      "

    >

      Download AI Report PDF

    </button>

  );
}

export default PDFDownloadButton;