<script setup lang="ts">
</script>

<template>
  <main class="home d-flex justify-center">
    <img src="@/assets/flower-girl-old-Disney01.png" alt="doodle of sofi" class="me-doodle" />
  </main>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 0 1rem;
  margin: 1.5rem 1rem;
  min-height: 80vh;
}

.me-doodle {
  width: 100%;
  height: fit-content;
}

@media (min-width: 600px) {
  .home {
    position: relative;
    padding: 0 5rem;
    margin: 1.5rem 1rem;
    border-radius: 1rem;
  }

  .me-doodle {
    width: 100%;
    max-width: 40rem;
    height: auto;
  }
}

@media (min-width: 960px) {}
</style>
