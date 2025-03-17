<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
  <nav class="d-flex justify-space-between">
    <p class="mb-0">MAKITA</p>
    <div class="d-flex">
      <RouterLink to="/" class="link pl-4">Home</RouterLink>
      <RouterLink to="/about" class="link pl-4">About</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none,
}
</style>