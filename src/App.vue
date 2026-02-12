<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
import NavbarMobileComp from "./components/NavbarMobileComp.vue";
import { onMounted, onUnmounted, ref } from "vue";

const route = useRoute();
const display = useDisplay();

let counter = ref(0);

onMounted(() => {
  window.addEventListener("keyup", handleKey);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKey);
});

function handleKey(event) {
  if ((event.key === "ArrowUp" || event.key === "ArrowRight") && counter.value < 9) {
    counter.value += 1;
  } else if (
    (event.key === "ArrowDown" || event.key === "ArrowLeft") &&
    counter.value >= 1
  ) {
    counter.value -= 1;
  }
}
</script>

<template>
  <NavbarComp v-if="display.mdAndUp.value" class="fade" />
  <NavbarMobileComp v-else />
  <div class="spacingMargin">
    <RouterView />
  </div>
  <FooterComp class="fade" />
</template>

<style scoped>
.fade {
  animation: fadeIn 1s ease-in-out;
}

.spacingMargin {
  margin-bottom: 5rem;
}
</style>
