import { ParagraphSekelton } from "@/components/Loading/ParagraphSkeleton";
import { TitleSkeleton } from "@/components/Loading/TitleSkeleton";

export default function Loading() {
  return (
    <div style={{ width: "100%" }}>
      <TitleSkeleton />
      <ParagraphSekelton />
      <ParagraphSekelton />
      <ParagraphSekelton />
      <ParagraphSekelton />
      <ParagraphSekelton />
    </div>
  );
}
