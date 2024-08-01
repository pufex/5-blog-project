import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage of my application.",
};

export default function Home() {
  return <PageHeading>
    This is my Next JS app!
  </PageHeading>
}
