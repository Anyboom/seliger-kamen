export type PlaceShop = {
  id: number;
  latitude: string;
  longitude: string;
  address: string;
  phone: string;
  socials?: { icon: string; href: string }[];
};
