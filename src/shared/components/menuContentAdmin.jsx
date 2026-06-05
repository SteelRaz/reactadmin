import { Link } from "react-router-dom";
import { Home, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const AdminMenuItem = [
  { text: "Home", path: "/", icon: Home },
  { text: "Content", path: "/Content", icon: FileText },
];

export function MenuContentAdmin() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {AdminMenuItem.map((item) => (
            <SidebarMenuItem key={item.text}>
              <SidebarMenuButton asChild>
                <Link to={item.path}>
                  <item.icon />
                  <span>{item.text}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export default MenuContentAdmin;
