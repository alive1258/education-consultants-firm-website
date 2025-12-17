import { PiBuildings } from "react-icons/pi";
import { FaCheckCircle, FaGlobeAmericas } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const CampusFacilities = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-linear-to-br from-white via-purple-50/30 to-pink-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-purple-50"></div>

          <div className="relative p-8 h-full rounded-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <PiBuildings className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  World-Class Campus Facilities
                </h2>
                <p className="text-gray-600 text-sm">
                  Modern infrastructure for holistic development
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Modern Accommodation with AC",
                  "High-speed Internet Access",
                  "24/7 Library Access",
                  "Sports Complex & Gym",
                  "Swimming Pool",
                  "Medical Facilities",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Research Laboratories",
                  "Cultural Centers",
                  "Student Clubs",
                  "Career Counseling",
                  "Language Support",
                  "Security Services",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-linear-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 flex items-center justify-center"
                  >
                    <MdWorkspacePremium className="w-8 h-8 text-purple-600 opacity-70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-linear-to-br from-white via-amber-50/30 to-orange-50/20 rounded-2xl border border-gray-100 shadow-lg shadow-amber-50"></div>

          <div className="relative p-8 h-full rounded-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <FaGlobeAmericas className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Global Recognition
                </h2>
                <p className="text-gray-600 text-sm">
                  Internationally accredited degrees
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="p-5 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  Top 100
                </div>
                <div className="text-gray-700 font-medium">
                  QS Asia University Rankings
                </div>
              </div>

              <div className="p-5 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 font-medium">
                  International Partnerships
                </div>
              </div>

              <div className="p-5 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  98%
                </div>
                <div className="text-gray-700 font-medium">
                  Employment Rate After Graduation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;
