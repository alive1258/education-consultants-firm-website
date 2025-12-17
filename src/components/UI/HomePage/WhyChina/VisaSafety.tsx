import { PiShield, PiLightning, PiBookOpen } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const VisaSafety = () => {
  return (
    <div className="space-y-8">
      {/* Main Header for Section */}
      <div className="text-center mt-28">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-linear-to-r from-indigo-400 to-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-2 h-2 bg-linear-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
          <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            VISA & SAFETY ASSURANCE
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Complete Security &
          <span className="relative ml-4">
            <span className="relative z-10 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Seamless Processing
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full"></div>
          </span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your safety and visa success are our top priorities. We ensure a
          secure and smooth journey from application to arrival.
        </p>
      </div>

      <div className="">
        {/* Security Features Card */}
        <div className="relative group">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-linear-to-br from-white via-indigo-50/30 to-blue-50/20 rounded-2xl border border-gray-100 shadow-xl shadow-indigo-50/30"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>

          {/* Main Card Content */}
          <div className="relative p-6 md:p-8 h-full rounded-2xl">
            {/* Card Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <div className="relative w-16 h-16 bg-linear-to-br from-indigo-500 via-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MdSecurity className="w-8 h-8 text-white" />

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-linear-to-br from-cyan-400 to-blue-300 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-4 h-4 bg-linear-to-br from-blue-400 to-indigo-300 rounded-full border-2 border-white shadow-sm animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-indigo-50 to-blue-50 rounded-full border border-indigo-100 mb-2">
                  <div className="w-1.5 h-1.5 bg-linear-to-r from-indigo-500 to-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-indigo-700">
                    SECURITY FIRST
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  360° Safety
                  <span className="relative ml-3">
                    <span className="relative z-10 bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                      Coverage
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-indigo-100 to-blue-100 rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Comprehensive protection throughout your journey
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4">
              {[
                {
                  icon: PiShield,
                  title: "24/7 Campus Security",
                  value: "Full Protection",
                  description:
                    "Round-the-clock monitoring & emergency response",
                  gradient: "from-indigo-500 to-blue-400",
                  bgColor: "from-indigo-50 to-blue-50",
                },
                {
                  icon: FaAward,
                  title: "Visa Success Rate",
                  value: "98%",
                  description: "Industry-leading approval rate",
                  gradient: "from-blue-500 to-indigo-400",
                  bgColor: "from-blue-50 to-indigo-50",
                },
                {
                  icon: PiLightning,
                  title: "Fast Visa Processing",
                  value: "30 Days",
                  description: "Expedited application handling",
                  gradient: "from-indigo-500 to-cyan-400",
                  bgColor: "from-indigo-50 to-cyan-50",
                },
                {
                  icon: PiBookOpen,
                  title: "Legal Support",
                  value: "Available",
                  description: "Expert immigration assistance",
                  gradient: "from-blue-500 to-purple-400",
                  bgColor: "from-blue-50 to-purple-50",
                },
              ].map((item, i) => (
                <div key={i} className="group/feature relative overflow-hidden">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${item.bgColor} opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 rounded-xl`}
                  ></div>

                  {/* Main Feature Card */}
                  <div className="relative p-4 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-indigo-100/30 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div className="relative">
                          <div
                            className={`absolute -inset-3 bg-linear-to-r ${item.gradient} rounded-full blur-md opacity-0 group-hover/feature:opacity-20 transition-opacity duration-500`}
                          ></div>
                          <div className="relative w-12 h-12 bg-linear-to-br from-white to-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm group-hover/feature:shadow-md group-hover/feature:scale-110 transition-all duration-300">
                            <item.icon
                              className={`w-6 h-6 bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover/feature:text-gray-900 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-0.5 group-hover/feature:text-gray-700 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Value Badge */}
                      <div className="relative">
                        <div
                          className={`absolute -inset-3 bg-linear-to-r ${item.gradient} rounded-full blur-sm opacity-0 group-hover/feature:opacity-30 transition-opacity duration-500`}
                        ></div>
                        <div
                          className={`relative px-4 py-2 bg-linear-to-r ${item.bgColor} rounded-lg border border-gray-100 group-hover/feature:border-transparent transition-all duration-300`}
                        >
                          <span
                            className={`text-lg font-bold bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}
                          >
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-linear-to-b from-indigo-500 to-blue-400 rounded-full"></div>
                  <div>
                    <div className="text-sm text-gray-600">Certified by</div>
                    <div className="font-medium text-gray-900">
                      International Education Standards
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Verified & Secure</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
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

export default VisaSafety;
