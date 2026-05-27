import React, { useEffect, useState } from "react";

import {
  Server,
  CheckCircle2,
  AlertTriangle,
  LoaderCircle,
} from "lucide-react";

import { checkBackendHealth } from "../services/api";

function BackendStatus() {

  const [status, setStatus] = useState("loading");

  useEffect(() => {

    checkHealth();

  }, []);

  const checkHealth = async () => {

    try {

      await checkBackendHealth();

      setStatus("online");

    } catch (error) {

      console.log(error);

      setStatus("offline");
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-xl p-6">

      <div className="flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <div className="bg-[#14532d] text-white p-4 rounded-2xl">

            <Server size={34} />

          </div>

          <div>

            <h2 className="text-2xl font-black text-[#14532d]">

              Backend Connection Status

            </h2>

            <p className="text-lg text-gray-500 mt-1">

              FastAPI AI Engine Monitoring

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          {status === "loading" && (

            <div className="bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg">

              <LoaderCircle
                size={24}
                className="animate-spin"
              />

              Checking...

            </div>

          )}

          {status === "online" && (

            <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg">

              <CheckCircle2 size={24} />

              Backend Online

            </div>

          )}

          {status === "offline" && (

            <div className="bg-red-100 text-red-700 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg">

              <AlertTriangle size={24} />

              Backend Offline

            </div>

          )}

        </div>

      </div>

      {/* EXTRA DETAILS */}

      <div className="mt-6 bg-[#f5f7f5] rounded-2xl p-5 border border-green-100">

        <div className="grid grid-cols-3 gap-6">

          <StatusItem
            label="API"
            value="FastAPI"
          />

          <StatusItem
            label="OCR Engine"
            value="Active"
          />

          <StatusItem
            label="AI Pipeline"
            value="Connected"
          />

        </div>

      </div>

    </div>
  );
}

function StatusItem({ label, value }) {

  return (

    <div className="bg-white rounded-2xl p-4 shadow-sm">

      <p className="text-gray-500 text-lg">

        {label}

      </p>

      <h3 className="text-2xl font-black text-[#14532d] mt-2">

        {value}

      </h3>

    </div>
  );
}

export default BackendStatus;