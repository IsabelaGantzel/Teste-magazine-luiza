<template>
  <div class="star-rating-wrapper">
    <div class="star-rating">
      <span 
        v-for="i in 5" 
        :key="i" 
        class="star"
        :class="getStarClass(i)"
      >★</span>
    </div>
    <span class="rating-number">{{ rating.toFixed(1) }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: { type: Number, default: 0 }
});

function getStarClass(position) {
  if (props.rating >= position) return 'full';
  if (props.rating >= position - 0.5) return 'half';
  return 'empty';
}
</script>

<style scoped>
.star-rating-wrapper {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.star-rating {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 1rem;
  color: #ccc;
  position: relative;
  display: inline-block;
}

.star.full {
  color: gold;
}

.star.half {
  color: #ccc;
}
.star.half::before {
  content: '★';
  color: gold;
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  overflow: hidden;
}

.rating-number {
  font-size: 0.8rem;
  color: dimgrey;
  font-weight: 500;
}
</style>
