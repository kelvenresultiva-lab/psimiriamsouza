import type { Metadata } from "next";
import { Playfair_Display, Lato, Heebo } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/data/content";
import "./globals.css";

// Fonte de marca extraída do site de referência (design-system.html).
// TODO: "Mosseta Font" pode ter licença comercial — confirmar com a Jadi
// se ela possui os direitos de uso antes de publicar em produção.
const mosseta = localFont({
  variable: "--font-mosseta",
  src: "./fonts/Mosseta-Regular.ttf",
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Na Vercel, VERCEL_PROJECT_PRODUCTION_URL traz o domínio de produção
// automaticamente; localmente cai no localhost. Necessário para que a
// URL da og:image seja absoluta (exigência do WhatsApp/redes sociais).
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const pageTitle = `${site.name} | Psicóloga Clínica em ${site.city}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: site.metaDescription,
  icons: {
    icon: "/images/logo-giovanna-mendes.png",
  },
  openGraph: {
    title: pageTitle,
    description: site.metaDescription,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-giovanna-mendes.png",
        width: 1254,
        height: 1254,
        alt: `Logo ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.metaDescription,
    images: ["/images/logo-giovanna-mendes.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${mosseta.variable} ${playfair.variable} ${lato.variable} ${heebo.variable}`}
    >
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}