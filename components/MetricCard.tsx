import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  indicator: {
    type: "positive" | "negative";
    value: string;
    icon: "TrendingUp" | "TrendingDown";
    color: "success" | "error";
  };
}

export function MetricCard({ title, value, indicator }: MetricCardProps) {
  const Icon =
    indicator.icon === "TrendingUp" ? TrendingUp : TrendingDown;
  const indicatorColor =
    indicator.color === "success" ? "text-[#10B981]" : "text-[#EF4444]";

  return (
    <Card className="border-[#E0E0E5] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#5A5A6B]">{title}</p>
            <p className="mt-2 text-2xl font-bold text-[#2D1B4E]">{value}</p>
          </div>
        </div>
        <div className={cn("mt-4 flex items-center gap-1 text-sm", indicatorColor)}>
          <Icon className="h-4 w-4" />
          <span className="font-medium">{indicator.value}</span>
        </div>
      </CardContent>
    </Card>
  );
}

