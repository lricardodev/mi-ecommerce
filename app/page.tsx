import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import HomeAbout from "@/components/HomeAbout";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Hero />
      <CategoryList />
      <HomeAbout />
      <ProductList />
    </main>
  );
}
