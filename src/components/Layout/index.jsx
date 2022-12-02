import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F7F8FA] w-full overflow-hidden">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <main className="bg-transparent h-screen w-full overflow-scroll">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
