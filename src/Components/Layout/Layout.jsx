import { Outlet } from "react-router-dom";
import SidebarNav from "./SidebarNav";

function Layout() {
  return (
    <div className="h-screen bg-primary">
      <div>
        <SidebarNav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
