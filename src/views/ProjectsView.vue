<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useDisplay } from 'vuetify'

const colors = ref<string[]>(['#F55D3E', '#F6AC42', '#7EBC89', '#0069a2'])
// const colorsFront = ref<string[]>(['#FF9883', '#C1DBB3', '#F2C078', '#a5dfff'])
const display = useDisplay()

const amountCards = ref(6)
const cardColors = ref<string[]>([])

function selectNum() {
  let num = -1
  cardColors.value = [] // importante si vuelve a ejecutarse

  for (let i = 0; i < amountCards.value; i++) {
    num = num < 3 ? num + 1 : 0
    cardColors.value.push(colors.value[num])
  }
}

const getDelay = (index: number) => {
  return `animation: fadeDown ${index / 2}s ease-in-out;`
}

onMounted(() => {
  selectNum()
})

import MoodGardenImg from '@/assets/project-previews/mood-garden.png'
import DailyGroundImg from '@/assets/project-previews/daily-ground.png'
import FleurPatiserieImg from '@/assets/project-previews/fleur-patisserie.png'
import TheEditionImg from '@/assets/project-previews/the-edition.jpg';

const listProjectsUxUi = ref([
  {
    title: 'The Edittion',
    to: 'the-edittion',
    description:
      'Photography studio website and client portal for reservation and gallery delivery.',
    type: 'ux',
    program: 'figma',
    img: TheEditionImg,
    year: '2026-06-30',
    frontendMentor: false,
    tech: ['figma', 'photoshop'],
  },
  {
    title: 'Fleur Patisserie',
    to: 'fleur-patisserie',
    description:
      'App for a high end Botanical inspired French Cafe, virtual menu and cafe institutional information.',
    type: 'ux',
    program: 'figma',
    img: FleurPatiserieImg,
    year: '2026-05-12',
    frontendMentor: false,
    tech: ['figma', 'photoshop', 'illustrator'],
  },
  {
    title: 'DailyGround.',
    to: 'daily-ground',
    description:
      'App for booking or ordering from coffee shops and choosing how to get order. Similar to UberEats or PedidosYa',
    type: 'ux',
    program: 'figma',
    img: DailyGroundImg,
    year: '2026-03-24',
    frontendMentor: false,
    tech: ['figma', 'photoshop', 'illustrator', 'procreate'],
  },
  {
    title: 'MoodGarden',
    to: 'mood-garden',
    description:
      'Colorful app for tracking emotions, triggers and glimmers. Using small animations to lighten users interactions',
    type: 'ux',
    program: 'figma',
    img: MoodGardenImg,
    year: '2026-01-18',
    frontendMentor: false,
    tech: ['figma', 'photoshop', 'illustrator', 'procreate'],
  },


])
</script>

<template>
  <div id="projects" class="mt-4">
    <div v-if="!$route.params.slug" class="projects">
      <div v-if="display.xs" class="d-flex align-center justify-center fade">
        <div id="ux-ui-title" class="d-flex fadeTitles">
          <img
            src="@/assets/icons/line-md_pencil.svg"
            alt="ux ui icon for title"
            class="mr-2 icon"
          />
          <h2 class="title text-center">My Work</h2>
        </div>
      </div>

      <div>
        <ProjectCard
          v-for="(i, index) in listProjectsUxUi"
          :data="i"
          :to="{ name: 'UxUiCases', params: { slug: i.to } }"
          :key="index"
          :color="cardColors[index]"
          class="card"
          :style="getDelay(index)"
        />
      </div>
    </div>
    <RouterView />
    <img
      src="@/assets/project-bg.png"
      alt="pattern background"
      class="img-bg fade"
      v-if="display.mdAndUp.value"
    />
  </div>
</template>

<style lang="scss" scoped>
.projects {
  position: relative;
  padding: 0 1rem;
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
  font-size: 24px;
}

.goto {
  font-size: 16px;
}

.fadeTitles {
  animation: fadeIn 1s ease-in-out;
}

.img-bg {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

.icon {
  width: 1.8rem;
}

@media (min-width: 600px) {
  .projects {
    position: relative;
    padding: 5rem 5rem 0 5rem;
    overflow-y: scroll;
  }

  .title {
    font-size: 32px;
  }

  .goto {
    font-size: 24px;
  }

  .icon {
    width: 2rem;
  }
}
</style>
