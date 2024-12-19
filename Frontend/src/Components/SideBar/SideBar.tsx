import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Dashboard, Help, StudentSVG, Setting, Reports, Chapter,Hamburger } from "../../Svg/index";


function SideBar() {
  const { pathname } = useLocation(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const data = [
    { name: "Dashboard", path: "/", svg: (isActive:boolean) => <Dashboard color={isActive ? "#000000" : "#6F767E"} /> },
    { name: "Student", path: "/student", svg: (isActive:boolean) => <StudentSVG color={isActive ? "#000000" : "#6F767E"} /> },
    { name: "Chapter", path: "/chapter", svg: (isActive:boolean) => <Chapter color={isActive ? "#000000" : "#6F767E"} /> },
    { name: "Help", path: "/help", svg: (isActive:boolean) => <Help color={isActive ? "#000000" : "#6F767E"} /> },
    { name: "Reports", path: "/reports", svg: (isActive:boolean) => <Reports color={isActive ? "#000000" : "#6F767E"} /> },
    { name: "Settings", path: "/settings", svg: (isActive:boolean) => <Setting color={isActive ? "#000000" : "#6F767E"} /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      
      <div
        className={`fixed bg-white pt-8 px-2 w-[248px] h-full  border-r transition-all transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`} 
      >
        <div className="mb-10 mt-3">
          <img src={Logo} alt="Logo" className="w-24" />
        </div>

        <div className="space-y-4">
          {data.map((value, index) => {
            const isActive = pathname === value.path;

            return (
              <Link
                key={index}
                to={value.path}
                className={`flex items-center gap-3 p-3 rounded-md ${
                  isActive ? "bg-greybg text-customBlack" : "hover:bg-greybg"
                }`}
              >
                <span>{value.svg(isActive)}</span>
                <span
                  className={`${
                    isActive ? "font-bold text-customBlack" : "font-semibold text-greytext"
                  } font-sans text-[16px] leading-[22px]`}
                >
                  {value.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

     
      <button
        className="md:hidden absolute top-8 right-6 z-10"
        onClick={toggleSidebar}
      >
      <Hamburger/>
      </button>

      
      <div className="flex-1 bg-[#F6F8FA]  ">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
