"use client";

import { useState } from "react";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

const Banner = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats: StatItem[] = [
    { value: "500+", label: "Universities", icon: "🏛️" },
    { value: "100%", label: "Scholarship", icon: "🎓" },
    { value: "50K+", label: "Students", icon: "👨‍🎓" },
    { value: "200+", label: "Programs", icon: "📚" },
  ];

  const features = [
    {
      title: "No Application Fee",
      desc: "Zero cost application",
      icon: "💸",
    },
    {
      title: "Full Tuition",
      desc: "100% scholarship",
      icon: "💰",
    },
    { title: "Accommodation", desc: "Free housing", icon: "🏠" },
    { title: "Medical Insurance", desc: "Full coverage", icon: "🏥" },
    { title: "Career Support", desc: "Job placement", icon: "💼" },
    {
      title: "Cultural Programs",
      desc: "Immersion activities",
      icon: "🎎",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50"
      aria-label="Hero banner"
    >
      {/* Responsive background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tl from-cyan-200/30 to-transparent rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="order-2 lg:order-1">
                {/* Main Title - Fully Responsive */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
                  <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    100% Scholarship
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-1 sm:mt-2">
                    Study in China
                  </span>
                </h1>

                {/* Description - Responsive */}
                <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-600 font-medium mb-6 sm:mb-8 md:mb-10 max-w-xl leading-relaxed">
                  Transform your future with fully-funded opportunities at
                  Chinas top-ranked universities. World-class education awaits
                  you.
                </p>

                {/* Interactive Stats - Responsive Grid */}
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 mb-8 sm:mb-10">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-5 text-center border-2 transition-all duration-300 hover:scale-105 cursor-pointer
                        ${
                          hoveredStat === index
                            ? "border-blue-500 shadow-lg sm:shadow-xl shadow-blue-500/20"
                            : "border-gray-100 shadow-md hover:shadow-lg"
                        }`}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <div className="text-2xl xs:text-3xl sm:text-4xl mb-1 xs:mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1 xs:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs xs:text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Responsive Stacking */}
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mb-8 sm:mb-10 md:mb-12">
                  <button
                    className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 xs:py-3.5 sm:py-4 px-6 xs:px-7 sm:px-8 rounded-lg xs:rounded-xl text-base xs:text-lg sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 xs:gap-3 overflow-hidden"
                    aria-label="Apply Now"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <svg
                      className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 xs:group-hover:translate-x-2 transition-transform relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>

                  <button
                    className="group relative bg-white text-gray-800 font-bold py-3 xs:py-3.5 sm:py-4 px-6 xs:px-7 sm:px-8 rounded-lg xs:rounded-xl text-base xs:text-lg sm:text-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center gap-2 xs:gap-3 hover:shadow-lg"
                    aria-label="View Programs"
                  >
                    <span>Explore Programs</span>
                    <svg
                      className="w-4 h-4 xs:w-5 xs:h-5 group-hover:rotate-90 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Quick Info - Responsive */}
                <div className="flex flex-wrap justify-center xs:justify-start gap-3 xs:gap-4 text-xs xs:text-sm text-gray-600">
                  <div className="flex items-center gap-1 xs:gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Applications Open</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span>Visa Assistance</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative order-1 lg:order-2">
                {/* Main Feature Card - Responsive */}
                <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Card Top Decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 xs:h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

                  {/* Features Grid - Responsive */}
                  <div className="grid grid-cols-2 xs:grid-cols-2 gap-3 xs:gap-4 mb-6 sm:mb-8">
                    {features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg xs:rounded-xl p-3 xs:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-2 xs:gap-3">
                          <div className="text-xl xs:text-2xl">
                            {feature.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-xs xs:text-sm truncate">
                              {feature.title}
                            </h3>
                            <p className="text-xs text-gray-600 truncate">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Student Testimonials - Responsive */}
                  <div className="bg-gradient-to-r from-blue-50/80 to-cyan-50/80 rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 mb-6 sm:mb-8 border border-blue-100 backdrop-blur-sm">
                    <div className="flex flex-col xs:flex-row items-start gap-3 xs:gap-4">
                      <div className="flex -space-x-3 flex-shrink-0 justify-center xs:justify-start">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-xs xs:text-sm font-bold text-white shadow-md"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 text-center xs:text-left">
                        <div className="flex justify-center xs:justify-start items-center gap-1 xs:gap-2 mb-1 xs:mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 text-sm xs:text-base"
                            >
                              ★
                            </span>
                          ))}
                          <span className="text-xs xs:text-sm font-bold text-gray-900">
                            4.9/5
                          </span>
                        </div>
                        <p className="text-base xs:text-lg font-bold text-gray-900 mb-1">
                          <span className="text-blue-600">1,200+ students</span>{" "}
                          transformed
                        </p>
                        <p className="text-xs xs:text-sm text-gray-600">
                          Join our global community
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* University Partners - Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base xs:text-lg font-bold text-gray-900 mb-3 xs:mb-4 text-center">
                      Top Universities
                    </h3>
                    <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 xs:gap-3">
                      {["Tsinghua", "Peking", "Fudan", "Zhejiang"].map(
                        (uni, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-lg p-2 xs:p-3 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="text-base xs:text-lg font-bold text-blue-600 mb-0.5 xs:mb-1">
                              {uni[0]}
                            </div>
                            <div className="text-xs font-medium text-gray-700 truncate">
                              {uni}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Awards - Responsive Sizing & Positioning */}
                <div className="hidden xs:block absolute -top-3 xs:-top-4 -right-3 xs:-right-4 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-xl xs:text-2xl sm:text-3xl shadow-lg sm:shadow-xl animate-float">
                  🏆
                </div>
                <div className="hidden xs:block absolute -bottom-3 xs:-bottom-4 -left-3 xs:-left-4 w-10 h-10 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full flex items-center justify-center text-lg xs:text-xl sm:text-2xl shadow-lg sm:shadow-xl animate-float delay-1000">
                  ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations with reduced motion support */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-gradient,
          .animate-pulse {
            animation: none;
          }

          .transition-all,
          .transition-transform {
            transition: none;
          }
        }

        /* Extra small devices (phones, 375px and up) */
        @media (min-width: 375px) {
          .xs\\:block {
            display: block !important;
          }
          .xs\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
