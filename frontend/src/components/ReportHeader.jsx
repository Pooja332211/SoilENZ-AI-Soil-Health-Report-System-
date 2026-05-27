import React from "react";

import {
  FileText,
  ShieldCheck,
  CalendarDays,
  MapPin,
} from "lucide-react";

function ReportHeader({ report }) {

  const today = new Date().toLocaleDateString();

  return (

    <div className="bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-10 shadow-2xl">

      <div className="flex justify-between items-start">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-5">

            <div className="bg-white/10 p-5 rounded-2xl">

              <FileText size={50} />

            </div>

            <div>

              <h1 className="text-6xl font-black">

                SOIL HEALTH REPORT

              </h1>

              <p className="text-2xl mt-3 text-green-100">

                AI Powered Agricultural Intelligence Document

              </p>

            </div>

          </div>

          {/* TAGS */}

          <div className="flex gap-4 mt-10">

            <Tag
              icon={<ShieldCheck size={22} />}
              text="AI VERIFIED"
            />

            <Tag
              icon={<CalendarDays size={22} />}
              text={today}
            />

            <Tag
              icon={<MapPin size={22} />}
              text={report.village}
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-white/10 rounded-3xl p-8 w-[340px]">

          <h2 className="text-3xl font-black mb-6">

            Report Summary

          </h2>

          <div className="space-y-4 text-xl">

            <SummaryItem
              label="Farmer"
              value={report.farmer}
            />

            <SummaryItem
              label="Crop"
              value={report.crop}
            />

            <SummaryItem
              label="Soil Score"
              value={`${report.soil_score}/100`}
            />

            <SummaryItem
              label="Carbon Score"
              value={`${report.carbon_score}/100`}
            />

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="mt-10 bg-white/10 rounded-2xl p-6 flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-black">

            SoilENZ AI Platform

          </h2>

          <p className="text-lg text-green-100 mt-2">

            Precision Agriculture • Climate Intelligence • Sustainability

          </p>

        </div>

        <div className="text-right">

          <div className="text-5xl font-black">

            {report.soil_score}

          </div>

          <p className="text-lg mt-2">

            Soil Health Index

          </p>

        </div>

      </div>

    </div>
  );
}

/* TAG */

function Tag({ icon, text }) {

  return (

    <div className="bg-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">

      {icon}

      <span className="font-bold text-lg">

        {text}

      </span>

    </div>
  );
}

/* SUMMARY ITEM */

function SummaryItem({ label, value }) {

  return (

    <div className="flex justify-between border-b border-white/10 pb-3">

      <span className="text-green-100">

        {label}

      </span>

      <span className="font-bold">

        {value}

      </span>

    </div>
  );
}

export default ReportHeader;