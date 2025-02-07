"use client";  // 🔥 Yeh line zaroori hai
import Image from "next/image";
import { Product } from "./pages/types"; // ✅ Import Product interface

type ProductCardProps = Product & {
  
  onAddToCart: (id:number) => void;
  
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  console.log('hi' ,{id,price,name})
  return (
    <div className="p-4 border rounded-lg bg-white">
      <Image src={image} alt={name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">${price}</p>
      <button 
        onClick={() => onAddToCart(id)}  
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
