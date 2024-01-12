import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { esES } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <ClerkProvider localization={esES} appearance={{ baseTheme: shadesOfPurple }}>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
