<script setup lang="ts">
import { useDisplay } from "vuetify";
import { onMounted, ref } from "vue";
import { RouterLink } from 'vue-router';
import ProjectsView from "./ProjectsView.vue";

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
  <div>
    <main id="home" class="home d-flex align-md-center flex-column flex-sm-row justify-center">
      <div class="d-flex flex-column justify-center justify-md-start">
        <h2 class="name ml-0 ml-md-auto mt-0 mt-sm-auto text-center text-md-right">
          Hi I'm Sofi,
        </h2>
        <p class="description mb-auto ml-0 ml-md-auto text-sm-right text-center text-capitalize">
          UX/UI Designer building thoughtful, <br />
          accessible digital experiences
        </p>
        <div class="d-flex justify-end pt-4 mr-3">
          <RouterLink :to="{ path:'/', hash:'#projects'}" class="">
            <button class="btnCTA text-white px-4 py-2 rounded-lg ">Explore My Work</button>
          </RouterLink>
        </div>
      </div>
      <div v-if="!useDisplay().xs" class="d-flex flex-column justify-center justify-md-start">
        <img src="@/assets/girl-animated.gif" alt="doodle of sofi" class="landing-img fade mt-auto mb-auto" />
      </div>
      <div v-else class="d-flex align-center">
        <img src="@/assets/girl-animated.gif" alt="doodle of sofi" class="landing-img2 fade ml-auto mr-auto" />
      </div>
    </main>
    <ProjectsView/>
  </div>
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
  max-width: 50vw;
}

.landing-img2 {
  max-height: 75vh;
  object-fit: contain;
  pointer-events: none;
  max-width: 50vw;
  position: relative;
}

.smImg {
  top: -9rem;
  position: relative;
}

.btnCTA{
  background-color: #31659f;
  transition: 0.2s ease-in-out;
}

.btnCTA:hover{
  background-color: #244f80;
}

@media (max-width: 960px) {
  .name {
    font-size: 3rem;
  }

  .description {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .name {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .landing-img2 {
    max-height: 80vh;
    max-width: 65vw;
  }
}
</style>
