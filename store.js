import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCount = create((set) => ({
  data: 0,
  useAdd: () => set((state) => ({ data: state.data + 1 })),
  useMinus: () => set((state) => ({ data: state.data - 1 })),
}));

export const useData = create((set) => ({
  products: [],
  cart: [],

  FetchProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const res2 = await res.json();
    set({ products: res2 });
  },

  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
}));

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cartItems: [] }),

      // 🔥 Added: calculate cart count
      cartCount: () => get().cartItems.length,
    }),
    {
      name: "cart-storage",
    }
  )
);

// ✅ Wishlist Store
export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlistItems: [],

      addToWishlist: (item) => {
        // Avoid duplicates
        const exists = get().wishlistItems.find((i) => i.id === item.id);
        if (!exists) {
          set((state) => ({
            wishlistItems: [...state.wishlistItems, item],
          }));
        }
      },

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
        })),

      clearWishlist: () => set({ wishlistItems: [] }),

      // Wishlist count
      wishlistCount: () => get().wishlistItems.length,
    }),
    {
      name: "wishlist-storage",
    }
  )
);
