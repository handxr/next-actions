import { notFound } from "next/navigation";

import Image from "next/image";
import { getProductById } from "../actions";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      {/* <Image src={product.image} alt={product.name} width={200} height={200} /> */}
      <p>{product.price}</p>
      <button>Edit</button>
    </main>
  );
}
