export type PlaceShop = {
  id: number;
  latitude: string;
  longitude: string;
  address: string;
  phone: string;
  schedule: string;
  socials?: { icon: string; href: string }[];
};
