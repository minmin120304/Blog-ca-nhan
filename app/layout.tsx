import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Mèo Blog - Thiên đường cho những tín đồ yêu mèo",
  description: "Blog chia sẻ kinh nghiệm chăm sóc, nuôi dưỡng và khám phá thế giới loài mèo. Nơi dành riêng cho các chú 'boss' và các 'sen' yêu quý.",
  keywords: "mèo, chăm sóc mèo, blog mèo, thú cưng, nuôi mèo",
  authors: [{ name: "Mèo Blog Team" }],
  openGraph: {
    title: "Mèo Blog - Thiên đường cho những tín đồ yêu mèo",
    description: "Chia sẻ kinh nghiệm chăm sóc, nuôi dưỡng và khám phá thế giới loài mèo.",
    type: "website",
    locale: "vi_VN",
    siteName: "Mèo Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 text-gray-900`}>
        <Toaster position="top-right" />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
