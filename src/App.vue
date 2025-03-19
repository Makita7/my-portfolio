<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

const route = useRoute();

</script>

<template>
  <NavbarComp class=" fade" />
  <RouterView />
  <FooterComp class="fade" />
</template>

<style scoped>
.fade {
  animation: fadeIn 1s ease-in-out;
}
</style>
