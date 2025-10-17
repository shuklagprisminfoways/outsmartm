import TermsAndConditions from "@/components/sections/term";
import React from "react";

export const generateMetadata = () => {
  return {
    title: "Terms and Conditions | Outsmartm",
    description:
      "Review Outsmartm's Terms and Conditions to understand the rules, responsibilities, and agreements that govern the use of our services and solutions.",
    keywords: [
      "Terms and Conditions",
      "Outsmartm Terms",
      "Service Agreement",
      "User Responsibilities",
      "Outsmartm Policies",
    ],
  };
};

const Page = () => {
  return <TermsAndConditions />;
};

export default Page;
