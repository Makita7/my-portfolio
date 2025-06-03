<script setup lang="ts">
import { useDisplay } from "vuetify";

const showFoatingImg = useDisplay().lgAndUp;
</script>

<template>
  <main class="home d-flex justify-center">
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Brush.png" alt="" class="brush fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_stars.png" alt="" class="stars fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Coffee.png" alt="" class="coffee fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Folder.png" alt="" class="folder fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Vue.png" alt="" class="vueImg fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Laptop.png" alt="" class="laptop fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Tailwind.png" alt=""
      class="tailwind fade floating" />
    <img src="@/assets/girl-animated.gif" alt="doodle of sofi" class="landing-img fade" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Headphones.png" alt=""
      class="headphones fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_croissant.png" alt=""
      class="croissant fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Puzzles.png" alt="" class="puzzles fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Lightbulb.png" alt=""
      class="lightbulb fade floating" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Pantones.png" alt=""
      class="pantones fade floating" />
  </main>
</template>

<style lang="scss" scoped>
.home {
  height: 80vh;
  overflow: hidden;

  img {
    pointer-events: none;
    user-select: none;
  }
}

.landing-img {
  max-height: 100vh;
  height: auto;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  pointer-events: none;
}

.brush {
  position: absolute;
  width: 8rem;
  left: 20%;
  top: 15%;
}

.stars {
  position: absolute;
  width: 11rem;
  left: 8%;
  top: 21%;
}

.coffee {
  position: absolute;
  width: 8rem;
  left: 24%;
  top: 44%;
}

.folder {
  position: absolute;
  width: 10rem;
  left: 13%;
  bottom: 25%;
}

.vueImg {
  position: absolute;
  width: 7rem;
  left: 5%;
  top: 50%;
}

.laptop {
  position: absolute;
  width: 16rem;
  left: 24%;
  bottom: 13%;
}

.tailwind {
  position: absolute;
  width: 8rem;
  left: 12%;
  bottom: 9%;
}

.headphones {
  position: absolute;
  width: 11rem;
  right: 20%;
  top: 15%;
}

.croissant {
  position: absolute;
  width: 10rem;
  right: 17%;
  bottom: 13%;
}

.puzzles {
  position: absolute;
  width: 11rem;
  right: 3%;
  top: 60%;
}

.lightbulb {
  position: absolute;
  width: 6rem;
  right: 12%;
  top: 35%;
}

.pantones {
  position: absolute;
  width: 9rem;
  right: 27%;
  top: 43%;
}

@media (min-width: 600px) {}

@media (min-width: 960px) {}
</style>
