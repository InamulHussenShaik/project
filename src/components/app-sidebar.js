import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpCircleIcon, BarChartIcon, CameraIcon, ClipboardListIcon, DatabaseIcon, FileCodeIcon, FileIcon, FileTextIcon, FolderIcon, HelpCircleIcon, LayoutDashboardIcon, ListIcon, SearchIcon, SettingsIcon, UsersIcon, } from "lucide-react";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboardIcon,
        },
        {
            title: "Lifecycle",
            url: "#",
            icon: ListIcon,
        },
        {
            title: "Analytics",
            url: "#",
            icon: BarChartIcon,
        },
        {
            title: "Projects",
            url: "#",
            icon: FolderIcon,
        },
        {
            title: "Team",
            url: "#",
            icon: UsersIcon,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: CameraIcon,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: FileTextIcon,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: FileCodeIcon,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
        {
            title: "Get Help",
            url: "#",
            icon: HelpCircleIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: SearchIcon,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: DatabaseIcon,
        },
        {
            name: "Reports",
            url: "#",
            icon: ClipboardListIcon,
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: FileIcon,
        },
    ],
};
export function AppSidebar({ ...props }) {
    return (_jsxs(Sidebar, { collapsible: "offcanvas", ...props, children: [_jsx(SidebarHeader, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, className: "data-[slot=sidebar-menu-button]:!p-1.5", children: _jsxs("a", { href: "#", children: [_jsx(ArrowUpCircleIcon, { className: "h-5 w-5" }), _jsx("span", { className: "text-base font-semibold", children: "Acme Inc." })] }) }) }) }) }), _jsxs(SidebarContent, { children: [_jsx(NavMain, { items: data.navMain }), _jsx(NavDocuments, { items: data.documents }), _jsx(NavSecondary, { items: data.navSecondary, className: "mt-auto" })] }), _jsx(SidebarFooter, { children: _jsx(NavUser, { user: data.user }) })] }));
}
