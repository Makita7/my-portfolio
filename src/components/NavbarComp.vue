<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navCont d-flex justify-space-between mb-4 sticky top-0 z-50">
    <RouterLink to="/" class="link pl-4 home" activeClass="active" id="Home">
      <img src="@/assets/makita-logo.png" alt="portfolio logo" class="logo" />
    </RouterLink>
    <div class="d-flex">
      <TransitionGroup name="fade" mode="in-out">
        <RouterLink to="/" class="link pl-4 home" activeClass="active" id="Home">Home</RouterLink>
        <RouterLink to="/about" class="link pl-4 about" activeClass="active" id="About"
          >About</RouterLink
        >
        <!-- <RouterLink to="/projects" class="link pl-4 project" activeClass="active" id="About"
          >Projects</RouterLink
        > -->
        <RouterLink to="/" class="link pl-4 cv" custom>
          <a
            href="https://drive.google.com/file/d/18ChlYEHitT3oIWGT1KNfRlm-JTysF8II/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </RouterLink>
      </TransitionGroup>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navCont {
  padding: 2rem 1rem 1rem 1rem;
  position: sticky;
  z-index: 50;
  background-color: var(--almostWhite);
}

.logo {
  height: 1.5rem;
}

.link {
  text-decoration: none;
  font-size: 18px;
  color: var(--blackish);
  transition: all 0.3s ease-in-out;
}

.home, .about, .project, .cv{
  transition: all 0.3s ease-in-out;
}

.home:hover {
  color: var(--red);
  font-weight: bold;
}

.about:hover {
  color: var(--green);
  font-weight: bold;
}

.project:hover {
  color: var(--orange2);
  font-weight: bold;
}

.cv:hover {
  color: var(--blue);
  font-weight: bold;
}

.active {
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}

@media (min-width: 600px) {
  .navCont {
    padding: 2rem 5rem 1rem 5rem;
  }
}

@media (min-width: 960px) {
}
</style>
