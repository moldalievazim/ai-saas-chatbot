// import { ThemeProvider } from "@/components/theme-provider";
// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* <SidebarProvider> */}
      {/* <AppSidebar /> */}
      <html lang="en">
        <body>
          {/* <ThemeProvider
              attribute={"class"}
              defaultTheme={"system"}
              enableSystem
              disableTransitionOnChange
            > */}
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {/* <SidebarTrigger /> */}
          {children}
          {/* </ThemeProvider> */}
        </body>
      </html>
      {/* </SidebarProvider> */}
    </ClerkProvider>
  );
}
