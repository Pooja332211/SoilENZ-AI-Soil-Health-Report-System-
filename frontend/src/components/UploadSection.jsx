import React from "react";

import {
  UploadCloud,
  FileImage,
  CheckCircle2,
} from "lucide-react";

function UploadSection({
  file,
  setFile,
}) {

  const handleFileChange =
    (e) => {

      const selected =
        e.target.files[0];

      if (selected) {

        console.log(
          "SELECTED FILE:",
          selected
        );

        setFile(selected);
      }
    };

  return (

    <div>

      {/* UPLOAD BOX */}

      <label
        htmlFor="file-upload"
        className="w-full border-2 border-dashed border-[#14532d] bg-[#f7faf8] rounded-[30px] p-14 flex flex-col items-center justify-center cursor-pointer hover:bg-[#eef7f0] transition-all duration-300"
      >

        {/* ICON */}

        <div className="w-24 h-24 rounded-full bg-[#14532d] text-white flex items-center justify-center shadow-lg">

          <UploadCloud size={46} />

        </div>

        {/* TEXT */}

        <h2 className="text-[34px] font-black text-[#0f172a] mt-8">

          Upload Soil Test Report

        </h2>

        <p className="text-gray-500 text-lg mt-4 text-center max-w-2xl leading-8">

          Upload soil laboratory report image
          or PDF for OCR extraction, AI soil
          analysis, crop suitability prediction,
          carbon impact insights, and PDF report
          generation.

        </p>

        {/* BUTTON */}

        <div className="mt-8 bg-[#14532d] text-white px-8 py-4 rounded-[18px] font-black text-lg shadow-lg">

          Choose File

        </div>

        {/* INPUT */}

        <input
          id="file-upload"
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />

      </label>

      {/* FILE INFO */}

      {file && (

        <div className="mt-8 bg-white border rounded-[24px] p-6 shadow-sm flex items-center justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">

              <FileImage size={34} />

            </div>

            <div>

              <h2 className="text-xl font-black text-[#0f172a]">

                {file.name}

              </h2>

              <p className="text-gray-500 mt-2">

                {(file.size / 1024 / 1024).toFixed(2)}
                MB Uploaded

              </p>

            </div>

          </div>

          {/* STATUS */}

          <div className="flex items-center gap-3 text-green-700 font-black text-lg">

            <CheckCircle2 size={28} />

            Ready

          </div>

        </div>

      )}

    </div>
  );
}

export default UploadSection;