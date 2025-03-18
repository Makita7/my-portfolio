<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  color: String,
})

</script>

<template>
  <div class="d-flex card align-center" :style="`border-color: ${props.color};`">
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
  border: solid red 2px;
  max-width: 55rem;
  border-radius: 1rem;
  margin: 1rem auto;
}

.cover {
  height: 15rem;
  border-radius: 1rem 0 0 1rem;
  margin-bottom: -0.4rem;
}

.title {
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
}
</style>
