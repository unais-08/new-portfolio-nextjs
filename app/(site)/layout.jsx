import "../globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Unais's Portfolio",
  description: "Unais personal portfolio to showcase the developer skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex flex-col ">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
