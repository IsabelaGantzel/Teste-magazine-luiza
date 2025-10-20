<template>
  <div>
    <Breadcrumb page="Wishlist" />

    <div v-if="!wishlist.items.length">
      Nenhum item favoritado ainda.
    </div>

    <div v-else class="products-grid">
      <ProductCard
        v-for="product in wishlist.items"
        :key="product.code"
        :product="product"
        :toggle-favorite="toggleFavorite"
        :is-favorite="isFavorite(product.code)"
        from-wishlist
      />
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from "../store/wishlistStore.js";
import ProductCard from "../components/ProductCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

const wishlist = useWishlistStore();

const toggleFavorite = (product) => {
  wishlist.toggle(product);
};

const isFavorite = (code) => {
  return wishlist.items.some((p) => p.code === code);
};
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
</style>
