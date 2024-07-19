
import Image from "next/image";
import Container from "./components/Container";
import Banner from "./components/banner/Banner";
import ProductCard from "./components/products/ProductCard";
import { products } from "@/products";


export default function Home() {
  return (
    <div>
      <Banner />
      <Container>
        <h1 className="mt-12 text-md md:text-xl lg:text-3xl font-semibold">Our Most Popular Overlays</h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product: any)=>{
            return <ProductCard data={product} key={product.id} />
          })}
        </div>
      </Container>
    </div>
  );
}
