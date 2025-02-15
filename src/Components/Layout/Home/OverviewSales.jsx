import CustomChart from "./CustomChart";

const salesData = [
  { name: "Noah Wilson", gmail: "noah.wilson@email.com", price: "$3000" },
  { name: "Emma Jones", gmail: "emma.jones@email.com", price: "$2500" },
  { name: "William Taylor", gmail: "william.taylor@email.com", price: "$4500" },
  {
    name: "Isabella Johnson",
    gmail: "isabella.johnson@email.com",
    price: "$5300",
  },
  { name: "Olivia Brown", gmail: "olivia.brown@email.com", price: "$2200" },
  { name: "Liam Anderson", gmail: "liam.anderson@email.com", price: "$4100" },
  {
    name: "Sophia Martinez",
    gmail: "sophia.martinez@email.com",
    price: "$3600",
  },
  { name: "Mason White", gmail: "mason.white@email.com", price: "$2800" },
  { name: "Ava Scott", gmail: "ava.scott@email.com", price: "$3900" },
  { name: "James Harris", gmail: "james.harris@email.com", price: "$5000" },
];

function OverviewSales() {
  return (
    <div className="w-[100%] h-[45vh] flex justify-between px-[28px]">
      <div className="w-[55%] h-[100%] bg-secondary border-border border-[1px] rounded-[8px]">
        <CustomChart/>
      </div>
      <div className="w-[44%] h-[100%] bg-secondary border-border border-[1px] rounded-[8px] p-[16px] text-text1">
        <h5 className="text-[15px] mb-[28px]">Recent Sales</h5>

        <div
          className="flex flex-col gap-[30px] max-h-[310px] overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4b5563 transparent",
          }}
        >
          {salesData.map((data) => (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  alt="Error-Image"
                  className="w-[40px] h-[40px] rounded-[50%] object-cover"
                />
                <div>
                  <h4 className="text-[15px] mb-[8px]">{data.name}</h4>
                  <h5 className="text-[13px] text-text2">{data.gmail}</h5>
                </div>
              </div>
              <h4 className="text-[15px] mr-[10px]">{data.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewSales;
