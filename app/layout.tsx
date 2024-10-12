import Header from "@/components/navigation/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Open Graph Meta Tag Generator",
    description: "Generate Open Graph meta tags for your website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header title="OG-Generator" />
                    <div className="my-12"></div>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
