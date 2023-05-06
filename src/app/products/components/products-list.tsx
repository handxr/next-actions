"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
};

export function ProductsList({ products }: { products: Product[] }) {
  const router = useRouter();
  return (
    <ul className="my-6 grid grid-cols-3 gap-10">
      {products.map((product) => (
        <li
          key={product.id}
          onClick={() => router.push(`/products/${product.id}/edit`)}
          className="cursor-pointer"
        >
          <div className="flex gap-4 border p-4 rounded-md shadow-sm">
            <Image
              src={`
              https://picsum.photos/seed/${product.id}/200/300
            `}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-full h-20 w-20"
            />
            <div className="flex flex-col gap-2">
              <p
                className={`${
                  product.price > 100 ? "text-red-600" : "text-green-600"
                } font-semibold`}
              >
                {product.name}
              </p>
              <span
                className={`${
                  product.price > 100 ? "text-red-600" : "text-green-600"
                } font-semibold`}
              >
                {product.price}€
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
