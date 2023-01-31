import { getData } from "@/utils/getData";

const API_URL = "https://baconipsum.com/api/?callback=?type=all-meat";

export default async function AboutPage() {
  const { data } = await getData(API_URL);

  if (!data) return null;

  return (
    <div>
      <h1>About</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
