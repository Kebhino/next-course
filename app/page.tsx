import Link from "next/link";
import ProductCard from "./components/ProductCard";
import FancyDaisyTest from "./users/test";

export default function Home() {
  return (
    <main>
      <h1> Hello World</h1>
      <Link href="/users">User Page</Link>

      {/* <FancyDaisyTest /> */}
      <ProductCard />
    </main>
  );
}
