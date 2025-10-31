// src/app/layout.jsx
import "@/styles/globals.css";
import Nav from "@/Components/header/Nav";
import Footer from "@/Components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.svg"/>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
