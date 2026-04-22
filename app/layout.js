export const metadata = {
  title: "Lyzoria Studios",
  description: "Premium editing for creators and brands.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
