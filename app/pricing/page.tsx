import { getData } from "@/utils/getData";

const API_URL =
  "https://baconipsum.com/api/?callback=?type=meat-and-filler&sentences=4";

export default async function PricingPage() {
  const { data } = await getData(API_URL);

  if (!data) return null;

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
