import Image from "next/image";
import data from "@/components/header/lib/data";
import ProductItems from "@/components/products/ProductItems";
export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2">Latest products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
   {data.products.map((product) => (
    <ProductItems key={product.slug} product={product}/>
   ))}
      </div>
    </>
  );
}
