"use client";

import { PiMapPin, PiGlobe } from "react-icons/pi";
import { FaUsers, FaStar } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";

// Update import paths to use Next.js public folder structure
const universityLogos = {
  sinchuan: "/image/universities/sinchuan.png",
  petroleum: "/image/universities/petroleum.png",
  aviation: "/image/universities/aviation.png",
  tiangong: "/image/universities/tiangong.png",
  yangzhou: "/image/universities/yangzhou.png",
  nanjing: "/image/universities/nanjing.png",
  changzhou: "/image/universities/changzhou.png",
  gannan: "/image/universities/gannan.png",
};

// University data array with logo paths
const universities = [
  {
    id: 1,
    name: "Sichuan University",
    abbreviation: "SCU",
    logo: universityLogos.sinchuan,
    location: "Chengdu, Sichuan",
    ranking: "Top 15 in China",
    students: "70,000+",
    international: "5,000+",
    color: "blue" as const,
  },
  {
    id: 2,
    name: "Southwest Petroleum University",
    abbreviation: "SWPU",
    logo: universityLogos.petroleum,
    location: "Chengdu, Sichuan",
    ranking: "Top 5 for Petroleum",
    students: "30,000+",
    international: "2,000+",
    color: "green" as const,
  },
  {
    id: 3,
    name: "Civil Aviation University of China",
    abbreviation: "CAUC",
    logo: universityLogos.aviation,
    location: "Tianjin",
    ranking: "#1 Aviation University",
    students: "28,000+",
    international: "1,500+",
    color: "red" as const,
  },
  {
    id: 4,
    name: "Tiangong University",
    abbreviation: "TGU",
    logo: universityLogos.tiangong,
    location: "Tianjin",
    ranking: "Top 100 in China",
    students: "32,000+",
    international: "2,500+",
    color: "purple" as const,
  },
  {
    id: 5,
    name: "Yangzhou University",
    abbreviation: "YZU",
    logo: universityLogos.yangzhou,
    location: "Yangzhou, Jiangsu",
    ranking: "Top 80 in China",
    students: "35,000+",
    international: "3,000+",
    color: "orange" as const,
  },
  {
    id: 6,
    name: "Nanjing Tech University",
    abbreviation: "NJTech",
    logo: universityLogos.nanjing,
    location: "Nanjing, Jiangsu",
    ranking: "Top 70 in China",
    students: "40,000+",
    international: "3,500+",
    color: "teal" as const,
  },
  {
    id: 7,
    name: "Changzhou University",
    abbreviation: "CCZU",
    logo: universityLogos.changzhou,
    location: "Changzhou, Jiangsu",
    ranking: "Top 150 in China",
    students: "25,000+",
    international: "1,800+",
    color: "indigo" as const,
  },
  {
    id: 8,
    name: "Gannan Normal University",
    abbreviation: "GNU",
    logo: universityLogos.gannan,
    location: "Ganzhou, Jiangxi",
    ranking: "Top Teacher's College",
    students: "20,000+",
    international: "800+",
    color: "pink" as const,
  },
];

interface University {
  id: number;
  name: string;
  abbreviation: string;
  logo: string;
  location: string;
  ranking: string;
  students: string;
  international: string;
  color:
    | "blue"
    | "green"
    | "red"
    | "purple"
    | "orange"
    | "teal"
    | "indigo"
    | "pink";
}

interface ColorClasses {
  bg: string;
  text: string;
  main: string;
}

const MarquereVarsity = () => {
  // Define color classes mapping with proper Tailwind classes
  const colorClasses: Record<University["color"], ColorClasses> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", main: "bg-blue-500" },
    green: { bg: "bg-green-100", text: "text-green-600", main: "bg-green-500" },
    red: { bg: "bg-red-100", text: "text-red-600", main: "bg-red-500" },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      main: "bg-purple-500",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      main: "bg-orange-500",
    },
    teal: { bg: "bg-teal-100", text: "text-teal-600", main: "bg-teal-500" },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      main: "bg-indigo-500",
    },
    pink: { bg: "bg-pink-100", text: "text-pink-600", main: "bg-pink-500" },
  };

  return (
    <div className="flex gap-6 px-4 py-2">
      {universities.map((uni) => {
        const colors = colorClasses[uni.color];

        return (
          <div
            key={uni.id}
            className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 w-80 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shrink-0"
          >
            {/* University Card Header */}
            <div className="p-6">
              {/* University Logo and Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative p-3 rounded-xl ${colors.bg}`}>
                  <div className="w-16 h-16 rounded-lg bg-white border border-gray-200 flex items-center justify-center"></div>
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${colors.main} flex items-center justify-center`}
                  >
                    <FaStar className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {uni.abbreviation}
                  </h3>
                  <p className="text-sm text-gray-600">{uni.name}</p>
                </div>
              </div>

              {/* University Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <PiMapPin className="text-gray-400" />
                  <span className="text-sm font-medium">{uni.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <BsTrophy className="text-gray-400" />
                  <span className="text-sm font-medium">{uni.ranking}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-gray-400" />
                    <span className="text-sm font-medium">{uni.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiGlobe className="text-gray-400" />
                    <span className="text-sm font-medium">
                      {uni.international}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decoration */}
            <div
              className={`absolute top-0 right-0 w-20 h-20 ${colors.main}/10 rounded-full -translate-y-10 translate-x-10`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default MarquereVarsity;
