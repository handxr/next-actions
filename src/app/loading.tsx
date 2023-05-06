import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto my-8">
      <h1 className="text-3xl font-bold">Next 13 Products</h1>
      <ul className="my-6 grid grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>
            <div className="flex gap-4 border p-4 rounded-md shadow-sm">
              <Skeleton circle={true} height={100} width={100} />
              <div className="flex flex-col gap-2">
                <Skeleton width={100} />
                <Skeleton width={50} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
