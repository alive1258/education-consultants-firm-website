"use client";
import {
  PiRocketLaunch,
  PiCertificate,
  PiCurrencyDollar,
  PiHouse,
  PiMedal,
  PiTrendUp,
  PiUsersThree,
} from "react-icons/pi";
import { FaUniversity, FaHandsHelping } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const ScholarshipBenefits = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Scholarship Card */}
      <div className="lg:col-span-2">
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/50 to-cyan-50/30 rounded-2xl border border-gray-100 shadow-lg shadow-blue-50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl"></div>

          <div className="relative p-8 h-full rounded-2xl">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <PiRocketLaunch className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-linear-to-r from-blue-500/10 to-cyan-400/10 text-blue-600 text-sm font-medium rounded-full">
                    Exclusive Offer
                  </span>
                  <span className="px-3 py-1 bg-linear-to-r from-green-500/10 to-emerald-400/10 text-green-600 text-sm font-medium rounded-full">
                    100% Scholarship
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Premium Scholarship Programs
                </h2>
                <p className="text-gray-600 mt-1">
                  Comprehensive financial support for international students
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                {[
                  {
                    icon: PiCertificate,
                    title: "Full Tuition Waiver",
                    desc: "100% scholarship coverage",
                  },
                  {
                    icon: FaUniversity,
                    title: "Top-Ranked Universities",
                    desc: "QS World Ranking institutions",
                  },
                  {
                    icon: PiHouse,
                    title: "Free Accommodation",
                    desc: "On-campus residence included",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/feature">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center shrink-0 border border-blue-100 group-hover/feature:shadow-lg group-hover/feature:shadow-blue-100 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: PiCurrencyDollar,
                    title: "Monthly Stipend",
                    desc: "RMB 2,000 - 3,000 living allowance",
                  },
                  {
                    icon: PiMedal,
                    title: "No IELTS Required",
                    desc: "English medium programs available",
                  },
                  {
                    icon: PiTrendUp,
                    title: "Low Processing Fee",
                    desc: "Affordable application cost",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/feature">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center shrink-0 border border-blue-100 group-hover/feature:shadow-lg group-hover/feature:shadow-blue-100 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* University Badges */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-gray-600 text-sm font-medium mb-4">
                Partner Universities
              </p>
              <div className="flex flex-wrap gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-linear-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 flex items-center gap-2"
                  >
                    <MdSchool className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">
                      University {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Card */}
      <div>
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-linear-to-br from-white via-emerald-50/30 to-teal-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-emerald-50"></div>
          <div className="absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl"></div>

          <div className="relative p-8 h-full rounded-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <FaHandsHelping className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Complete Support
                </h2>
                <p className="text-gray-600 text-sm">End-to-end guidance</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: PiCertificate,
                  title: "Expert Counseling",
                  desc: "Personalized guidance",
                },
                {
                  icon: PiCertificate,
                  title: "Internship Programs",
                  desc: "Industry experience",
                },
                {
                  icon: PiCertificate,
                  title: "Halal Food Arrangement",
                  desc: "Cultural accommodation",
                },
                {
                  icon: PiCertificate,
                  title: "100% Success Rate",
                  desc: "Proven track record",
                },
                {
                  icon: PiCertificate,
                  title: "Fast Processing",
                  desc: "Quick admission",
                },
                {
                  icon: PiCertificate,
                  title: "Part-time Job Support",
                  desc: "Work opportunities",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group/support">
                  <div className="w-10 h-10 bg-linear-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center shrink-0 border border-emerald-100 group-hover/support:shadow-md group-hover/support:shadow-emerald-100 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <PiUsersThree className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600">
                      Students Successfully Placed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipBenefits;
