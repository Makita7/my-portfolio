<template>
  <div class="about d-flex align-center">
    <v-col>
      <img src="@/assets/doodle1.png" alt="doodle image" class="doodle1">
      <div class="namePill">Hi, I'm Sofi</div>
      <img src="@/assets/mockImage.png" alt="my profile picture" class="myPhoto" />
      <img src="@/assets/doodle2.png" alt="doodle image" class="doodle2">
    </v-col>
    <v-col>
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis consequat odio, quis venenatis ligula
        semper mattis. Aliquam tristique ante sed elit posuere, et pretium urna interdum. Duis et nisi erat. Phasellus
        tincidunt quis ligula nec lobortis. Aenean bibendum tristique dui, eget dapibus eros ullamcorper ut. Nullam at
        pharetra libero. Integer ac augue velit. Pellentesque placerat eu massa sed malesuada. Aliquam a porttitor
        lectus, sit amet faucibus lorem. Sed ac posuere tellus. Etiam non malesuada ligula.</p>
      <h2 class="mt-4">Tech</h2>
      <div class="d-flex">
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
  padding: 5rem;
  border-radius: 1rem;
  height: 80vh;
}

.icon img {
  transition: filter 0.3s ease-in-out;
}

.icon:hover img {
  filter: invert(15%) sepia(100%) saturate(1641%) hue-rotate(33deg) brightness(96%) contrast(105%);
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
  left: 8rem;
}

.doodle1 {
  height: 10rem;
  position: absolute;
  left: 5rem;
  bottom: 30rem;
}

.doodle2 {
  height: 12rem;
  position: absolute;
  left: 28rem;
  bottom: 3rem;
}
</style>
