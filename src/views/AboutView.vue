<template>
  <div class="about d-md-flex align-center fade">
    <v-col class="d-flex justify-center">
      <div>
        <img src="@/assets/doodle1.png" alt="doodle image" class="doodle1 late-fade-in">
        <div class="namePill late-fade-in">Hi, I'm Sofi</div>
        <img src="@/assets/mockImage.png" alt="my profile picture" class="myPhoto"
          style="animation: fadeScale 0.8s ease-in-out;" />
        <img src="@/assets/doodle2.png" alt="doodle image" class="doodle2"
          style="animation: fadeScale 1.3s ease-in-out;">
      </div>
    </v-col>
    <v-col class="fadeInLeft">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis consequat odio,
        quis venenatis ligula
        semper mattis. Aliquam tristique ante sed elit posuere, et pretium urna interdum. Duis et nisi erat. Phasellus
        tincidunt quis ligula nec lobortis. Aenean bibendum tristique dui, eget dapibus eros ullamcorper ut. Nullam at
        pharetra libero. Integer ac augue velit. Pellentesque placerat eu massa sed malesuada. Aliquam a porttitor
        lectus, sit amet faucibus lorem. Sed ac posuere tellus. Etiam non malesuada ligula.</p>
      <h2 class="mt-4">Tech</h2>
      <div class="d-flex justify-sm-center flex-wrap">
        <div class="icon">
          <img src="@/assets/icons/photoshop.svg" alt="photoshop icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/illustrator.svg" alt="illustrator icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/after-effects.svg" alt="after effects icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/figma.svg" alt="figma icon" class="pr-4" style="height: 32px;" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/css.svg" alt="css icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/html.svg" alt="html icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/git.svg" alt="git icon" class="pr-4" />
        </div>
        <div class="icon">
          <img src="@/assets/icons/vue.svg" alt="vue icon" class="pr-4" />
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
}

.icon img {
  transition: filter 0.3s ease-in-out;
}

.icon:hover img {
  filter: invert(15%) sepia(100%) saturate(1641%) hue-rotate(33deg) brightness(96%) contrast(105%);
}

.myPhoto {
  width: 100%;
  max-width: 30rem;
}

.namePill {
  position: absolute;
  background-color: white;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Nunito";
  top: 0.5rem;
  left: 3rem;
}

.doodle1 {
  height: 5rem;
  position: absolute;
  left: 3rem;
  bottom: 50rem;
}

.doodle2 {
  height: 6rem;
  position: absolute;
  left: 19rem;
  bottom: 31rem;
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
    max-width: 30rem;
  }

  .namePill {
    padding: 0.2rem 1rem;
    font-size: 2rem;
    top: 8rem;
    left: 19rem;
  }

  .doodle1 {
    height: 10rem;
    left: 17rem;
    bottom: 30rem;
  }

  .doodle2 {
    height: 12rem;
    left: 40rem;
    bottom: 3rem;
  }
}

@media (min-width: 960px) {
  .about {
    height: 80vh;
  }

  .myPhoto {
    max-width: 30rem;
  }

  .namePill {
    position: absolute;
    background-color: white;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Nunito';
    top: 3rem;
    left: 10rem;
  }

  .doodle1 {
    height: 7rem;
    position: absolute;
    left: 11rem;
    bottom: 27rem;
  }

  .doodle2 {
    height: 10rem;
    position: absolute;
    left: 32rem;
    bottom: 0rem;
  }
}

@media (min-width: 1600px) {
  .about {
    height: 80vh;
  }

  .myPhoto {
    max-width: 30rem;
  }

  .namePill {
    position: absolute;
    background-color: white;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Nunito';
    top: 8rem;
    left: 16rem;
  }

  .doodle1 {
    height: 8rem;
    position: absolute;
    left: 16rem;
    bottom: 32rem;
  }

  .doodle2 {
    height: 10rem;
    position: absolute;
    left: 38rem;
    bottom: 6rem;
  }
}
</style>
