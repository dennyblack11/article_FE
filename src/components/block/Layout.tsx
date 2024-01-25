import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../static/SideBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const menuState = useSelector((state: any) => state.toggleMenu);
  console.log("state", menuState);

  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="hidden md:flex">
          <SideBar />
        </div>
        <div className="flex justify-end w-[100%]">
          <div className="w-full transition-all duration-300 md:w-[calc(100%-220px)] relative flex bg-purple-50 m-2 p-2 rounded-md  ">
            {menuState && (
              <div className="w-full h-screen bg-[rgba(0, 0 , 0, 0.5)] absolute top-0 backdrop-blur-md "></div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
