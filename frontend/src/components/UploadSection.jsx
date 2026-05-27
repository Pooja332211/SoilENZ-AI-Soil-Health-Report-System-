import React from "react";

import {
  Upload,
  FileText,
  Sparkles,
} from "lucide-react";

function UploadSection({

  file,
  setFile,
  generateReport,
  loading,

}) {

  const handleFile = (e) => {

    const selected = e.target.files[0];

    if (selected) {

      setFile(selected);
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-black text-[#14532d]">

          Upload Soil Test Receipt

        </h1>

        <p className="text-xl text-gray-500 mt-4">

          Upload JPG / PNG / PDF soil laboratory reports

        </p>

      </div>

      {/* CONTENT */}

      <div className="grid grid-cols-2 gap-10 items-center">

        {/* LEFT */}

        <div className="border-4 border-dashed border-green-600 rounded-3xl p-10 bg-[#f5f7f5]">

          <label className="cursor-pointer">

            <input
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFile}
            />

            <div className="flex flex-col items-center justify-center text-center">

              <div className="bg-[#14532d] text-white p-6 rounded-full">

                <Upload size={50} />

              </div>

              <h2 className="text-3xl font-black text-[#14532d] mt-6">

                Choose File

              </h2>

              <p className="text-lg text-gray-500 mt-3">

                JPG / PNG / PDF
              </p>

            </div>

          </label>

          {/* FILE */}

          {file && (

            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <FileText
                  size={40}
                  className="text-[#14532d]"
                />

                <div>

                  <p className="text-lg text-gray-500">

                    Uploaded File

                  </p>

                  <h3 className="text-xl font-bold text-[#14532d] break-all">

                    {file.name}

                  </h3>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-center justify-center">

          <button

            onClick={generateReport}

            disabled={loading}

            className="bg-[#14532d] hover:bg-[#166534] text-white px-14 py-6 rounded-3xl text-3xl font-black shadow-xl flex items-center gap-4 disabled:opacity-50"

          >

            <Sparkles size={34} />

            {loading
              ? "Generating..."
              : "Generate AI Report"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default UploadSection;