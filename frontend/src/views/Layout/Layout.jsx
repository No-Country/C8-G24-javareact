import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-96 flex flex-col items-center justify-center gap-8">
      {children}
    </div>
  );
};

export default Layout;
