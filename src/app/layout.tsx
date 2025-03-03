import { Metadata } from "next";
import "../../src/app/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Blog App",
  description: "Welcome to the home of amazing blog posts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="debug-screens">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
