import { redirect } from "next/navigation";
import { createProduct } from "../actions";

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
    <main className="max-w-7xl mx-auto">
      <h1>Product Add Page</h1>
      <form action={addProduct} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
