<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

let projectType = ref(true)
const toggleType = () => projectType.value = !projectType.value;

const colors = ref(["#F55D3E", "#F6AC42", "#7EBC89", "#0069a2",]);
const colorsFront = ref(["#FF9883", "#C1DBB3", "#F2C078", "#a5dfff",]);

let cardColors = ref([]);
let amountCards = ref(6)

function selectNum() {
  let num = ref(-1)
  for (let i = 0; i < amountCards.value; i++) {
    if (num.value < 3) {
      num.value += 1
      cardColors.value.push(colors.value[num.value]);
    } else {
      num.value = 0;
      cardColors.value.push(colors.value[num.value]);
    }
  }
}

const getDelay = (index: number) => {
  return `animation: fadeDown ${index / 2}s ease-in-out;`;
};

onMounted(() => {
  selectNum();
})

</script>

<template>
  <main class="projects">
    <div class="d-flex align-center justify-space-between fade">
      <v-col class=" pa-0" id="ux-ui-arrow">
        <div v-if="!projectType" @click="toggleType()" class="d-flex arrow fadeTitles">
          <img src="@/assets/icons/plane-arrow.svg" alt="go to icon" class="mr-2" style="transform: rotate(180deg);" />
          <p class="goto">UX/UI Design</p>
        </div>
      </v-col>
      <v-col class="d-flex justify-center pa-0">
        <div v-if="projectType" id="ux-ui-title" class="d-flex fadeTitles">
          <img src="@/assets/icons/line-md_pencil.svg" alt="ux ui icon for title" class="mr-2" />
          <h2 class="title text-center">UX/UI Design</h2>
        </div>
        <div v-if="!projectType" id="ux-ui-title" class="d-flex fadeTitles">
          <img src="@/assets/icons/frontend.svg" alt="ux ui icon for title" class="mr-2" />
          <h2 class="title text-center">Frontend</h2>
        </div>
      </v-col>
      <v-col class="d-flex justify-end pa-0" id="front-arrow">
        <div v-if="projectType" @click="toggleType()" class="d-flex arrow fadeTitles">
          <p class="goto">Frontend</p>
          <img src="@/assets/icons/plane-arrow.svg" alt="go to icon" class="ml-2" />
        </div>
      </v-col>
    </div>
    <div>
      <ProjectCard v-for="i in 6" :key="i" :color="cardColors[i]" class="card" :style="getDelay(i)" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.projects {
  position: relative;
  padding: 0 5rem;
  height: 80vh;
  overflow-y: scroll;
}

.arrow {
  transition: all ease-in-out 0.5s;
  cursor: pointer;
}

.arrow:hover {
  transform: scale(1.08);
}

.card {
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.02);
}

.title {
  font-weight: normal;
}

.goto {
  font-size: 24px;
}

.fade {
  animation: fadeIn 2s ease-in-out;
}

.fadeTitles {
  animation: fadeIn 1s ease-in-out;
}
</style>
