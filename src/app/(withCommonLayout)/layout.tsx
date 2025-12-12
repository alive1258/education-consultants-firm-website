import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      navbar
      <div className="min-h-screen">{children}</div>
      footer
    </>
  );
};

export default CommonLayout;
