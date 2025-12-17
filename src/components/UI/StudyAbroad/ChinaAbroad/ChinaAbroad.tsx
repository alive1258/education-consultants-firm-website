import React from "react";
import {
  PiGraduationCap,
  PiGlobe,
  PiUsers,
  PiMapPin,
  PiStudent,
} from "react-icons/pi";
import {
  FaRegShareSquare,
  FaUniversity,
  FaAward,
  FaHandsHelping,
  FaCity,
  FaHistory,
  FaMicroscope,
  FaBuilding,
} from "react-icons/fa";
import {
  MdOutlineSchool,
  MdOutlineLanguage,
  MdOutlineEngineering,
  MdOutlineScience,
  MdOutlineBusinessCenter,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { TbWorld, TbCurrencyYuan } from "react-icons/tb";
import chinaAbroad1 from "../../../../../public/assets/image/chinaAbroad2.jpg";
import Image, { StaticImageData } from "next/image";

interface EducationHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface PopularProgram {
  icon: React.ReactNode;
  title: string;
  programs: number;
  color: string;
}

interface CulturalHighlight {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ContentItem {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface CTAStat {
  icon: React.ReactNode;
  text: string;
}

const ChinaAbroad = () => {
  const educationHighlights: EducationHighlight[] = [
    {
      icon: <FaUniversity className="w-6 h-6" />,
      title: "2000+ Universities",
      description: "Including 147 double first-class universities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PiUsers className="w-6 h-6" />,
      title: "500,000+ Students",
      description: "International students from 196 countries",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "World Rankings",
      description: "6 universities in global top 100",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <TbCurrencyYuan className="w-6 h-6" />,
      title: "Affordable Education",
      description: "Costs 70% less than Western countries",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const popularPrograms: PopularProgram[] = [
    {
      icon: <MdOutlineEngineering className="w-6 h-6" />,
      title: "Engineering",
      programs: 850,
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <MdOutlineBusinessCenter className="w-6 h-6" />,
      title: "Business",
      programs: 620,
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <MdOutlineMedicalServices className="w-6 h-6" />,
      title: "Medicine",
      programs: 450,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: <MdOutlineScience className="w-6 h-6" />,
      title: "Sciences",
      programs: 380,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  const culturalHighlights: CulturalHighlight[] = [
    {
      title: "Modern Cities",
      icon: <FaCity className="w-5 h-5" />,
      description: "Experience cutting-edge technology and innovation",
    },
    {
      title: "Rich History",
      icon: <FaHistory className="w-5 h-5" />,
      description: "5000+ years of civilization and cultural heritage",
    },
    {
      title: "Research Hub",
      icon: <FaMicroscope className="w-5 h-5" />,
      description: "World-leading research facilities and opportunities",
    },
    {
      title: "Cultural Diversity",
      icon: <TbWorld className="w-5 h-5" />,
      description: "56 ethnic groups and diverse cultural experiences",
    },
  ];

  const contentItems: ContentItem[] = [
    {
      icon: <FaRegShareSquare className="w-5 h-5" />,
      title: "Global Academic Excellence",
      content:
        "Study at world-ranked universities with state-of-the-art facilities and internationally recognized degrees that open doors to global career opportunities.",
    },
    {
      icon: <FaRegShareSquare className="w-5 h-5" />,
      title: "Innovation & Technology",
      content:
        "China leads in technological innovation with massive investments in research and development, offering students cutting-edge learning environments.",
    },
    {
      icon: <FaRegShareSquare className="w-5 h-5" />,
      title: "Cultural Immersion",
      content:
        "Experience 5000+ years of rich cultural heritage while living in modern, dynamic cities that blend tradition with innovation.",
    },
    {
      icon: <FaRegShareSquare className="w-5 h-5" />,
      title: "Affordable Excellence",
      content:
        "Get world-class education at a fraction of Western costs, with numerous scholarship opportunities for international students.",
    },
    {
      icon: <FaRegShareSquare className="w-5 h-5" />,
      title: "Career Prospects",
      content:
        "China's booming economy offers unparalleled internship and employment opportunities in diverse industries for international graduates.",
    },
  ];

  const imageTags: string[] = [
    "Modern Campuses",
    "Global Network",
    "Research Excellence",
  ];

  const ctaStats: CTAStat[] = [
    { icon: <FaBuilding className="w-5 h-5" />, text: "Top Universities" },
    {
      icon: <MdOutlineLanguage className="w-5 h-5" />,
      text: "English Programs",
    },
    { icon: <FaHandsHelping className="w-5 h-5" />, text: "Full Support" },
  ];

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-blue-50/20 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-500 via-yellow-500 to-red-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-yellow-500 rounded-full blur opacity-75"></div>
              <div className="relative p-3 bg-linear-to-r from-red-500 to-yellow-500 rounded-full">
                <PiGlobe className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-linear-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              STUDY IN CHINA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover World-Class
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-red-600 via-yellow-500 to-red-600">
              Education in China
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of international students experiencing cutting-edge
            education, rich cultural heritage, and unparalleled career
            opportunities in China&apos;s top universities.
          </p>
        </div>

        {/* Stats Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {educationHighlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 h-full">
                <div
                  className={`mb-4 w-14 h-14 rounded-xl bg-linear-to-br ${highlight.color} flex items-center justify-center`}
                >
                  <div className="text-white">{highlight.icon}</div>
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </div>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MdOutlineSchool className="w-7 h-7 text-red-600" />
                Why Choose China for Education?
              </h2>

              <div className="space-y-6">
                {contentItems.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-red-600">{item.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Highlights */}
            <div className="bg-linear-to-r from-red-50 to-yellow-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PiMapPin className="w-6 h-6 text-red-600" />
                Cultural & Academic Highlights
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {culturalHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <div className="text-red-600">{highlight.icon}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {highlight.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Programs */}
          <div className="space-y-8">
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-red-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={chinaAbroad1 as StaticImageData}
                  alt="Study in China"
                  className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700"
                  width={800}
                  height={400}
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <PiGraduationCap className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        Study in China
                      </div>
                      <div className="text-white/90 text-sm">
                        World-class education awaits you
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {imageTags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Programs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PiStudent className="w-6 h-6 text-red-600" />
                Popular Study Programs
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {popularPrograms.map((program, index) => (
                  <div key={index} className="group">
                    <div className="relative p-5 rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                      <div
                        className={`mb-4 w-12 h-12 rounded-lg ${program.color} flex items-center justify-center`}
                      >
                        {program.icon}
                      </div>

                      <div className="mb-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {program.title}
                        </h4>
                        <div className="text-2xl font-bold text-gray-900">
                          {program.programs}+
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Available programs in Chinese universities
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-blue-600 to-cyan-500 p-8 md:p-12 shadow-2xl">
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your Chinese Education Journey?
            </h3>

            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of successful international students who
              transformed their futures through education in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                Explore Programs
              </button>
              <button className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors">
                Book Free Consultation
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-white/90">
              {ctaStats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span>{stat.text}</span>
                  </div>
                  {index < ctaStats.length - 1 && (
                    <div className="h-6 w-px bg-white/30"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinaAbroad;
