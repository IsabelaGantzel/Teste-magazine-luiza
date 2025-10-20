<template>
  <div>
    <Breadcrumb />
    
    <div v-if="loading">Carregando produtos...</div>

    <div v-else class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.code"
        :product="product"
        :toggle-favorite="toggleFavorite"
        :is-favorite="isFavorite(product.code)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getProducts } from "../services/productService";
import { useWishlistStore } from "../store/wishlistStore.js";
import ProductCard from '../components/ProductCard.vue';
import Breadcrumb from "../components/Breadcrumb.vue";

const products = ref([]);
const loading = ref(true);
const wishlist = useWishlistStore();

onMounted(async () => {
  products.value = await getProducts();
  loading.value = false;
});

const toggleFavorite = (product) => { wishlist.toggle(product); }; 

const isFavorite = (code) => { return wishlist.items.some((p) => p.code === code); };
</script>

<style scoped>
.products-grid {
  width: 90%;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
</style>
