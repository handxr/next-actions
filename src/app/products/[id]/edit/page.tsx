import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/db";
import { redirect } from "next/navigation";

export default async function ProductEditPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  async function updateProduct(formData: FormData) {
    "use server";

    await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: formData.get("name") as string,
        image: formData.get("image") as string,
        price: Number(formData.get("price")),
      },
    });
    revalidatePath(`/products/${params.id}`);
  }

  async function updateProductAndGoBack(formData: FormData) {
    "use server";
    await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: formData.get("name") as string,
        image: formData.get("image") as string,
        price: Number(formData.get("price")),
      },
    });
    redirect(`/products/${params.id}`);
  }

  return (
    <main>
      <h2>Edit {product?.name}</h2>
      <form action={updateProduct} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" defaultValue={product?.name} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={product?.image}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          defaultValue={product?.price}
        />
        <button type="submit">Save and Continue</button>
        <button formAction={updateProductAndGoBack}>Save and Quit</button>
      </form>
    </main>
  );
}
