import type { Metadata } from "next";
import {
  Shippori_Mincho_B1,
  Zen_Kaku_Gothic_New,
  Zen_Old_Mincho,
} from "next/font/google";
import "./globals.css";

const shipporiMinchoB1 = Shippori_Mincho_B1({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho-b1",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-zen-old-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: "月刊・田中課長 | 今日も、昭和の視点で回覧します。",
  description:
    "52歳・課長・田中一郎の生活便り。昭和と令和のあるあるを回覧し、実際に助けられた道具を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMinchoB1.variable} ${zenKakuGothicNew.variable} ${zenOldMincho.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
