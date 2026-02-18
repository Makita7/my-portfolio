<script lang="ts">
import PhotoshopImg from "@/assets/icons/photoshop.svg";

const TechList = [
  {
    name: "Photoshop",
    img: PhotoshopImg,
  },
];
</script>

<template>
  <div class="about d-flex flex-column flex-lg-row align-center fade">
    <v-col class="d-flex justify-center">
      <img src="@/assets/my-photo.png" alt="my profile picture" class="myPhoto"
        style="animation: fadeScale 0.8s ease-in-out" />
    </v-col>
    <v-col class="fadeInLeft">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis consequat
        odio, quis venenatis ligula semper mattis. Aliquam tristique ante sed elit
        posuere, et pretium urna interdum. Duis et nisi erat. Phasellus tincidunt quis
        ligula nec lobortis. Aenean bibendum tristique dui, eget dapibus eros ullamcorper
        ut. Nullam at pharetra libero. Integer ac augue velit. Pellentesque placerat eu
        massa sed malesuada. Aliquam a porttitor lectus, sit amet faucibus lorem. Sed ac
        posuere tellus. Etiam non malesuada ligula.
      </p>
      <h2 class="mt-4">Tech</h2>
      <div class="d-flex justify-md-start justify-sm-center flex-wrap">
        <div class="icon">
          <v-tooltip text="Photoshop" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/photoshop.svg" alt="photoshop icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="Illustrator" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/illustrator.svg" alt="illustrator icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="After Effects" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/after-effects.svg" alt="after effects icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="Figma" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/figma.svg" alt="figma icon" class="pr-4" style="height: 32px" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="CSS" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/css.svg" alt="css icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="HTML" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/html.svg" alt="HTML icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="Git" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/git.svg" alt="git icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
        <div class="icon">
          <v-tooltip text="Vue" location="bottom">
            <template v-slot:activator="{ props }">
              <img v-bind="props" src="@/assets/icons/vue.svg" alt="Vue icon" class="pr-4" />
            </template>
          </v-tooltip>
        </div>
      </div>
    </v-col>
  </div>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  background-color: var(--orange);
  margin: 1.5rem 1rem;
  padding: 1rem;
  border-radius: 1rem;
  height: fit-content;
  min-height: 80vh;
}

.icon img {
  transition: filter 0.3s ease-in-out;
}

.icon:hover img {
  filter: invert(15%) sepia(100%) saturate(1641%) hue-rotate(33deg) brightness(96%) contrast(105%);
}

.myPhoto {
  max-width: 35rem;
  max-height: 30rem;
  height: auto;
  width: auto;
}

.fadeInLeft {
  animation: fadeInLeft 2s ease-in-out;
}

.late-fade-in {
  opacity: 0;
  animation: fadeScale 2s ease-in-out forwards;
  animation-delay: 1s;
}

@media (min-width: 600px) {
  .about {
    padding: 5rem;
    margin: 1.5rem 5rem;
  }

  .myPhoto {
    max-width: 35rem;
  }
}

@media (max-width: 1300px) {
  .myPhoto {
    max-width: 35rem;
    max-height: 35rem;
    width: -webkit-fill-available;
  }
}

@media (min-width: 1300px) {
  .myPhoto {
    max-width: 40rem;
    max-height: -webkit-fill-available;
  }

  .about {
    height: 80vh;
  }
}
</style>
