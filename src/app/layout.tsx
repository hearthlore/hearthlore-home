import type { Metadata } from "next";
import { Gowun_Dodum, Inter, Noto_Sans_KR } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

// DESIGN.md: Plain Black(비공개 서체) 대체 → 둥글고 따뜻한 고운돋움, 본문은 Inter + 한글 Noto Sans KR
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const noto = Noto_Sans_KR({ variable: "--font-noto", subsets: ["latin"] });
const gowun = Gowun_Dodum({
  variable: "--font-gowun",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Hearthlore 하스로어", template: "%s | Hearthlore" },
  description:
    "가족이 둘러앉는 따뜻한 벽난로와 세대를 이어 전해지는 이야기. 하스로어는 보호자와 아이가 함께할 때 완성되는 놀이를 만드는 게임 스튜디오입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${noto.variable} ${gowun.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
