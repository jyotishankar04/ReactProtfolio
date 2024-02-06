import { lazy, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/home/Home";

function Layout() {
  // const [update, useUpdate] = useState();
  return (
    <>
      <div className="bg-[#0D1B2A] w-full h-[100vh]">
        <Header />
        <div className="heroWithSideBar flex justify-between items-center  gap-[10px]  mx-[10px]">
          <Sidebar />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
