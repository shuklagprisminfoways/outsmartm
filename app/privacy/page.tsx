import PrivacyPolicy from "@/components/sections/privacy";
import React from "react";

export const generateMetadata = () => {
  return {
    title: "Privacy Policy | Outsmartm",
    description:
      "Read Outsmartm's Privacy Policy to learn how we handle personal data, protect user privacy, and ensure compliance with data protection regulations.",
    keywords: [
      "Privacy Policy",
      "Outsmartm Privacy",
      "Data Protection",
      "User Privacy Rights",
      "Personal Data Security",
    ],
  };
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;
