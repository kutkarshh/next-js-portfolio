"use client";

import Posts from "./Posts";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Main = () => {
  const pathName = usePathname();

  return (
    <div>
      {/* <Prompts />
      <Posts /> */}
    </div>
  );
};

export default Main;
