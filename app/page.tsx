import { getData } from "@/utils/getData";

const API_URL = "https://baconipsum.com/api/?callback=?type=meat-and-filler";

export default async function HomePage() {
  const { data } = await getData(API_URL);

  return (
    <div>
      <h1>Home Page</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
