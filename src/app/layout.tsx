// app/layout.tsx
import "../../src/app/globals.css";
import Header from "../components/Header";

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
      </body>
    </html>
  );
}
