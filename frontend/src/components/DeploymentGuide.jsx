import React from "react";

import {
  Server,
  Globe,
  Database,
  Cloud,
  Docker,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function DeploymentGuide() {

  const steps = [

    {
      title: "Frontend Deployment",
      description:
        "Deploy React + Tailwind frontend using Vercel or Netlify.",
      icon: <Globe size={42} />,
      color: "from-cyan-500 to-cyan-700",
    },

    {
      title: "Backend Hosting",
      description:
        "Deploy FastAPI backend using Render, Railway, or AWS EC2.",
      icon: <Server size={42} />,
      color: "from-green-500 to-green-700",
    },

    {
      title: "Database Integration",
      description:
        "Use PostgreSQL for storing reports and user analytics.",
      icon: <Database size={42} />,
      color: "from-blue-500 to-blue-700",
    },

    {
      title: "Docker Containerization",
      description:
        "Containerize AI OCR and backend services using Docker.",
      icon: <Docker size={42} />,
      color: "from-purple-500 to-purple-700",
    },

    {
      title: "Cloud Scalability",
      description:
        "Integrate cloud scaling for enterprise agricultural workloads.",
      icon: <Cloud size={42} />,
      color: "from-emerald-500 to-emerald-700",
    },

    {
      title: "Security & Monitoring",
      description:
        "Enable JWT auth, monitoring, logging, and API protection.",
      icon: <ShieldCheck size={42} />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-12">

        <div>

          <h1 className="text-5xl font-black text-[#14532d]">

            Deployment Architecture

          </h1>

          <p className="text-xl text-gray-500 mt-3">

            Production-Ready AI Platform Deployment Workflow

          </p>

        </div>

        <div className="bg-[#14532d] text-white px-8 py-4 rounded-2xl text-xl font-bold">

          CLOUD READY

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-8">

        {steps.map((item, index) => (

          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 shadow-xl`}
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <h2 className="text-3xl font-black">

                  {item.title}

                </h2>

                <p className="text-lg opacity-95 mt-5 leading-relaxed">

                  {item.description}

                </p>

              </div>

              <div>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* CHECKLIST */}

      <div className="mt-12 bg-[#f5f7f5] rounded-3xl p-10 border border-green-100">

        <h2 className="text-4xl font-black text-[#14532d] mb-8">

          Production Deployment Checklist

        </h2>

        <div className="grid grid-cols-2 gap-6">

          <ChecklistItem text="Frontend Build Optimized" />
          <ChecklistItem text="FastAPI Backend Running" />
          <ChecklistItem text="OCR Engine Configured" />
          <ChecklistItem text="PostgreSQL Connected" />
          <ChecklistItem text="PDF Export Enabled" />
          <ChecklistItem text="Cloud Hosting Configured" />

        </div>

      </div>

      {/* SUMMARY */}

      <div className="mt-10 bg-[#14532d] text-white rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-6">

          Enterprise Deployment Summary

        </h2>

        <p className="text-2xl leading-relaxed opacity-95">

          SoilENZ is designed as a scalable enterprise-grade AI platform
          supporting cloud-native deployment, OCR processing pipelines,
          AI analytics workloads, and agricultural intelligence systems
          for large-scale precision farming operations.

        </p>

      </div>

    </div>
  );
}

/* CHECKLIST ITEM */

function ChecklistItem({ text }) {

  return (

    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">

      <div className="text-green-600">

        <CheckCircle2 size={28} />

      </div>

      <p className="text-xl font-bold text-[#14532d]">

        {text}

      </p>

    </div>
  );
}

export default DeploymentGuide;