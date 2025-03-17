<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';


</script>

<template>
  <NavbarComp />

  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped></style>
