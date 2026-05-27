import React from "react";

import {
  CheckCircle2,
  BrainCircuit,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function FinalConclusion() {

  const achievements = [

    "AI-powered soil intelligence system",

    "OCR-based laboratory report extraction",

    "Enterprise-grade analytics dashboards",

    "Carbon credit intelligence integration",

    "Precision agriculture recommendations",

    "Premium multi-page PDF generation",

    "FastAPI + React scalable architecture",

    "Sustainability & climate resilience analytics",
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Final Conclusion

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            MCA Major Project Completion Summary

          </p>

        </div>

        <div className="bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white px-8 py-4 rounded-2xl text-xl font-bold flex items-center gap-3">

          <Sparkles size={28} />

          PROJECT COMPLETED

        </div>

      </div>

      {/* HERO */}

      <div className="bg-gradient-to-r from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-12 shadow-xl">

        <div className="grid grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-6xl font-black leading-tight">

              SoilENZ AI Platform

            </h2>

            <p className="text-2xl mt-8 opacity-95 leading-relaxed">

              An enterprise-grade AI agricultural intelligence platform
              integrating OCR, machine learning, sustainability analytics,
              carbon intelligence, and precision farming systems.

            </p>

          </div>

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full border-[18px] border-green-300 flex flex-col items-center justify-center">

              <div className="text-8xl font-black">

                AI

              </div>

              <p className="text-3xl mt-4">

                Agriculture Intelligence

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="mt-12">

        <h2 className="text-4xl font-black text-[#14532d] mb-8">

          Project Achievements

        </h2>

        <div className="grid grid-cols-2 gap-6">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-[#f5f7f5] rounded-2xl p-6 border border-green-100 flex items-center gap-5 shadow-sm"
            >

              <div className="text-green-600">

                <CheckCircle2 size={32} />

              </div>

              <p className="text-2xl font-bold text-[#14532d]">

                {item}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* IMPACT */}

      <div className="mt-12 grid grid-cols-3 gap-8">

        <ImpactCard
          icon={<BrainCircuit size={46} />}
          title="AI Innovation"
          description="Advanced AI analytics for precision agriculture."
        />

        <ImpactCard
          icon={<Leaf size={46} />}
          title="Sustainability"
          description="Supports regenerative farming and carbon intelligence."
        />

        <ImpactCard
          icon={<Globe2 size={46} />}
          title="Climate Impact"
          description="Improves resilience and sustainability planning."
        />

      </div>

      {/* FINAL MESSAGE */}

      <div className="mt-12 bg-[#14532d] text-white rounded-3xl p-12">

        <div className="flex items-start gap-6">

          <div className="bg-white/10 p-5 rounded-2xl">

            <ShieldCheck size={52} />

          </div>

          <div>

            <h2 className="text-5xl font-black mb-6">

              Final Statement

            </h2>

            <p className="text-2xl leading-relaxed opacity-95">

              SoilENZ demonstrates how AI, OCR, cloud-ready architecture,
              and sustainability intelligence can transform agricultural
              analysis into a scalable enterprise solution. The platform
              provides intelligent decision-making support for farmers,
              researchers, and agricultural enterprises while enabling
              future integration with satellite intelligence, climate
              analytics, and carbon marketplaces.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

/* IMPACT CARD */

function ImpactCard({ icon, title, description }) {

  return (

    <div className="bg-gradient-to-br from-[#14532d] to-[#1f8b45] text-white rounded-3xl p-8 shadow-xl">

      <div>

        {icon}

      </div>

      <h2 className="text-3xl font-black mt-6">

        {title}

      </h2>

      <p className="text-lg opacity-95 mt-4 leading-relaxed">

        {description}

      </p>

    </div>
  );
}

export default FinalConclusion;