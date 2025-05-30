import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json";
export default function Page() {
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, { variant: "inset" }), _jsxs(SidebarInset, { children: [_jsx(SiteHeader, {}), _jsx("div", { className: "flex flex-1 flex-col", children: _jsx("div", { className: "@container/main flex flex-1 flex-col gap-2", children: _jsxs("div", { className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6", children: [_jsx(SectionCards, {}), _jsx("div", { className: "px-4 lg:px-6", children: _jsx(ChartAreaInteractive, {}) }), _jsx(DataTable, { data: data })] }) }) })] })] }));
}
