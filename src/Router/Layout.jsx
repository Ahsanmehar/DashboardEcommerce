import { Outlet } from "react-router-dom";
import SidebarNav from "../Components/Common/SidebarNav";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

function Layout() {
  return (
    <div
      className="h-screen bg-primary flex overflow-y-auto"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#4b5563 transparent" }}
    >
      <div>
        <SidebarNav />
      </div>
      <div className="ml-[15%] w-[100%]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
