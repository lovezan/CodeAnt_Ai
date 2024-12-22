import "./styles/globals.css";
import "./app/login/login.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// Note: Font handling in React.js may be different compared to Next.js
// If using a Google Font, include it through an external stylesheet or import directly in your HTML

export const metadata = {
  title: "CodeAnt AI",
  description: "AI to Detect & Autofix Bad Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
