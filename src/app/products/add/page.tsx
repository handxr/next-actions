import { redirect } from "next/navigation";
import { createProduct } from "../actions";
import { AddEditForm } from "../components/add-edit-form";

export default function ProductAddPage() {
  async function addProduct(formData: FormData) {
    "use server";

    await createProduct({
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
    });

    redirect("/");
  }

  return (
    <main className="max-w-7xl mx-auto my-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Add Product</h1>
      <AddEditForm onSubmit={addProduct}>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Add
        </button>
      </AddEditForm>
    </main>
  );
}
