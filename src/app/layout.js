import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Form from "@/components/Form";

const maison = localFont({
  src: [
    {
      path: "../assets/fonts/MaisonNeue-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MaisonNeue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/MaisonNeue-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../assets/fonts/MaisonNeue-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Cavaliere - Espacio de bebidas",
  description:
    "Cavaliere espacio de bebidas es una vinoteca ubicada en la zona de Güemes en la ciudad de Mar del Plata. Encuentra aquí vinos boutique y bebidas nacionales e importadas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maison.className} bg-primary`}>
        <Header />
        {children}
        <Hero />
        <Form />
      </body>
    </html>
  );
}
