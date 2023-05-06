import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getProductById, updateProduct } from "../../actions";

export default async function ProductEditPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id));

  async function updateProducts(formData: FormData) {
    "use server";

    await updateProduct(Number(params.id), {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")),
    });

    revalidatePath(`/products/${params.id}`);
  }

  async function updateProductAndGoBack(formData: FormData) {
    "use server";

    await updateProduct(Number(params.id), {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")),
    });
    redirect(`/products/${params.id}`);
  }

  return (
    <main>
      <h2>Edit {product?.name}</h2>
      <form action={updateProducts} className="flex flex-col">
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
