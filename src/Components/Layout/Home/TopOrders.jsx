const products = [
  {
    count: 1,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/08/pixel-9-pro-xl-cellmart-21.jpg",
    title: "Wireless Headphones",
    description:
      "High-quality noise-canceling headphones with Bluetooth support.",
    price: 120,
    status: "In Stock",
    rating: 4.5,
  },
  {
    count: 2,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/08/pixel-9-pro-Fold-cellmart-1.png",
    title: "Smart Watch",
    description: "Feature-rich smartwatch with heart rate monitoring and GPS.",
    price: 80,
    status: "In Stock",
    rating: 4.2,
  },
  {
    count: 3,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/08/galaxy-wactch-ultra-silver-cellmart.jpg",
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable DPI settings.",
    price: 45,
    status: "Limited Stock",
    rating: 4.7,
  },
  {
    count: 4,
    image: "https://cellmart.pk/wp-content/uploads/2024/07/10.jpg",
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with fast response keys.",
    price: 70,
    status: "Out of Stock",
    rating: 4.8,
  },
  {
    count: 5,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/09/Apple-Watch-Series-10-Aluminum-cellmart.webp",
    title: "Portable Speaker",
    description:
      "Compact Bluetooth speaker with deep bass and waterproof design.",
    price: 50,
    status: "In Stock",
    rating: 4.4,
  },
  {
    count: 6,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/09/huawei-watch-gt5-blue-cellmart.png",
    title: "4K Monitor",
    description:
      "Ultra HD 4K monitor with stunning visuals and high refresh rate.",
    price: 300,
    status: "In Stock",
    rating: 4.9,
  },
  {
    count: 7,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/09/Apple-AirPods-4-cellmart.webp",
    title: "External Hard Drive",
    description: "1TB external hard drive for secure and fast data storage.",
    price: 90,
    status: "In Stock",
    rating: 4.3,
  },
  {
    count: 8,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/08/Buds-3-pro-cellmart.jpg",
    title: "Wireless Charger",
    description: "Fast wireless charging pad compatible with all devices.",
    price: 35,
    status: "Limited Stock",
    rating: 4.6,
  },
  {
    count: 9,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/07/sghoshigusegubieghiogjbsugio.jpg",
    title: "Smartphone Gimbal",
    description: "3-axis stabilizer for smooth video recording.",
    price: 150,
    status: "Out of Stock",
    rating: 4.7,
  },
  {
    count: 10,
    image:
      "https://cellmart.pk/wp-content/uploads/2024/10/xiaomi-mix-flip-black-cellmart.png",
    title: "Drone Camera",
    description:
      "Compact drone with 4K camera and real-time video transmission.",
    price: 400,
    status: "In Stock",
    rating: 5.0,
  },
];

function TopOrders() {
  return (
    <div className="px-[25px] my-[20px]">
    <div className="w-full h-[60vh] bg-secondary border-[1px] border-border rounded-[8px] p-[16px] text-text1 flex flex-col gap-[30px]">
      <h5 className="text-[16px]">Top Orders</h5>
      
      {/* Outer container for wrapping */}
      <div
        className="relative w-full overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#4b5563 transparent",
        }}
      >
        {/* Inner div where overflow-x will apply */}
        <div className="overflow-x-auto w-full max-w-full">
          <table className="min-w-[1200px] w-full">
            {/* Table Head */}
            <thead className="sticky top-0 bg-[#1E293B]">
              <tr className="text-left">
                <th className="p-[16px] text-[14px] font-medium">#</th>
                <th className="p-[16px] text-[15px] font-medium">Product</th>
                <th className="p-[16px] text-[15px] font-medium">Price</th>
                <th className="p-[16px] text-[15px] font-medium">Status</th>
                <th className="p-[16px] text-[15px] font-medium">Rating</th>
                <th className="p-[16px] text-[15px] font-medium">Actions</th>
              </tr>
            </thead>
  
            {/* Table Body */}
            <tbody>
              {products.map((data) => (
                <tr key={data.count} className="border-b-[1px] border-border">
                  <td className="p-[16px] text-[14px] font-medium">{data.count}</td>
                  <td className="p-[16px] flex items-center gap-[15px]">
                    <img
                      src={data.image}
                      alt="Error-Image"
                      className="w-[57px] h-[57px] object-cover rounded-[8px]"
                    />
                    <div className="flex flex-col gap-[2px]">
                      <h4 className="text-[15px] font-medium">{data.title}</h4>
                      <h5 className="text-[15px] text-text2">{data.description}</h5>
                    </div>
                  </td>
                  <td className="p-[16px] text-[15px] font-medium">{`$${data.price}`}</td>
                  <td className="p-[16px] text-[15px] font-medium whitespace-nowrap">{data.status}</td>
                  <td className="p-[16px] text-[15px] font-medium">
                    <i className="bi bi-star-fill text-[#ca8a04] text-[16px] mr-2"></i>
                    {data.rating}
                  </td>
                  <td className="p-[16px]">
                    <i className="bi bi-pencil-square text-blue text-[18px] cursor-pointer"></i>
                    <i className="bi bi-trash text-red-400 text-[18px] cursor-pointer ml-4"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default TopOrders;
