export const navigationItems = {
    default: [
        {
            icon: "heroicons_outline:home",
            id: "dashboards",
            title: "Dashboard",
            type: "group",
            children: [
                {
                    icon: "heroicons_outline:users",
                    id: "dashboards.project",
                    link: "/dashboards/users-list",
                    title: "Users",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:globe-alt",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Agents",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:briefcase",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Stores",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:view-grid",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Apps",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:clipboard",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Reports",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:chat",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Chat",
                    type: "basic"
                },
                {
                    icon: "heroicons_outline:document-duplicate",
                    id: "dashboards.project",
                    link: "/dashboards/project",
                    title: "Files",
                    type: "basic"
                }
            ]
        }
    ]
}