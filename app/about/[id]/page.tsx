import { Tabs } from "@/components/Tabs";
import { data as tabsData } from "@/components/Tabs/data";

export default function AboutPage({ params }: any) {
  return (
    <div>
      <Tabs data={tabsData} params={params} />
    </div>
  );
}
