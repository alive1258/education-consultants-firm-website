import DiplomaScholarship from "../DiplomaScholarship/DiplomaScholarship";
import AScholarship from "../../AboutSectionPage/AScholarship/AScholarship";
import BachelorScholarship from "../BachelorScholarship/BachelorScholarship";
import TopUniversity from "../../HomePage/TopUniversity/TopUniversity";
import MasterScholarship from "../MasterScholarship/MasterScholarship";

const RootScholarshipPage = () => {
  return (
    <div>
      <DiplomaScholarship />
      <AScholarship />
      <BachelorScholarship />
      <TopUniversity />
      <MasterScholarship />
    </div>
  );
};

export default RootScholarshipPage;
