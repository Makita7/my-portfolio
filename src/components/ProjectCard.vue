<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  color: String,
  data: Object,
});
</script>

<template>
  <div v-if="props.data" class="d-md-flex card align-center" :style="`border-color: ${props.color};`">
    <v-col class="pa-0 ma-0">
      <img :src="props.data.img" alt="project cover" class="cover" />
    </v-col>
    <v-col class="cols-md-7">
      <p class="title">{{ props.data.title }}</p>
      <p>{{ props.data.description }}</p>
      <div class="d-flex flex-wrap mt-1">
        <div class="font-weight-bold d-flex align-center">
          <p>Link:</p>
          <a :href="props.data.link" target="_blank" class="d-flex align-center">
            <g v-if="props.data.type === 'front'" href="https://github.com/Makita7" class="filter github">
              <img src="@/assets/icons/github.svg" alt="github link" class="ml-2 pt-1" />
            </g>
            <img v-else src="@/assets/icons/figma.svg" alt="figma icon" class="ml-2" style="height: 32px" />
          </a>
        </div>
        <div v-if="Array.isArray(props.data?.tech)" class="d-flex flex-wrap ml-4 align-center">
          <p class="font-weight-bold d-flex mr-1">Tech:</p>
          <img v-if="props.data?.tech.includes('html')" src="@/assets/icons/html.svg" alt="tech html icon"
            class="px-1" />
          <img v-if="props.data?.tech.includes('css')" src="@/assets/icons/css.svg" alt="tech css icon" class="px-1" />
          <img v-if="props.data?.tech.includes('vue')" src="@/assets/icons/vue.svg" alt="tech vue icon" class="px-1" />
          <img v-if="props.data?.tech.includes('react')" src="@/assets/icons/react.svg" alt="tech react icon"
            class="px-1" />
          <img v-if="props.data?.tech.includes('figma')" src="@/assets/icons/figma.svg" alt="tech figma icon"
            class="px-1" style="height: 32px" />
          <img v-if="props.data?.tech.includes('photoshop')" src="@/assets/icons/photoshop.svg"
            alt="tech photoshop icon" class="px-1" style="height: 32px" />
          <img v-if="props.data?.tech.includes('illustrator')" src="@/assets/icons/illustrator.svg"
            alt="tech illustrator icon" class="px-1" style="height: 32px" />
          <img v-if="props.data?.tech.includes('after-effects')" src="@/assets/icons/after-effects.svg"
            alt="tech after-effects icon" class="px-1" />
        </div>
      </div>
    </v-col>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: solid red 3px;
  max-width: 55rem;
  border-radius: 1rem;
  margin: 1rem auto;
}

.cover {
  height: auto;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
}

.title {
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
}

@media (min-width: 600px) {
  .cover {
    height: 15rem;
    border-radius: 1rem 0 0 1rem;
    margin-bottom: -0.4rem;
  }
}

@media (min-width: 960px) {}
</style>
