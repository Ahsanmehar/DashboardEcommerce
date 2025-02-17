import { Outlet } from "react-router-dom";
import SidebarNav from "../Components/Common/SidebarNav";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { useSelector } from "react-redux";

function Layout() {
  let sidebarnav = useSelector((state) => state.sidebarnav);
  return (
    <div
      className="h-screen bg-primary flex overflow-x-hidden"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#4b5563 transparent" }}
    >
      {/* Sidebar */}
      <div className="w-[240px] max-xxl:hidden">
        <SidebarNav />
      </div>

      {/* Main content area */}
      <div
        className="flex-1 overflow-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#4b5563 transparent",
        }}
      >
        <div className="hidden max-xxl:block">
          {sidebarnav ? <SidebarNav /> : null}
        </div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
