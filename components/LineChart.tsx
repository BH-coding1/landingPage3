"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", thisYear: 5000, lastYear: 4500 },
  { month: "Feb", thisYear: 8000, lastYear: 7000 },
  { month: "Mar", thisYear: 12000, lastYear: 10000 },
  { month: "Apr", thisYear: 15000, lastYear: 13000 },
  { month: "May", thisYear: 18000, lastYear: 16000 },
  { month: "Jun", thisYear: 22000, lastYear: 19000 },
  { month: "Jul", thisYear: 25000, lastYear: 22000 },
  { month: "Aug", thisYear: 28000, lastYear: 25000 },
  { month: "Sep", thisYear: 30000, lastYear: 27000 },
  { month: "Oct", thisYear: 32000, lastYear: 29000 },
  { month: "Nov", thisYear: 35000, lastYear: 31000 },
  { month: "Dec", thisYear: 38000, lastYear: 34000 },
];

export function LineChart() {
  return (
    <Card className="border-[#E0E0E5] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#2D1B4E]">
          Total Users Total Projects Operating Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E5" />
            <XAxis
              dataKey="month"
              stroke="#5A5A6B"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="#5A5A6B"
              style={{ fontSize: "12px" }}
              domain={[0, 40000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E0E0E5",
                borderRadius: "0.5rem",
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="thisYear"
              name="This year"
              stroke="#4A7CFF"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              name="Last year"
              stroke="#5BC4D4"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

