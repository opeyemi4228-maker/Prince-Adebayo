import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-montserrat", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Lawyer, builder, reformer. Discover the life, record, manifesto and campaign of Prince Adewole Adebayo, Presidential Candidate of the Social Democratic Party (SDP).",
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: "A practical plan to make Nigeria work.",
    images: [{ url: "/images/prince-adebayo-portrait.jpg", width: 720, height: 720, alt: site.name }],
    type: "website",
    locale: "en_NG",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: "A practical plan to make Nigeria work.",
    images: ["/images/prince-adebayo-portrait.jpg"],
  },
  icons: { icon: "/brand/sdp-logo.png" },
};

export const viewport = { themeColor: "#0d0c0a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
