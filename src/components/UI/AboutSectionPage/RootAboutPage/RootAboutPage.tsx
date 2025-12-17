import AboutVarsity from "../AboutVarsity/AboutVarsity";
import AScholarship from "../AScholarship/AScholarship";
import ProcessTimeline from "../ProcessTimeline/ProcessTimeline";
import CampusTour from "../CampusTour/CampusTour";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import TopUniversity from "../../HomePage/TopUniversity/TopUniversity";

const RootAboutPage = () => {
  return (
    <div>
      <AboutVarsity />
      <AScholarship />
      <ProcessTimeline />
      <CampusTour />
      <Testimonial />
      <TopUniversity />
    </div>
  );
};

export default RootAboutPage;
