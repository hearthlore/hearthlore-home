import type { Metadata } from "next";
import { DEVLOG } from "@/site";

export const metadata: Metadata = {
  title: "개발 일지",
  description: "치치의 사계절 그림책이 자라는 과정.",
};

export default function Devlog() {
  return (
    <section className="section container-page">
      <p className="eyebrow">개발 일지</p>
      <h1 className="display-xl mt-4 max-w-4xl">한 장씩, 천천히 만들고 있어요</h1>
      <p className="lead mt-6 max-w-2xl">
        『치치의 사계절 그림책』이 어디까지 왔는지, 다음엔 무엇을 만들지
        적어 둡니다.
      </p>
      <ol className="mt-16 max-w-3xl border-l border-hairline">
        {DEVLOG.map(({ status, title, body }) => (
          <li key={title} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[7px] size-3.5 rounded-full ${status === "다음" ? "bg-brand-ochre" : "bg-brand-teal"}`}
            />
            <span className="badge">{status}</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.3px]">
              {title}
            </h2>
            <p className="mt-3">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
