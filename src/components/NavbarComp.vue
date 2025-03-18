<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
  <nav class="navCont d-flex justify-space-between mb-4">
    <img src="@/assets/makita-logo.png" alt="portfolio logo" class="logo" />
    <div class="d-flex">
      <TransitionGroup name="fade" mode="in-out">
        <RouterLink to="/" class="link pl-4 home" activeClass="active" id="Home">Home</RouterLink>
        <RouterLink to="/about" class="link pl-4 about" activeClass="active" id="About">About</RouterLink>
        <RouterLink to="/about" class="link pl-4 project" activeClass="active" id="About">Projects</RouterLink>
        <RouterLink to="/about" class="link pl-4 cv" activeClass="active" id="About">CV</RouterLink>
      </TransitionGroup>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navCont {
  padding: 2rem 5rem 0 5rem;
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
  color: #0069a2;
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
</style>