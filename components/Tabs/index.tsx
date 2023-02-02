"use client";

import Link from "next/link";
import React from "react";
import { data } from "./data";
import styles from "./index.module.css";

type Props = {
  data: typeof data;
  params: Record<string, string>;
};

export function Tabs({ data, params }: Props) {
  const [activeTab, setActiveTab] = React.useState(Number(params.id) ?? 0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  console.log({ activeTab, params });
  return (
    <div>
      <div className={styles.container}>
        {data.map((tab) => {
          return (
            <div
              key={tab.id}
              className={styles.tab}
              data-active={activeTab === tab.id}
            >
              <Link
                href={`/about/${tab.id}`}
                onClick={() => handleActiveTab(tab.id)}
              >
                {tab.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>{data[activeTab].content}</div>
    </div>
  );
}
