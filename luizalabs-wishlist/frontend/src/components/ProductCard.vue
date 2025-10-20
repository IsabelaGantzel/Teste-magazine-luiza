<template>
  <div class="product-card" v-if="product.visible">
    <div class="image-wrapper">
      <img :src="product.image" :alt="product.name" />

      <button
        class="favorite-btn"
        @click.stop="toggleFavorite(product)"
        aria-label="Favoritar"
        :class="{ favorited: isFavorite && !fromWishlist }" 
      >
        <span v-if="fromWishlist">✕</span>
        <span v-else><i class="fa-regular fa-heart heart-icon"></i></span>
      </button>
    </div>

    <div class="product-info">
      <div class="top-info">
        <h3>{{ product.name }}</h3>
      </div>
      <div class="rating">
        <StarRating :rating="product.rating" />
      </div>
      <div class="bottom-info">
        <p class="old-price">
          R$ {{ (product.priceInCents / 100).toFixed(2).replace('.', ',') }}
        </p>
        <div class="price-sold-out">
          <p class="price">
            R$ {{ (product.salePriceInCents / 100).toFixed(2).replace('.', ',') }}
          </p>
          <p v-if="!product.stockAvailable" class="out-of-stock">Esgotado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from "../store/wishlistStore.js";
import StarRating from './StarRating.vue';

const props = defineProps({
  product: Object,
  toggleFavorite: Function,
  isFavorite: Boolean,
  fromWishlist: { type: Boolean, default: false },
});

const wishlistStore = useWishlistStore();

function toggleFavorite(product) {
  wishlistStore.toggle(product);
}

</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.favorite-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 54px;
  height: 51px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

.favorite-btn.favorited {
  background: #ffebeb;
  color: red;
}

.product-info {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;  
}

.product-info h3 {
  font-size: 0.9rem;
  color: dimgrey;
  margin: 0;
  overflow: hidden;
  height: 2.4em;
}

.out-of-stock {
  color: red;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.rating {
  color: gold;
  font-size: 0.9rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}

.top-info{
  display: grid;
  justify-content: space-between;
}

.bottom-info {
  margin-top: auto;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  font-size: 0.8rem;
  margin: 0px;
}

.price-sold-out{
  display: flex;
  justify-content: space-between;
}

.price {
  font-weight: 700;
  color: rebeccapurple;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  font-weight: bold;
}

button {
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

button:hover {
  border-color: #999;
}

button.favorited {
  background: #ffe3e3;
  border-color: #ff8fa3;
  color: #c1121f;
}
</style>
