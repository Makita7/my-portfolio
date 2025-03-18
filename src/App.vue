<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';


</script>

<template>
  <NavbarComp />
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
  <FooterComp />
</template>

<style scoped></style>
