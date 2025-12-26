import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrafficSource {
  source: string;
  percentage: string;
  barWidth: string;
  color: "accentPrimary" | "accentSecondary";
}

const sources: TrafficSource[] = [
  {
    source: "Google",
    percentage: "--",
    barWidth: "85%",
    color: "accentPrimary",
  },
  {
    source: "YouTube",
    percentage: "--",
    barWidth: "65%",
    color: "accentSecondary",
  },
  {
    source: "Instagram",
    percentage: "--",
    barWidth: "45%",
    color: "accentPrimary",
  },
  {
    source: "Pinterest",
    percentage: "--",
    barWidth: "30%",
    color: "accentSecondary",
  },
];

export function TrafficSources() {
  return (
    <Card className="mt-6 border-[#E0E0E5] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#2D1B4E]">
          Traffic by Source
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sources.map((source, index) => {
          const barColor =
            source.color === "accentPrimary" ? "bg-[#4A7CFF]" : "bg-[#5BC4D4]";

          return (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#2D1B4E]">
                  {source.source}
                </span>
                <span className="text-sm text-[#5A5A6B]">
                  {source.percentage}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E0E0E5]">
                <div
                  className={`h-full ${barColor} transition-all`}
                  style={{ width: source.barWidth }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

