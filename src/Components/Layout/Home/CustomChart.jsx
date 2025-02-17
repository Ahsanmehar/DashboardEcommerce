import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 1500 },
  { month: "Feb", value: 2000 },
  { month: "Mar", value: 1800 },
  { month: "Apr", value: 3000 },
  { month: "May", value: 4500 },
  { month: "Jun", value: 6000 },
  { month: "Jul", value: 3200 },
  { month: "Aug", value: 5000 },
  { month: "Sep", value: 2500 },
  { month: "Oct", value: 4200 },
  { month: "Nov", value: 2300 },
  { month: "Dec", value: 2700 },
];

const CustomChart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-[28px]">
      <h3 className="text-[15px] mb-[28px] self-start px-5">Overview</h3>
      <div className="w-full h-[90%] px-[10px] max-sd:px-[0px] max-sd:pr-[5px] self-start mb-3 max-sd:mb-[0px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#94a3b8" className="text-[13px]" />
            <YAxis stroke="#ccc" tick={{ fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#020617", color: "#F8FAFC" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              fill="url(#colorGradient)"
              className="rounded-[10px]"
              strokeWidth={1} 
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomChart;
