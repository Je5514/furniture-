export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Hollow Lounge", price: 400, image: "/slider1.png" },
  { id: 2, name: "Quiet Sofa", price: 750, image: "/slider2.png" },
  { id: 3, name: "Stone", price: 125, image: "/slider3.png" },
  { id: 4, name: "Mara Stool", price: 830, image: "/slider4.png" },
  // add more, the carousel scrolls automatically
];