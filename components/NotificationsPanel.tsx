import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, UserPlus, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationItem {
  text: string;
  time: string;
  icon: "CheckCircle" | "UserPlus" | "Bell";
  color: "success" | "accentPrimary" | "accentSecondary";
}

const notifications: NotificationItem[] = [
  {
    text: "Task completed successfully.",
    time: "Just now",
    icon: "CheckCircle",
    color: "success",
  },
  {
    text: "New team member added.",
    time: "59 minutes ago",
    icon: "UserPlus",
    color: "accentPrimary",
  },
  {
    text: "Task completed successfully.",
    time: "12 hours ago",
    icon: "CheckCircle",
    color: "success",
  },
  {
    text: "Alex Morgan subscribed to updates.",
    time: "Today, 11:59 AM",
    icon: "Bell",
    color: "accentSecondary",
  },
];

const iconMap = {
  CheckCircle,
  UserPlus,
  Bell,
};

const colorMap = {
  success: "text-[#10B981]",
  accentPrimary: "text-[#4A7CFF]",
  accentSecondary: "text-[#5BC4D4]",
};

export function NotificationsPanel() {
  return (
    <Card className="border-[#E0E0E5] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#2D1B4E]">
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification, index) => {
          const Icon = iconMap[notification.icon];
          const colorClass = colorMap[notification.color];

          return (
            <div key={index} className="flex items-start gap-3">
              <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", colorClass)} />
              <div className="flex-1">
                <p className="text-sm text-[#2D1B4E]">{notification.text}</p>
                <p className="mt-1 text-xs text-[#5A5A6B]">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

