import React from "react";

import {
  Leaf,
  Globe2,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {

  return (

    <div className="bg-[#14532d] text-white rounded-3xl p-10 shadow-2xl mt-10 mb-10">

      <div className="grid grid-cols-3 gap-10">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-4">

            <Leaf size={50} />

            <h1 className="text-4xl font-black">

              SoilENZ AI

            </h1>

          </div>

          <p className="text-lg text-green-100 mt-6 leading-relaxed">

            Advanced agricultural intelligence platform combining
            AI, soil analytics, sustainability insights, and
            carbon credit intelligence for precision farming.

          </p>

        </div>

        {/* CENTER */}

        <div>

          <h2 className="text-3xl font-black mb-6">

            Platform Features

          </h2>

          <div className="space-y-4">

            <FooterItem text="AI Soil Analysis" />

            <FooterItem text="OCR Soil Report Extraction" />

            <FooterItem text="Carbon Credit Intelligence" />

            <FooterItem text="Precision Farming Insights" />

            <FooterItem text="Enterprise PDF Reports" />

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <h2 className="text-3xl font-black mb-6">

            Contact & Support

          </h2>

          <div className="space-y-5">

            <ContactItem
              icon={<Mail size={24} />}
              text="soilenz.ai@gmail.com"
            />

            <ContactItem
              icon={<Phone size={24} />}
              text="+91 9876543210"
            />

            <ContactItem
              icon={<MapPin size={24} />}
              text="Bangalore, Karnataka"
            />

          </div>

          {/* BADGES */}

          <div className="flex gap-4 mt-8">

            <Badge
              icon={<ShieldCheck size={20} />}
              text="AI Verified"
            />

            <Badge
              icon={<Globe2 size={20} />}
              text="Sustainable"
            />

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/20 mt-10 pt-6 flex justify-between items-center">

        <p className="text-lg text-green-100">

          © 2025 SoilENZ AI Platform. All rights reserved.

        </p>

        <div className="text-lg font-bold">

          Precision Agriculture • Climate Intelligence • Sustainability

        </div>

      </div>

    </div>
  );
}

/* FOOTER ITEM */

function FooterItem({ text }) {

  return (

    <div className="flex items-center gap-3">

      <div className="w-3 h-3 rounded-full bg-green-300"></div>

      <p className="text-lg">

        {text}

      </p>

    </div>
  );
}

/* CONTACT ITEM */

function ContactItem({ icon, text }) {

  return (

    <div className="flex items-center gap-4">

      <div className="bg-white/10 p-3 rounded-xl">

        {icon}

      </div>

      <p className="text-lg">

        {text}

      </p>

    </div>
  );
}

/* BADGE */

function Badge({ icon, text }) {

  return (

    <div className="bg-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">

      {icon}

      <span className="font-bold">

        {text}

      </span>

    </div>
  );
}

export default Footer;