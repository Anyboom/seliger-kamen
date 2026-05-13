export type Product = {
  id: number;
  category: number;
  image: {
    id: string;
    title: string;
    height: number;
    width: number;
  };
  title: string;
};
