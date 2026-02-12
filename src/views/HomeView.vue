<script setup lang="ts">
import { useDisplay } from "vuetify";
import { onMounted, ref } from "vue";

const showFoatingImg = useDisplay().lgAndUp;

let floatingAnimation = ref(false);

const AnimateIn = () => {
  setTimeout(() => {
    floatingAnimation.value = true;
  }, 2000);
};

onMounted(() => {
  AnimateIn();
});
</script>

<template>
  <main class="home d-flex justify-center">
    <v-col class="d-flex flex-column">
      <h2 class="name ml-auto mt-auto">Hi I'm Sofi,</h2>
      <p class="description ml-auto mb-auto">
        UX/UI Designer building thoughtful, <br />
        accessible digital experiences
      </p>
    </v-col>
    <v-col>
      <img src="@/assets/girl-animated.gif" alt="doodle of sofi" class="landing-img fade" />
    </v-col>
  </main>
</template>

<style lang="scss" scoped>
.home {
  height: 75vh;
  overflow: hidden;

  img {
    pointer-events: none;
    user-select: none;
  }
}

.name {
  font-size: 4rem;
  color: var(--red);
}

.description {
  font-size: 1.5rem;
  color: #192c4a;
}

.landing-img {
  max-height: 75vh;
  object-fit: contain;
  pointer-events: none;
}
</style>
