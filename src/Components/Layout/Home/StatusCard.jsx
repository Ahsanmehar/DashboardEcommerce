const statusData = [
  {
    icon: "bi bi-box-seam",
    title: "Total Products",
    numbers: "25,154",
    percentage: "25%",
  },
  {
    icon: "bi bi-currency-dollar",
    title: "Total Paid Orders",
    numbers: "$16,000",
    percentage: "12%",
  },
  {
    icon: "bi bi-person",
    title: "Total Customers",
    numbers: "15,400k",
    percentage: "15%",
  },
  {
    icon: "bi bi-credit-card-2-front",
    title: "Sales",
    numbers: "12,340",
    percentage: "19%",
  },
];

function StatusCard() {
  return (
    <div className="w-[100%] px-[28px] max-sd:px-[10px] my-[25px] text-text1">
      <h1 className="text-[28px] font-medium mb-[10px]">Dashboard</h1>
      <div className="flex max-xxxl:flex-wrap gap-4 max-xxxl:w-full max-xxxl:justify-between max-l:flex-col">
        {statusData.map((data, index) => (
          <div
            className="w-[24%] max-xxxl:w-[48%] max-l:w-[100%] max-lg:w-full bg-secondary border-[1px] border-border rounded-[8px] p-[16px]"
            key={index}
          >
            <div className="flex items-center gap-[10px] mb-[20px]">
              <i
                className={`text-[22px] w-[42px] h-[42px] rounded-[8px] bg-hover text-blue flex items-center justify-center ${data.icon}`}
              ></i>
              <h3 className="text-[15px]">{data.title}</h3>
            </div>
            <div className="p-[16px] bg-primary rounded-[8px]">
              <h1 className="text-[28px] font-semibold mb-[3px]">
                {data.numbers}
              </h1>
              <div className="flex items-center gap-[10px] rounded-[50px] border-[1px] border-blue w-fit py-[5px] px-[10px]">
                <i className="bi bi-graph-up-arrow text-blue"></i>
                <h5 className="text-blue">{data.percentage}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusCard;
