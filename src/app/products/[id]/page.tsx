import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/db";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

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
