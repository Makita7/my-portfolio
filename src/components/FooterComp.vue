<script setup lang="ts">
</script>

<template>
  <footer class="d-flex justify-end mt-4">
    <p class="talk mb-0">Let's Talk</p>
    <a href="https://www.behance.net/sophiamak">
      <img src="@/assets/icons/behance.svg" alt="behance link" class="pl-4" />
    </a>
    <a href="https://github.com/Makita7">
      <img src="@/assets/icons/github.svg" alt="github link" class="pl-4" />
    </a>
    <a href="https://dribbble.com/SofiMakita">
      <img src="@/assets/icons/dribble.svg" alt="dribble link" class="pl-4" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  bottom: 0;
  right: 0;
  position: absolute;
  padding: 1rem 5rem;
}

.talk {
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
}
</style>