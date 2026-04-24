import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Lyzoria Studios",
  description: "Premium editing for creators and brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
