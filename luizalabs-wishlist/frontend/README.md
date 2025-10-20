# Criar o projeto com Vite
npm create vite@latest frontend

# Instalar dependências principais
npm install
npm install axios
npm install pinia
npm install vue-router@4
npm install pinia-plugin-persistedstate 

# Rodar o servidor de desenvolvimento
npm run dev

Criei as pastas pages, services, router e store e criei os components ProductCard.vue, breadcrumb e starRating

No pages add a home q seria a productpage, onde tem a listagem de produtos e add a wishlistpage, ambas usam o productcard, breadcrumb e starrating e o pinia para armazenamento de estado e para persistencia mesma quando recarregada a pagina, ja que nao tem backend

No services eu estou apontando para o backend e chamando a requisiçao para receber os dados mocados

No router add as routas e integrei o breadcrumb

No store é onde esta a logica do pinia para persistencia de dados.

Add na public a logo da netshoes para colocar na aba do navegador

no index.html referenciei essa imagem: href="./public/netshoes.png", add a font main e icones do fontawesome para o navbar e coraçao do card 
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

No app.vue é onde esta o codigo do navbar, main e roteamento funcionando

No main.css é onde eu deixei as configuraçoes globais como fonte, cor primaria, margem do body ...
 
E por fim, no main.js é onde esta todos os imports para o site estar funcionando