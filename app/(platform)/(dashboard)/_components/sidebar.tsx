"use client";

import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import {
  Plus,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { NavItem, Organization } from "./nav-item";
import SidebarSkeleton from "./sidebar-skeleton";

interface SidebarProps {
  storageKey?: string;
};

export const Sidebar = ({ storageKey = "t-sidebar-state", }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey, {}
  );

  const pathname = usePathname();

  const routes = [
    {
      label: "Reconocimiento de texto",
      icon: <Sparkles className="h-4 w-4 mr-2" />,
      href: `/ocr`,
    },
  ];

  const {
    organization: activeOrganization,
    isLoaded: isLoadedOrg
  } = useOrganization();

  const {
    userMemberships,
    isLoaded: isLoadedOrgList
  } = useOrganizationList({ userMemberships: { infinite: true } });

  const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return <SidebarSkeleton />
  }

  return (
    <div className="rounded-xl md:bg-neutral-300/30 md:dark:bg-neutral-800 backdrop-blur-lg p-3 min-h-[calc(100vh-128px)] md:border-4 md:border-neutral-300/40 md:dark:border-neutral-700/40">

      <div className="flex flex-col gap-2 mb-2">
        {routes.map((route, index) => {
          const isActive = route?.href === pathname

          return (
            <Link
              key={index}
              href={route?.href as string}
              className={cn(
                "flex items-center p-2.5 text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-neutral-500/20 transition text-start font-medium text-sm bg-neutral-500/10",
                isActive && "bg-sky-500/20 dark:bg-sky-800/30 text-sky-700 dark:text-sky-300"
              )}
            >
              {route?.icon}
              {route?.label}
            </Link>
          )
        })}
      </div>
      <div className="flex items-center mb-1">
        <span className="pl-4 font-medium text-xs">Workspaces</span>
        <Link
          href="/select-org"
          className={cn(buttonVariants({ size: "icon", variant: "ghost" }), "ml-auto")}
        >
          <Plus className="h-4 w-4" />
        </Link>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </div>
  );
};
