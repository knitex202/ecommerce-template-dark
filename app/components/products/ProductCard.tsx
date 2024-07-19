'use client';
import { useRouter } from "next/navigation";


interface ProductCardProps {
    data: any;

}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const router = useRouter();
    return ( 
        <div onClick={()=> router.push(`/products/${data.id}`)} key={data.id} className="flex flex-col w-60 h-72 cursor-pointer hover:scale-105 duration-500 ease-in-out overflow-hidden ">
            <div className="w-60 h-60 overflow-hidden">
                <img className="w-full h-full object-cover" src={data.images[0].image} alt={data.name} />
            </div>
            <div className="text-slate-100 px-2">
                <h3 className="font-semibold">{data.name}</h3>
                <div className="flex justify-between px-2">
                <p className="relative top-1">From: <span className=" font-semibold">{data.old_price}</span></p>
                <p>To: <span className=" text-xl text-orange-600 font-bold">{data.new_price}</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;