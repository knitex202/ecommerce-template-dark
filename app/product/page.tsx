import { products } from "@/products";
import ProductCard from "../components/products/ProductCard";

const Product = () => {
    return ( 
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product: any)=>{
            return <ProductCard data={product} key={product.id} />
          })}
        </div>
     );
}
 
export default Product;