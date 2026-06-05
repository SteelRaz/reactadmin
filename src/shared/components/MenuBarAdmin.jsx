import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import MenuContentAdmin from "./menuContentAdmin";
import { Sidebar } from "lucide-react";

 
function MenuBarAdmin({ children }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <MenuContentAdmin />
      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default MenuBarAdmin;