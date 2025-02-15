import CustomChart from "../Home/CustomChart";

function AnalyticsCom() {
  return (
    <div className="w-[100%] h-[80vh]px-[28px] my-[25px] text-text1 px-[28px]">
      <h1 className="text-[28px] font-medium mb-[10px]">Analytics</h1>
      <div className="w-[100%] h-[80vh] bg-secondary p-[16px] border-[1px] border-border rounded-[9px]">
        <CustomChart />
      </div>
    </div>
  );
}

export default AnalyticsCom;
