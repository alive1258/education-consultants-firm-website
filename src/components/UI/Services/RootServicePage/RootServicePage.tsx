import React from "react";
import VisaProcess from "../VisaProcess/VisaProcess";
import TravelSupport from "../TravelSupport/TravelSupport";
import TestPreparation from "../TestPreparation/TestPreparation";
import TopUniversity from "../../HomePage/TopUniversity/TopUniversity";
import Admission from "../../HomePage/Admission/Admission";
import CareerCounseling from "../CareerCounseling/CareerCounseling";
import Guideline from "../Guideline/Guideline";

const RootServicePage = () => {
  return (
    <>
      <VisaProcess />
      <TravelSupport />
      <TestPreparation />
      <TopUniversity />
      <Admission />
      <CareerCounseling />
      <Guideline />
    </>
  );
};

export default RootServicePage;
