import { Handshake, MessageCircleHeart, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CONTACT_EMAIL } from "@/site";

export const metadata: Metadata = {
  title: "문의",
  description: "제휴, 언론, 보호자 의견 문의.",
};

export default function Contact() {
  return (
    <section className="section container-page">
      <p className="eyebrow">문의 · 프레스</p>
      <h1 className="display-xl mt-4 max-w-4xl">벽난로 앞자리는 늘 비워 둡니다</h1>
      <p className="lead mt-6 max-w-2xl">
        함께하고 싶은 일, 궁금한 점, 따뜻한 응원 모두 반갑습니다.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureCard tone="lavender" icon={Handshake} title="제휴 · 비즈니스">
          유아교육기관 보급, 굿즈와 팝업스토어, 출판·유통 협업을 이야기해요.
        </FeatureCard>
        <FeatureCard tone="peach" icon={Newspaper} title="언론 · 프레스">
          스튜디오와 작품 소개 자료를 준비하고 있습니다. 취재 문의는 메일로
          부탁드려요.
        </FeatureCard>
        <FeatureCard tone="ochre" icon={MessageCircleHeart} title="보호자 의견">
          이런 이야기가 있었으면, 이런 점이 불편했다 — 아이와 함께 느낀 것을
          들려주세요.
        </FeatureCard>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
          {CONTACT_EMAIL}
        </a>
        <span className="btn bg-hairline text-muted">프레스 킷 준비 중</span>
      </div>
      <p className="mt-4 text-sm text-muted">공식 SNS 채널도 곧 열립니다.</p>
    </section>
  );
}
