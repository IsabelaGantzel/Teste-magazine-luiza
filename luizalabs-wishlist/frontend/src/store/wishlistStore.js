import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [],
  }),
  actions: {
    toggle(product) {
      const index = this.items.findIndex((p) => p.code === product.code);
      if (index >= 0) {
        this.items.splice(index, 1);
      } else {
        this.items.push(product);
      }
    },
  },
  persist: true,
});
