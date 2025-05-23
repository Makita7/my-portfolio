<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  color: String,
  data: Object,
});
</script>

<template>
  <div class="d-md-flex card align-center" :style="`border-color: ${props.color};`">
    <v-col class="pa-0 ma-0">
      <img :src="props.data.img" alt="project cover" class="cover" />
    </v-col>
    <v-col>
      <p class="title">{{ props.data.title }}</p>
      <p>{{ props.data.description }}</p>
      <div class="d-flex">
        <p class="font-weight-bold mt-4 d-flex">
          Link:
          <a :href="props.data.link">
            <g v-if="props.data.type === 'front'" href="https://github.com/Makita7" class="filter github">
              <img src="@/assets/icons/github.svg" alt="github link" class="pl-4" />
            </g>
            <img v-else src="@/assets/icons/figma.svg" alt="figma icon" class="pl-4" style="height: 32px" />
          </a>
        </p>
        <p class="font-weight-bold mt-4 d-flex ml-8">
          Tech:
          <img v-for="(t, index) in props.data.tech" :key="index" :src="`@/assets/icons/${t}.svg`" :alt="`${t} icon`"
            class="pl-4" style="height: 32px" />
        <p v-for="t in props.data.tech" :key="t">{{ t }}</p>
        </p>
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
