import OverviewSales from "../Home/OverviewSales";
import TopOrders from "../Home/TopOrders";

function ReportsCom() {
  return (
    <div className="w-[100%] h-[80vh]px-[28px] my-[25px] text-text1 px-[28px]">
      <h1 className="text-[28px] font-medium mb-[18px]">Reports</h1>
      <OverviewSales />
      <TopOrders />
    </div>
  );
}

export default ReportsCom;
