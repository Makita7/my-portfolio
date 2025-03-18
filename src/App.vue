<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';


</script>

<template>
  <NavbarComp class="fade" />
  <RouterView />
  <FooterComp class="fade" />
</template>

<style scoped>
.fade {
  animation: fadeIn 1s ease-in-out;
}
</style>
