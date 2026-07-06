import "./globals.css";
import Header from "@/components/utils/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
