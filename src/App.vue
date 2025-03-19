<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import NavbarMobileComp from './components/NavbarMobileComp.vue';

const route = useRoute();
const display = useDisplay();

</script>

<template>
  <NavbarComp v-if="display.mdAndUp && !display.xs" class="fade" />
  <NavbarMobileComp v-else />
  <RouterView />
  <FooterComp class="fade" />
</template>

<style scoped>
.fade {
  animation: fadeIn 1s ease-in-out;
}
</style>
