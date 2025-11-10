import type { ProductType } from "../types/product-type";

export const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    category: "Bags",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 149.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "Electronics",
  },
];

export const mockProductsHome = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
];
