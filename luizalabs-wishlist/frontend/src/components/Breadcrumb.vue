<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ul>
      <li v-for="(crumb, idx) in crumbs" :key="idx" :class="{ active: crumb.isActive }">
        <router-link
          v-if="!crumb.isActive"
          :to="crumb.to"
          class="crumb-link"
        >
          {{ crumb.label }}
        </router-link>

        <span v-else class="crumb-current">{{ crumb.label }}</span>

        <span v-if="idx < crumbs.length - 1" class="sep">/</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const matchedRecords = computed(() => route.matched || []);

const crumbs = computed(() => {
  const records = matchedRecords.value.filter(r => r.meta?.breadcrumb || r.name);

  const items = records.map((r, i) => {
    const to = r.name ? { name: r.name, params: route.params } : r.path || '/';
    const label = r.meta?.breadcrumb ?? r.name ?? (r.path === '/' ? 'Home' : r.path);
    return { label, to, isActive: false };
  });

  if (!items.length || items[0].to === undefined || items[0].label.toLowerCase() !== 'home') {
    items.unshift({ label: 'Home', to: { path: '/' }, isActive: false });
  }

  if (items.length) {
    items.forEach(i => (i.isActive = false));
    const lastIndex = items.findIndex(item => {
      try {
        const resolved = router.resolve(item.to);
        return resolved && resolved.href === router.resolve(route.fullPath).href;
      } catch {
        return false;
      }
    });

    if (lastIndex >= 0) items[lastIndex].isActive = true;
    else items[items.length - 1].isActive = true;
  }

  return items;
});
</script>

<style scoped>
.breadcrumb {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: rebeccapurple;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.breadcrumb li {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.crumblink,
.crumb-link {
  text-decoration: none;
  color: rebeccapurple;
  font-weight: 600;
}

.crumb-link:hover {
  text-decoration: underline;
}

.crumb-current {
  color: #222;
  font-weight: 700;
}

li.active .crumb-current {
  color: rebeccapurple;
}

.sep {
  color: #999;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
</style>
