export function AddEditForm({
  onSubmit,
  children,
  product,
}: {
  onSubmit: (formData: FormData) => void;
  children?: React.ReactNode;
  product?: { name: string; price: number };
}) {
  return (
    <form action={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-lg font-bold">Name</span>
        <input
          type="text"
          name="name"
          className="border p-2 rounded-md shadow-sm"
          defaultValue={product?.name}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-lg font-bold">Price</span>
        <input
          type="number"
          name="price"
          className="border p-2 rounded-md shadow-sm"
          defaultValue={product?.price}
        />
      </label>

      {children}
    </form>
  );
}
