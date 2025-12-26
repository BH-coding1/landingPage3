import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Rocket, AlertCircle } from "lucide-react";

interface ActivityItem {
  text: string;
  time: string;
  icon: "Settings" | "Rocket" | "AlertCircle";
}

const activities: ActivityItem[] = [
  {
    text: "Updated workflow settings.",
    time: "Just now",
    icon: "Settings",
  },
  {
    text: "Deployed new version.",
    time: "59 minutes ago",
    icon: "Rocket",
  },
  {
    text: "Reported an issue.",
    time: "12 hours ago",
    icon: "AlertCircle",
  },
];

const iconMap = {
  Settings,
  Rocket,
  AlertCircle,
};

export function ActivitiesPanel() {
  return (
    <Card className="border-[#E0E0E5] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#2D1B4E]">
          Activities
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.icon];

          return (
            <div key={index} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#5A5A6B]" />
              <div className="flex-1">
                <p className="text-sm text-[#2D1B4E]">{activity.text}</p>
                <p className="mt-1 text-xs text-[#5A5A6B]">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

