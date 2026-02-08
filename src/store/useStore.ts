import { create } from 'zustand';
import { Product, CartItem, PickupType, CustomerInfo, Order } from '../types';
import { mockProducts } from '../services/mockData';

interface AppState {
  products: Product[];
  cart: CartItem[];
  pickupMethod: PickupType | null;
  pickupTime: string | null;
  customerInfo: CustomerInfo | null;
  
  // Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  setPickupMethod: (method: PickupType) => void;
  setPickupTime: (time: string) => void;
  setCustomerInfo: (info: CustomerInfo) => void;
  
  // Computed
  getCartTotal: () => number;
}

export const useStore = create<AppState>((set, get) => ({
  products: mockProducts,
  cart: [],
  pickupMethod: null,
  pickupTime: null,
  customerInfo: null,

  addToCart: (product, quantity = 1) => set((state) => {
    const existingItem = state.cart.find(item => item.productId === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      };
    }
    return { cart: [...state.cart, { productId: product.id, quantity, product }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.productId !== productId),
  })),

  updateCartQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: Math.max(0, quantity) }
        : item
    ).filter(item => item.quantity > 0),
  })),

  clearCart: () => set({ cart: [] }),

  setPickupMethod: (method) => set({ pickupMethod: method }),
  setPickupTime: (time) => set({ pickupTime: time }),
  setCustomerInfo: (info) => set({ customerInfo: info }),

  getCartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  },
}));
