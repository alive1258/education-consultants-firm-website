"use client";

import Marquee from "react-fast-marquee";

import {
  PiGraduationCap,
  PiCrown,
  PiStarFill,
  PiTrendUp,
} from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import MarquereVarsity from "./MarquereVarsity";

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const TopUniversity = () => {
  const stats: StatItem[] = [
    {
      value: "50+",
      label: "Partner Universities",
      icon: <FaUniversity />,
      color: "blue",
    },
    {
      value: "100%",
      label: "Scholarship Coverage",
      icon: <PiStarFill />,
      color: "green",
    },
    {
      value: "5000+",
      label: "Students Enrolled",
      icon: <PiGraduationCap />,
      color: "purple",
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <PiTrendUp />,
      color: "orange",
    },
  ];

  const statColorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-6">
            <PiCrown className="text-lg" />
            <span className="font-semibold text-sm">PREMIUM PARTNERS</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top <span className="text-blue-600">Chinese</span> Universities
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-blue-200"></div>
            <PiGraduationCap className="text-3xl text-blue-500" />
            <div className="h-px w-16 bg-blue-200"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with China&apos;s premier institutions to provide
            world-class education with 100% scholarship opportunities
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-xl ${
                  statColorClasses[stat.color]
                } mb-4`}
              >
                <div className="text-2xl">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* University Marquee */}
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Featured Universities
                </h3>
                <p className="text-gray-600">
                  Scroll to explore our partner institutions
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Live Updates
                </span>
              </div>
            </div>

            <Marquee
              speed={40}
              gradient={true}
              gradientColor="rgb(255, 255, 255)"
              gradientWidth={100}
              pauseOnHover={true}
            >
              <MarquereVarsity />
            </Marquee>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    dot === 1 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-linear-to-r from-blue-50 to-indigo-50 px-8 py-6 rounded-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to apply for 2024 admissions?
              </h3>
              <p className="text-gray-600">
                Limited seats available across all partner universities
              </p>
            </div>
            <button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUniversity;
