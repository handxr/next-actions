import { prisma } from "../lib/db";

type CreateProductDTO = {
  name: string;
  price: number;
};

type UpdateProductDTO = CreateProductDTO;

export async function getAllProducts() {
  return await prisma.product.findMany();
}

export async function createProduct(product: CreateProductDTO) {
  return await prisma.product.create({
    data: product,
  });
}

export async function getProductById(id: number) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

export async function updateProduct(id: number, product: UpdateProductDTO) {
  return await prisma.product.update({
    where: { id },
    data: product,
  });
}
