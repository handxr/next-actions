import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getProductById, updateProduct } from "../../actions";
import { AddEditForm } from "../../components/add-edit-form";

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

      price: Number(formData.get("price")),
    });

    revalidatePath(`/products/${params.id}`);
  }

  async function updateProductAndGoBack(formData: FormData) {
    "use server";

    await updateProduct(Number(params.id), {
      name: formData.get("name") as string,

      price: Number(formData.get("price")),
    });
    redirect(`/`);
  }

  if (!product) return null;

  return (
    <main className="max-w-7xl mx-auto my-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <AddEditForm onSubmit={updateProducts} product={product}>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Update
        </button>
        <button
          formAction={updateProductAndGoBack}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Update and go back
        </button>
      </AddEditForm>
    </main>
  );
}
