import Link from "next/link";
import { getAllProducts } from "./products/actions";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main>
      <h1>Next 13 Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
