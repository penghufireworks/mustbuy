export type PickupType = 'airport' | 'port' | 'store' | 'home' | 'cvs';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
  isActive: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface PickupLocation {
  id: string;
  name: string;
  type: PickupType;
  address: string;
  operatingHours: string;
  isActive: boolean;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email?: string;
  flightNumber?: string;
  shipNumber?: string;
  departureDate?: string; // ISO Date String
}

export interface Order {
  id: string;
  items: CartItem[];
  pickupMethod: PickupType;
  pickupLocationId?: string;
  pickupTime?: string;
  customerInfo: CustomerInfo;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
  pickupCode?: string;
  createdAt: string;
  smsVerified: boolean;
}
