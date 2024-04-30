import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cavaliere - Espacio de bebidas",
  description:
    "Cavaliere espacio de bebidas es una vinoteca ubicada en la zona de Güemes en la ciudad de Mar del Plata. Encuentra aquí vinos boutique y bebidas nacionales e importadas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Hero />
      </body>
    </html>
  );
}
