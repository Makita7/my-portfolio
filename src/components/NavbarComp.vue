<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navCont d-flex justify-space-between mb-4">
    <RouterLink to="/" class="link pl-4 home" activeClass="active" id="Home">
      <img src="@/assets/makita-logo.png" alt="portfolio logo" class="logo" />
    </RouterLink>
    <div class="d-flex">
      <TransitionGroup name="fade" mode="in-out">
        <RouterLink to="/" class="link pl-4 home" activeClass="active" id="Home">Home</RouterLink>
        <RouterLink to="/about" class="link pl-4 about" activeClass="active" id="About"
          >About</RouterLink
        >
        <RouterLink to="/projects" class="link pl-4 project" activeClass="active" id="About"
          >Projects</RouterLink
        >
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
  padding: 2rem 1rem 0 1rem;
}

.logo {
  height: 1.5rem;
}

.link {
  text-decoration: none;
  font-size: 18px;
  color: var(--blackish);
}

.home:hover {
  color: var(--red);
  font-weight: bold;
  transition: all ease-in-out 0.2s;
}

.about:hover {
  color: var(--green);
  font-weight: bold;
  transition: all ease-in-out 0.2s;
}

.project:hover {
  color: var(--orange2);
  font-weight: bold;
  transition: all ease-in-out 0.2s;
}

.cv:hover {
  color: var(--blue);
  font-weight: bold;
  transition: all ease-in-out 0.2s;
}

// .link:hover {
//   animation: colorCycle 0.8s infinite alternate;
// }

// @keyframes colorCycle {
//   33% {
//     color: var(--red);
//   }

//   66% {
//     color: var(--green);
//   }

//   100% {
//     color: var(--orange2);
//   }
// }

.active {
  text-decoration: underline;
}

@media (min-width: 600px) {
  .navCont {
    padding: 2rem 5rem 0 5rem;
  }
}

@media (min-width: 960px) {
}
</style>
