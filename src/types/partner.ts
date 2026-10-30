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
  address?: string;
  location?: PartnerLocation;
  category?: string;
  support?: { phone?: string; url?: string; instructions?: string; actionLabel?: string };
};
