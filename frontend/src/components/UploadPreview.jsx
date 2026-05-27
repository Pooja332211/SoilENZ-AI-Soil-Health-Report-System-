import React from "react";

import {
  FileImage,
  FileText,
  CheckCircle2,
  Eye,
} from "lucide-react";

function UploadPreview({ file }) {

  if (!file) return null;

  const isImage =
    file.type.includes("image");

  const isPDF =
    file.type.includes("pdf");

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-black text-[#14532d]">

            Uploaded File Preview

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            AI-ready soil laboratory document

          </p>

        </div>

        <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg">

          <CheckCircle2 size={24} />

          File Uploaded

        </div>

      </div>

      {/* CONTENT */}

      <div className="grid grid-cols-2 gap-10">

        {/* LEFT */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border border-green-100">

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-[#14532d] text-white p-5 rounded-2xl">

              {isImage ? (
                <FileImage size={42} />
              ) : (
                <FileText size={42} />
              )}

            </div>

            <div>

              <h2 className="text-3xl font-black text-[#14532d]">

                File Information

              </h2>

              <p className="text-lg text-gray-500 mt-2">

                OCR compatible upload

              </p>

            </div>

          </div>

          {/* DETAILS */}

          <div className="space-y-5">

            <FileItem
              label="File Name"
              value={file.name}
            />

            <FileItem
              label="File Type"
              value={file.type}
            />

            <FileItem
              label="File Size"
              value={`${(
                file.size /
                1024 /
                1024
              ).toFixed(2)} MB`}
            />

            <FileItem
              label="AI Status"
              value="Ready for Analysis"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-[#f5f7f5] rounded-3xl p-8 border border-green-100 flex flex-col items-center justify-center">

          {isImage ? (

            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="rounded-2xl shadow-xl max-h-[350px] object-contain"
            />

          ) : (

            <div className="flex flex-col items-center">

              <div className="bg-red-100 text-red-600 p-10 rounded-full">

                <FileText size={90} />

              </div>

              <h2 className="text-3xl font-black text-[#14532d] mt-8">

                PDF Preview Ready

              </h2>

              <p className="text-lg text-gray-500 mt-3 text-center">

                AI OCR engine will extract parameters
                from uploaded PDF document.

              </p>

            </div>

          )}

          {/* BUTTON */}

          <button className="mt-8 bg-[#14532d] hover:bg-[#166534] text-white px-8 py-4 rounded-2xl text-xl font-bold flex items-center gap-3">

            <Eye size={26} />

            Preview Ready

          </button>

        </div>

      </div>

      {/* AI INFO */}

      <div className="mt-10 bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-8">

        <h2 className="text-3xl font-black mb-5">

          AI Extraction Pipeline

        </h2>

        <div className="grid grid-cols-4 gap-6">

          <PipelineStep text="OCR Detection" />
          <PipelineStep text="Parameter Extraction" />
          <PipelineStep text="AI Analysis" />
          <PipelineStep text="PDF Generation" />

        </div>

      </div>

    </div>
  );
}

/* FILE ITEM */

function FileItem({ label, value }) {

  return (

    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <p className="text-lg text-gray-500">

        {label}

      </p>

      <h3 className="text-2xl font-black text-[#14532d] mt-2 break-all">

        {value}

      </h3>

    </div>
  );
}

/* PIPELINE STEP */

function PipelineStep({ text }) {

  return (

    <div className="bg-white/10 rounded-2xl p-5 text-center">

      <div className="text-xl font-black">

        {text}

      </div>

    </div>
  );
}

export default UploadPreview;