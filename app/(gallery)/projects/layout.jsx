import "../../globals.css";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/context/ThemeContext";

export default function ProjectPageLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <>
          <ThemeProvider>
            <Header />
            <main className="my-5">{children}</main>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
