<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';


</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComp />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
