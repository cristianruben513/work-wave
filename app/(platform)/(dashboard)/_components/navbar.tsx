import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { FormPopover } from "@/components/form/form-popover";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "@/components/mode-toogle";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-16 shadow-xl shadow-neutral-600/10 bg-white dark:bg-neutral-900 flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            variant="primary"
            size="sm"
            className="rounded-lg hidden md:flex h-auto py-1.5 px-2 border-2 border-sky-400 dark:border-sky-600 items-center gap-x-1 dark:text-white"
          >
            Crear tablero
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
        <FormPopover>
          <Button
            variant="primary"
            size="sm"
            className="rounded-lg block md:hidden border-2 border-sky-400 dark:border-sky-600"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <ModeToggle />
        <div className="border-2 border-amber-400 dark:border-yellow-700 p-0.5 rounded-lg">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
        </div>
        <div className="border-2 border-amber-400 dark:border-yellow-700 p-0.5 rounded-full">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};
