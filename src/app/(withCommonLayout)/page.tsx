import Banner from "@/src/components/UI/HomePage/Banner/Banner";
import Welcome from "@/src/components/UI/HomePage/Welcome/Welcome";
import WhyChina from "@/src/components/UI/HomePage/WhyChina/WhyChina";
import ProgramHighlights from "@/src/components/UI/HomePage/ProgramHighlights/ProgramHighlights";
import UniversityStats from "@/src/components/UI/HomePage/UniversityStats/UniversityStats";
import DiplomaCourse from "@/src/components/UI/HomePage/DiplomaCourse/DiplomaCourse";
import BscCourse from "@/src/components/UI/HomePage/BscCourse/BscCourse";
import MscCourse from "@/src/components/UI/HomePage/MscCourse/MscCourse";
import TopUniversity from "@/src/components/UI/HomePage/TopUniversity/TopUniversity";
import FAQSection from "@/src/components/UI/HomePage/FAQSection/FAQSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <WhyChina />
      <ProgramHighlights />
      <UniversityStats />
      <DiplomaCourse />
      <BscCourse />
      <MscCourse />
      <TopUniversity />
      <FAQSection />
    </>
  );
}
