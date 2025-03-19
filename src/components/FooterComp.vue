<script setup lang="ts">
</script>

<template>
  <footer class="d-flex justify-end mt-4">
    <p class="talk mb-0">Let's Talk</p>
    <a href="https://www.behance.net/sophiamak" class="filter behance">
      <img src="@/assets/icons/behance.svg" alt="behance link" class="pl-4" />
    </a>
    <a href="https://github.com/Makita7" class="filter github">
      <img src="@/assets/icons/github.svg" alt="github link" class="pl-4" />
    </a>
    <a href="https://dribbble.com/SofiMakita" class="filter dribble">
      <img type="svg" src="@/assets/icons/dribble.svg" alt="dribble link" class="pl-4" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  bottom: 0;
  right: 0;
  position: sticky;
  padding: 1rem 1rem;
  background-color: var(--almostWhite);
}

.talk {
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
}

.filter img {
  transition: filter 0.3s ease-in-out;
}

.dribble:hover img {
  filter: invert(36%) sepia(76%) saturate(600%) hue-rotate(310deg);
}

.github:hover img {
  filter: invert(28%) sepia(55%) saturate(4%) hue-rotate(21deg) brightness(96%) contrast(90%);
}

.behance:hover img {
  filter: invert(22%) sepia(79%) saturate(6545%) hue-rotate(220deg) brightness(104%) contrast(103%);
}

@media (min-width: 600px) {
  footer {
    bottom: 0;
    right: 0;
    position: absolute;
    padding: 1rem 5rem;
  }
}

@media (min-width: 960px) {}
</style>
