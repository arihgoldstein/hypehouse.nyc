export interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
  status: "available" | "sold out";
}

export const merch: Product[] = [
  {
    id: 1,
    name: "CORE LOGO TEE",
    price: "$45",
    status: "available"
  },
  {
    id: 2,
    name: "HYE HOUSE HOODIE",
    price: "$85",
    status: "sold out"
  },
  {
    id: 3,
    name: "TOTE BAG",
    price: "$25",
    status: "available"
  }
];
