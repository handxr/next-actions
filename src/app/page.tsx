import { getAllProducts } from "./products/actions";
import { ProductsList } from "./products/components/products-list";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="max-w-7xl mx-auto my-8">
      <h1 className="text-3xl font-bold">Next 13 Products</h1>
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        <p className="text-xl">No products found.</p>
      )}
    </main>
  );
}
