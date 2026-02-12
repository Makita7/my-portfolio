<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { useDisplay } from "vuetify";

let projectType = ref(false);
const toggleType = () => (projectType.value = !projectType.value);

const colors = ref(["#F55D3E", "#F6AC42", "#7EBC89", "#0069a2"]);
const colorsFront = ref(["#FF9883", "#C1DBB3", "#F2C078", "#a5dfff"]);
const display = useDisplay();

let cardColors = ref([]);
let amountCards = ref(6);

function selectNum() {
  let num = ref(-1);
  for (let i = 0; i < amountCards.value; i++) {
    if (num.value < 3) {
      num.value += 1;
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
});

import SpaceImg from "@/assets/project-previews/space-tourism.jpg";
import StepFormImg from "@/assets/project-previews/step-form.jpg";
import TipCalculatorImg from "@/assets/project-previews/tip-calculator.jpg";
import TomaatImg from "@/assets/project-previews/tomaat.jpg";
import ShoeECommerce from "@/assets/project-previews/shoe-e-commerce.jpg";
import CountdownDate from "@/assets/project-previews/countdownDate.jpg";

// Date format: YYYY-MM-DD
const listProjectsFront = ref([
  {
    title: "Date Countdown App",
    description:
      "It's a basic countdown app where you can add, edit or delete the dates you want to countdown, I also used VueUse and custom vue Directives",
    link: "https://makita7.github.io/date-countdown/",
    type: "front",
    program: "vue",
    img: CountdownDate,
    year: "2025-07-18",
    frontendMentor: false,
    tech: ["html", "css", "vue"],
  },
  {
    title: "Shoe E-Commerce",
    description:
      "basic e-commerce site for a fictional shoe store, with cart and checkout functionality",
    link: "https://makita7.github.io/ecommerce-product-react/",
    type: "front",
    program: "react",
    img: ShoeECommerce,
    year: "2025-05-27",
    frontendMentor: true,
    tech: ["html", "css", "react"],
  },
  {
    title: "Step Form",
    description: "Sign Up form for with steps and diferent preferences for user",
    link: "https://makita7.github.io/stepForm/",
    type: "front",
    program: "vue",
    img: StepFormImg,
    year: "2024-02-17",
    frontendMentor: true,
    tech: ["html", "css", "vue"],
  },
  {
    title: "Space Tourism",
    description: "Landing page for a fictional page about space tourism",
    link: "https://makita7.github.io/space-tourism-site/",
    type: "front",
    program: "vue",
    img: SpaceImg,
    year: "2023-08-12",
    frontendMentor: true,
    tech: ["html", "css", "vue"],
  },

  {
    title: "Tip Calculator",
    description:
      "Calculator to help split tips depending on percentage of bill that wants to be given",
    link: "https://makita7.github.io/Tip-Calculator/",
    type: "front",
    program: "vue",
    img: TipCalculatorImg,
    year: "2023-06-30",
    frontendMentor: true,
    tech: ["html", "css", "vue"],
  },
]);

const listProjectsUxUi = ref([
  {
    title: "Tomaat.",
    description: "Pomodoro method study app with accomodations for ADHD and Autism",
    link: "",
    type: "ux",
    program: "figma",
    img: TomaatImg,
    year: "2025-05-12",
    frontendMentor: false,
    tech: ["figma", "photoshop", "illustrator"],
  },
]);
</script>

<template>
  <div style="position: relative; height: 92vh">
    <div class="projects">
      <div v-if="!display.xs" class="d-flex align-center justify-space-between fade">
        <v-col class="pa-0" id="ux-ui-arrow">
          <div v-if="!projectType" @click="toggleType()" class="d-flex arrow fadeTitles">
            <img src="@/assets/icons/plane-arrow.svg" alt="go to icon" class="mr-2" style="transform: rotate(180deg)" />
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

      <div v-if="display.xs" class="d-flex align-center justify-center fade">
        <div v-if="projectType" id="ux-ui-title" class="d-flex fadeTitles">
          <img src="@/assets/icons/line-md_pencil.svg" alt="ux ui icon for title" class="mr-2 icon" />
          <h2 class="title text-center">UX/UI Design</h2>
        </div>
        <div v-if="!projectType" id="ux-ui-title" class="d-flex fadeTitles">
          <img src="@/assets/icons/frontend.svg" alt="ux ui icon for title" class="mr-2 icon" />
          <h2 class="title text-center">Frontend</h2>
        </div>
      </div>

      <div v-if="display.xs" class="d-flex align-center justify-space-between fade mt-2">
        <v-col class="pa-0" id="ux-ui-arrow">
          <div v-if="!projectType" @click="toggleType()" class="d-flex arrow fadeTitles">
            <img src="@/assets/icons/plane-arrow.svg" alt="go to icon" class="mr-2" style="transform: rotate(180deg)" />
            <p class="goto">UX/UI Design</p>
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
        <ProjectCard v-if="!projectType" v-for="(i, index) in listProjectsFront" :data="i" :key="index"
          :color="cardColors[index]" class="card" :style="getDelay(index)" />

        <ProjectCard v-if="projectType" v-for="(i, index) in listProjectsUxUi" :data="i" :key="index"
          :color="cardColors[index]" class="card" :style="getDelay(index)" />
      </div>
    </div>
    <img src="@/assets/project-bg.png" alt="pattern background" class="img-bg fade" v-if="display.mdAndUp.value" />
  </div>
</template>

<style lang="scss" scoped>
.projects {
  position: relative;
  padding: 0 1rem;
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
  font-size: 24px;
}

.goto {
  font-size: 16px;
}

.fadeTitles {
  animation: fadeIn 1s ease-in-out;
}

.img-bg {
  position: absolute;
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

@media (min-width: 960px) {
  .projects {
    height: 92vh;
  }
}
</style>
