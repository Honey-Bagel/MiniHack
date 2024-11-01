import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "./components/Navbar";

const montserrat = Montserrat();

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
