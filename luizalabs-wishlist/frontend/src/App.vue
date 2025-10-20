<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-margin">
        <RouterLink class="netshoes" to="/">
          <img src="./assets/logo.svg" alt="Netshoes" />
        </RouterLink>

        <div class="navbar-right">
          <RouterLink to="/wishlist" class="wishlist-link">
            <i class="fa-regular fa-heart heart-icon"></i> Wishlist
          </RouterLink>

          <div ref="dropdownRef" class="profile-dropdown" @click="toggleDropdown">
            <i class="fa-solid fa-circle-user profile-icon"></i>
            <ul v-if="isOpen" class="dropdown-menu">
              <li>Entrar</li>
              <li>Minha conta</li>
              <li>Endereços</li>
              <li>Minha Netshoes</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = (event) => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.app {
  font-family: 'Source Sans Pro', sans-serif;
  color: #222;
  background-color: #fafafa;
  min-height: 100vh;
}

.navbar {
  padding: 1rem;
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.navbar a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

.navbar-margin {
  margin-inline: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.wishlist-link {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.wishlist-link .heart {
  font-size: 1.6rem;
  line-height: 1;
  transition: transform 0.2s ease;
}

.wishlist-link:hover .heart {
  transform: scale(1.2);
}

.profile-dropdown {
  position: relative;
  cursor: pointer;
}

.profile-icon {
  font-size: 1.8rem;
  color: white;
  transition: transform 0.2s ease;
}

.heart-icon{
  font-size: 1.4rem;
  color: white;
  transition: transform 0.2s ease;
}

.profile-dropdown:hover .profile-icon {
  transform: scale(1.1);
}

.dropdown-menu {
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 180px;
  z-index: 5;
}

.dropdown-menu li {
  padding: 0.7rem 1rem;
  color: #333;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-menu li:hover {
  background-color: #f4ecff;
}

main {
  padding: 5rem 4rem;
}

@media (max-width: 768px) {
  main {
    padding: 5rem 1rem;
  }
  .navbar-margin {
    margin-inline: 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
}
</style>