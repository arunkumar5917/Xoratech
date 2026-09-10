import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThreeDBackground } from "@/components/ui/ThreeDBackground";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { OfflineStatusIndicator } from "@/components/ui/OfflineStatusIndicator";
import { APP_NAME, WEBSITE_URL } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: `${APP_NAME} — Engineering the Next Frontier of Intelligent Enterprise Software.`,
    template: `%s | ${APP_NAME}`,
  },
  description:
    "Xora Technologies builds digital solutions for businesses and helps students develop practical skills through project-based internships. Innovate | Build | Grow.",
  keywords: [
    "Xora Technologies",
    "web development",
    "e-commerce",
    "business solutions",
    "student internships",
    "internship certificate",
    "web application development",
    "digital marketing",
    "AI solutions",
  ],
  applicationName: APP_NAME,
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: `${APP_NAME} — Engineering the Next Frontier of Intelligent Enterprise Software.`,
    description:
      "Digital solutions for businesses and practical, project-based internships for students.",
    url: WEBSITE_URL,
    siteName: APP_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${APP_NAME} — Engineering the Next Frontier of Intelligent Enterprise Software.`,
    description:
      "Digital solutions for businesses and practical, project-based internships for students.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-white text-navy-950 antialiased selection:bg-xora-500 selection:text-white">
        <LoadingScreen />
        <OfflineStatusIndicator />
        <ScrollProgressBar />
        <ThreeDBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



