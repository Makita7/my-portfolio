<script setup lang="ts">
import img from "@/assets/flower-girl-old-Disney01.png";
</script>

<template>
  <main class="home d-flex justify-center">
    <img src="@/assets/flower-girl-old-Disney01.png" alt="doodle of sofi" class="landing-img" />
  </main>
</template>

<style lang="scss" scoped>
.home {
  height: 80vh;
  overflow: hidden;
}

.landing-img {
  max-height: 100vh;
  height: auto;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

@media (min-width: 600px) {}

@media (min-width: 960px) {}
</style>
