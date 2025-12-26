"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  LayoutDashboard,
  Folder,
  BarChart3,
  FileText,
  Search,
  Star,
  Bell,
  Settings,
  MoreVertical,
  Calendar,
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { LineChart } from "./LineChart";
import { NotificationsPanel } from "./NotificationsPanel";
import { ActivitiesPanel } from "./ActivitiesPanel";
import { TrafficSources } from "./TrafficSources";

export function DashboardPreview() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[2000px] max-h-[500px]">
        <div className="overflow-hidden rounded-2xl border border-[#E0E0E5] bg-white shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <aside className="w-full border-b border-[#E0E0E5] bg-[#F8FCFD] p-6 lg:w-60 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-2 text-xl font-bold text-[#2D1B4E]">
                <div className="h-5 w-5 rounded bg-[#4A7CFF]" />
                Operate
              </div>

              <nav className="space-y-1">
                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#5A5A6B]">
                    Favorites
                  </p>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#5A5A6B]">
                    Recently
                  </p>
                </div>

                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start bg-[#4A7CFF] text-white hover:bg-[#4A7CFF] hover:text-white"
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Overview
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#5A5A6B] hover:text-[#2D1B4E]"
                  >
                    <Folder className="mr-2 h-4 w-4" />
                    Projects
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#5A5A6B] hover:text-[#2D1B4E]"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Dashboards
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#5A5A6B] hover:text-[#2D1B4E]"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Pages
                  </Button>
                </div>
              </nav>
            </aside>

            <main className="flex-1 p-8">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="#"
                        className="text-sm text-[#5A5A6B]"
                      >
                        Dashboards
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-sm text-[#5A5A6B]">
                        Default
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A5A6B]" />
                    <Input
                      placeholder="Q Search"
                      className="w-[200px] border-[#E0E0E5] bg-[#F5FBFD] pl-9"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" aria-label="Star">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Notifications"
                    >
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Settings">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="More">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Calendar">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Total Views"
                  value="7,265"
                  indicator={{
                    type: "positive",
                    value: "+11.01%",
                    icon: "TrendingUp",
                    color: "success",
                  }}
                />
                <MetricCard
                  title="Total Visits"
                  value="3,671"
                  indicator={{
                    type: "negative",
                    value: "-0.05%",
                    icon: "TrendingDown",
                    color: "error",
                  }}
                />
                <MetricCard
                  title="Page Views"
                  value="3,671"
                  indicator={{
                    type: "negative",
                    value: "-0.03%",
                    icon: "TrendingDown",
                    color: "error",
                  }}
                />
                <MetricCard
                  title="Active Users"
                  value="2,318"
                  indicator={{
                    type: "positive",
                    value: "+6.08%",
                    icon: "TrendingUp",
                    color: "success",
                  }}
                />
              </div>

              <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
                <LineChart />
                <div className="flex flex-col gap-6">
                  <NotificationsPanel />
                  <ActivitiesPanel />
                </div>
              </div>

              <TrafficSources />
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
