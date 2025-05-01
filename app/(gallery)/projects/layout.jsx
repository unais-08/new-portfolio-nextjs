import "../../globals.css";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/context/ThemeContext";

export default function ProjectPageLayout({ children }) {
  return (
    <html lang="eng">
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
