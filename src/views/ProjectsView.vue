<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

const colors = ref(["#F55D3E", "#F6AC42", "#7EBC89", "#0069a2",]);

let cardColors = ref([]);
let amountCards = ref(6)

function selectNum() {
  let num = ref(-1)
  for (let i = 0; i < amountCards.value; i++) {
    console.log('hi')
    if (num.value < 3) {
      num.value += 1
      cardColors.value.push(colors.value[num.value]);
    } else {
      num.value = 0;
      cardColors.value.push(colors.value[num.value]);
    }
  }


}

onMounted(() => {
  selectNum();
})

</script>

<template>
  <main class="projects">
    <div class="d-flex">
      <!-- TODO: Add icons and link to other children projects -->
      <h2 class="title text-center">projects</h2>
    </div>
    <ProjectCard v-for="i in 6" :key="i" :color="cardColors[i]" />
  </main>
</template>

<style lang="scss" scoped>
.projects {
  position: relative;
  padding: 0 5rem;
  height: 80vh;
  overflow-y: scroll;
}

.title {
  font-weight: normal;
}
</style>
