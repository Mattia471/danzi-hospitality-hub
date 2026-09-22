export type PartnerLocation = {
  latitude: number;
  longitude: number;
};

export type Partner = {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  location?: PartnerLocation;
  category?: string;
};
