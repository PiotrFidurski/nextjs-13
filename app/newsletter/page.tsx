import { getData } from "@/utils/getData";

const API_URL =
  "https://baconipsum.com/api/?callback=?type=meat-and-filler&sentences=7";

export default async function NewsLetterPage() {
  const { data } = await getData(API_URL);

  if (!data) return null;

  return (
    <div>
      <h1>Newsletter</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
