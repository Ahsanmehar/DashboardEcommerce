import OverviewSales from "../Home/OverviewSales";
import TopOrders from "../Home/TopOrders";

function ReportsCom() {
  return (
    <div className="w-[100%] my-[25px] text-text1">
      <h1 className="text-[28px] font-medium mb-[18px] px-[28px]">Reports</h1>
      <OverviewSales />
      <TopOrders />
    </div>
  );
}

export default ReportsCom;
