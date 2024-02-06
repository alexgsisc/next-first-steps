import type { Metadata } from "next";
//metadata the page
export const metadata = {
  title: "About Page",
  description: "It is a About Page",
  keywords: ["about", "page", "nextjs"],
};
export default function AboutPage() {
  return (
    <>
      <span>About Page</span>
    </>
  );
}
