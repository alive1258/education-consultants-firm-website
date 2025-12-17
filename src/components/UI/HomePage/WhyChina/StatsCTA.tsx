"use client";

import {
  PiCertificate,
  PiShieldCheck,
  PiUsersThree,
  PiGraduationCap,
  PiChartLineUp,
  PiGlobeHemisphereWest,
} from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";

const StatsCTA = () => {
  return (
    <>
      {/* Statistics Banner */}
      <div className="mt-16">
        <div className="bg-linear-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 md:p-12 shadow-xl shadow-blue-500/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "100%",
                label: "Scholarship Success",
                icon: PiCertificate,
              },
              {
                value: "98%",
                label: "Visa Approval Rate",
                icon: PiShieldCheck,
              },
              {
                value: "50+",
                label: "Partner Universities",
                icon: FaUniversity,
              },
              { value: "5000+", label: "Happy Students", icon: PiUsersThree },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <div className="text-center bg-linear-to-b from-white via-blue-50/30 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-cyan-400/10 rounded-full mb-6">
            <PiGlobeHemisphereWest className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">
              Limited Seats Available
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Educational Journey in China?
          </h3>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the next batch of international students and secure your future
            with Chinas premium education system
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="group px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-3">
                Apply for Scholarship 2025
                <PiGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-3">
                Book Free Consultation
                <PiChartLineUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              Next scholarship application deadline: December 31, 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCTA;
