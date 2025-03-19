<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  color: String,
})

</script>

<template>
  <div class="d-md-flex card align-center" :style="`border-color: ${props.color};`">
    <v-col class="pa-0 ma-0">
      <img src="@/assets/mockImageCard.png" alt="project cover" class="cover" />
    </v-col>
    <v-col>
      <p class="title">Title of the Project</p>
      <p>Whereas disregard and contempt for human rights have resulted</p>
      <p class="font-weight-bold mt-4">Type:</p>
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
