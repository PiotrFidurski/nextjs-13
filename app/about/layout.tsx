import { Tabs } from "@/components/Tabs";
import { data as tabsData } from "@/components/Tabs/data";
import { getData } from "@/utils/getData";
import Link from "next/link";
import { ReactNode } from "react";

const API_URL = "https://baconipsum.com/api/?callback=?type=all-meat";

export default async function AboutPage({ children }: { children: ReactNode }) {
  const { data } = await getData(API_URL);

  if (!data) return null;

  return (
    <div>
      <h1>About</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <Link href={`/about/1`}>go to tabs</Link>
      {children}
    </div>
  );
}
