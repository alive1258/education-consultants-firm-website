import { PiStar } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <>
      {/* Combined Why Choose Us & Testimonial - Span 2 Columns */}
      <div className="lg:col-span-2">
        <div className="relative group h-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-white via-gradient-to-b via-blue-50/20 to-cyan-50/10 rounded-2xl border border-gray-100 shadow-xl shadow-blue-50/30"></div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-linear-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

          {/* Main Content */}
          <div className="relative p-6 md:p-8 h-full rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Why Choose Us - Enhanced */}
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-linear-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-linear-to-br from-cyan-500/10 to-blue-400/10 rounded-full blur-xl"></div>

                {/* Header */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      {/* Animated Glow */}
                      <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                      {/* Main Icon */}
                      <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <PiStar className="w-8 h-8 text-white" />

                        {/* Animated Particles */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-300 rounded-full animate-ping opacity-70"></div>
                        <div
                          className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-70"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-linear-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-3">
                        <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700">
                          WHY GLOBAL ACADEMIA?
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Our Unmatched
                        <span className="relative ml-3">
                          <span className="relative z-10 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Advantages
                          </span>
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-blue-100 to-cyan-100 rounded-full"></div>
                        </span>
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Experience excellence with our proven track record
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "15+ Years",
                      desc: "Industry Experience",
                      icon: "🏆",
                      gradient: "from-blue-500 to-blue-400",
                    },
                    {
                      title: "5000+",
                      desc: "Students Placed",
                      icon: "🎓",
                      gradient: "from-cyan-500 to-cyan-400",
                    },
                    {
                      title: "50+",
                      desc: "Partner Universities",
                      icon: "🏛️",
                      gradient: "from-blue-500 to-indigo-400",
                    },
                    {
                      title: "100%",
                      desc: "Success Rate",
                      icon: "✅",
                      gradient: "from-emerald-500 to-emerald-400",
                    },
                    {
                      title: "24/7",
                      desc: "Student Support",
                      icon: "💬",
                      gradient: "from-cyan-500 to-blue-400",
                    },
                    {
                      title: "Complete",
                      desc: "Post-Arrival Assistance",
                      icon: "✈️",
                      gradient: "from-blue-500 to-cyan-400",
                    },
                  ].map((item, i) => (
                    <div key={i} className="group/feature relative">
                      <div className="relative p-4 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300 overflow-hidden">
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.gradient} flex items-center justify-center text-2xl`}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-xl font-bold text-gray-900 group-hover/feature:text-gray-900">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-600 group-hover/feature:text-gray-700">
                                {item.desc}
                              </div>
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-linear-to-r ${item.gradient} rounded-full transition-all duration-1000`}
                              style={{
                                width: item.title === "100%" ? "100%" : "95%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="w-full group/btn px-6 py-3 bg-linear-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900">
                            Start Your Journey
                          </div>
                          <div className="text-xs text-gray-600">
                            Get personalized guidance
                          </div>
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              {/* Testimonial - Enhanced */}
              <div className="relative">
                {/* Main Testimonial Card */}
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-linear-to-br from-white via-white to-blue-50/30 rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/20 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-blue-500/5 to-cyan-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 right-0 w-72 h-72 bg-linear-to-tr from-cyan-500/5 to-blue-400/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 md:p-8">
                      {/* Testimonial Header */}
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-full border border-blue-100/50 mb-6">
                          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-blue-700">
                              STUDENT VOICE
                            </div>
                            <div className="text-xs text-gray-600">
                              Real experiences, real results
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Transformative
                          <span className="relative ml-3">
                            <span className="relative z-10 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                              Success Stories
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-blue-100 to-cyan-100 rounded-full"></div>
                          </span>
                        </h3>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-8">
                        <div className="absolute -top-6 -left-6 text-7xl text-blue-100 font-serif opacity-50"></div>
                        <p className="text-gray-700 text-lg leading-relaxed italic relative z-10">
                          The entire process was seamless from start to finish.
                          Global Academias expertise made my dream of studying
                          at a top Chinese university a reality.
                        </p>
                        <div className="absolute -bottom-6 -right-6 text-7xl text-cyan-100 font-serif opacity-50"></div>
                      </div>

                      {/* Student Profile */}
                      <div className="mb-8">
                        <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50">
                          <div className="relative">
                            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full overflow-hidden">
                              <div className="w-full h-full bg-linear-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                  AR
                                </span>
                              </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-linear-to-br from-amber-500 to-orange-400 rounded-full border-2 border-white flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 text-lg">
                                  Ahmed Rahman
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  Computer Science Graduate
                                </p>
                              </div>
                              <div className="hidden sm:block">
                                <div className="px-3 py-1 bg-linear-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-100">
                                  <span className="text-xs font-medium text-emerald-700">
                                    Graduated 2023
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4 text-amber-400 fill-current"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-900">
                                  4.9/5
                                </span>
                              </div>

                              <div className="h-4 w-px bg-gray-200"></div>

                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-linear-to-br from-blue-500 to-cyan-400 rounded flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  Tsinghua University
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Success Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            value: "Full",
                            label: "Scholarship",
                            icon: "💰",
                          },
                          {
                            value: "30 Days",
                            label: "Processing",
                            icon: "⚡",
                          },
                          {
                            value: "98%",
                            label: "Satisfaction",
                            icon: "😊",
                          },
                        ].map((metric, i) => (
                          <div
                            key={i}
                            className="text-center p-3 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-100"
                          >
                            <div className="text-2xl mb-1">{metric.icon}</div>
                            <div className="text-lg font-bold text-gray-900">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
