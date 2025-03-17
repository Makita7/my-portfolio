<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
  <nav class="d-flex justify-space-between mb-4">
    <p class="mb-0">MAKITA</p>
    <div class="d-flex">
      <TransitionGroup name="fade" mode="in-out">
        <RouterLink to="/" class="link pl-4" activeClass="active" id="Home">Home</RouterLink>
        <RouterLink to="/about" class="link pl-4" activeClass="active" id="About">About</RouterLink>
        <RouterLink to="/about" class="link pl-4" activeClass="active" id="About">Projects</RouterLink>
        <RouterLink to="/about" class="link pl-4" activeClass="active" id="About">CV</RouterLink>
      </TransitionGroup>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  font-size: 18px;
  color: var(--blackish);
}

.active {
  text-decoration: underline;
}
</style>