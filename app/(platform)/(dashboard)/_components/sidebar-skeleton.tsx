import { Skeleton } from "@/components/ui/skeleton";
import { NavItem } from "./nav-item";

export default function SidebarSkeleton() {
  return (
    <div className="rounded-md bg-neutral-300/30 backdrop-blur-lg p-3 min-h-[calc(100vh-128px)]">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-10 w-[50%] bg-white" />
        <Skeleton className="h-10 w-10 bg-white" />
      </div>
      <div className="space-y-2">
        <NavItem.Skeleton />
        <NavItem.Skeleton />
        <NavItem.Skeleton />
      </div>
    </div>
  )
}