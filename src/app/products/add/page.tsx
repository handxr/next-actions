import { createProduct } from "../actions";

export default function ProductAddPage() {
  async function addProduct(formData: FormData) {
    "use server";

    await createProduct({
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")),
    });
  }

  return (
    <main className="max-w-7xl mx-auto">
      <h1>Product Add Page</h1>
      <form action={addProduct} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
