import React from "react";

import { Truck, RefreshCw, Lock, ShieldCheck } from "lucide-react";

const policies = [
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description: "We process and dispatch orders promptly, with clear delivery timelines and order tracking at every step.",
  },
  {
    icon: RefreshCw,
    title: "Returns & Refunds",
    description: "A straightforward return process ensures quick resolution and full refunds within our policy window.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "All transactions are encrypted and processed through trusted payment gateways to keep your data safe.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Data Protection",
    description: "Your personal information is never sold or shared without consent and is used only to enhance your experience.",
  },
];

const OurPolicy = () => {
  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mt-13 tracking-wide text-center px-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Our Policy
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mt-6">
        At [Our Brand], we are committed to delivering a secure, transparent, and customer-first shopping experience.
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
          {" "}From secure payments to hassle-free returns
        </span>, our policies are built around trust, clarity, and your peace of mind.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {policies.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-400 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;