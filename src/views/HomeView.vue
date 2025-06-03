<script setup lang="ts">
import { useDisplay } from "vuetify";
import { onMounted, ref } from "vue";

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
  <main class="home d-flex justify-center">
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Brush.png" alt="" class="brush"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_stars.png" alt="" class="stars"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Coffee.png" alt="" class="coffee"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Folder.png" alt="" class="folder"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Vue.png" alt="" class="vueImg"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Laptop.png" alt="" class="laptop"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Tailwind.png" alt="" class="tailwind"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img src="@/assets/girl-animated.gif" alt="doodle of sofi" class="landing-img fade" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Headphones.png" alt="" class="headphones"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_croissant.png" alt="" class="croissant"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Puzzles.png" alt="" class="puzzles"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Lightbulb.png" alt="" class="lightbulb"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
    <img v-if="showFoatingImg" src="@/assets/elements for portfolio_Pantones.png" alt="" class="pantones"
      :class="!floatingAnimation ? 'fade' : 'floating'" />
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

  @media (max-width: 1600px) {
    width: 6rem !important;
  }
}

.stars {
  position: absolute;
  width: 11rem;
  left: 8%;
  top: 21%;

  @media (max-width: 1600px) {
    width: 9rem;
  }
}

.coffee {
  position: absolute;
  width: 8rem;
  left: 24%;
  top: 44%;

  @media (max-width: 1600px) {
    width: 6rem;
  }
}

.folder {
  position: absolute;
  width: 10rem;
  left: 13%;
  bottom: 25%;

  @media (max-width: 1600px) {
    width: 8rem;
  }
}

.vueImg {
  position: absolute;
  width: 7rem;
  left: 5%;
  top: 50%;

  @media (max-width: 1600px) {
    width: 5rem;
  }
}

.laptop {
  position: absolute;
  width: 16rem;
  left: 24%;
  bottom: 13%;

  @media (max-width: 1600px) {
    width: 13rem;
  }
}

.tailwind {
  position: absolute;
  width: 8rem;
  left: 12%;
  bottom: 9%;

  @media (max-width: 1600px) {
    width: 6rem;
  }
}

.headphones {
  position: absolute;
  width: 11rem;
  right: 20%;
  top: 15%;

  @media (max-width: 1600px) {
    width: 9rem;
  }
}

.croissant {
  position: absolute;
  width: 10rem;
  right: 17%;
  bottom: 13%;

  @media (max-width: 1600px) {
    width: 8rem;
  }
}

.puzzles {
  position: absolute;
  width: 11rem;
  right: 3%;
  top: 60%;

  @media (max-width: 1600px) {
    width: 9rem;
  }
}

.lightbulb {
  position: absolute;
  width: 6rem;
  right: 12%;
  top: 35%;

  @media (max-width: 1600px) {
    width: 5rem;
  }
}

.pantones {
  position: absolute;
  width: 9rem;
  right: 27%;
  top: 43%;

  @media (max-width: 1600px) {
    width: 7rem;
  }
}
</style>
