import React from "react";

import {
  Leaf,
  ShieldCheck,
  FileText,
  BarChart3,
} from "lucide-react";

function Navbar() {

  return (

    <div className="bg-[#14532d] text-white rounded-3xl shadow-2xl p-8">

      <div className="flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <div className="bg-white/10 p-4 rounded-2xl">

            <Leaf size={50} />

          </div>

          <div>

            <h1 className="text-5xl font-black">

              SoilENZ AI Platform

            </h1>

            <p className="text-xl mt-2 text-green-100">

              Advanced Soil Intelligence & Carbon Credit System

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex gap-5">

          <NavCard
            icon={<ShieldCheck size={28} />}
            title="AI Verified"
          />

          <NavCard
            icon={<BarChart3 size={28} />}
            title="Analytics"
          />

          <NavCard
            icon={<FileText size={28} />}
            title="PDF Ready"
          />

        </div>

      </div>

    </div>
  );
}

/* NAV CARD */

function NavCard({ icon, title }) {

  return (

    <div className="bg-white/10 px-6 py-4 rounded-2xl flex items-center gap-3">

      <div>

        {icon}

      </div>

      <div className="text-lg font-bold">

        {title}

      </div>

    </div>
  );
}

export default Navbar;