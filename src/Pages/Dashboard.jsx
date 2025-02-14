import StatusCard from "../Components/Layout/Home/StatusCard";
import OverviewSales from "../Components/Layout/Home/OverviewSales";
import TopOrders from "../Components/Layout/Home/TopOrders";

function Dashboard() {
  return (
    <div className="text-white">
      <StatusCard />
      <OverviewSales />
      <TopOrders />
    </div>
  );
}

export default Dashboard;
