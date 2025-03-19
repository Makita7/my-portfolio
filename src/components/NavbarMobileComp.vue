<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';

const drawer = ref(false);
const path = mdiMenu;

</script>

<template>
  <v-layout class="fade">
    <v-navigation-drawer v-model="drawer" temporary location="right">

      <v-col style="display: grid;">
        <TransitionGroup name="fade" mode="in-out">
          <RouterLink to="/" class="link pl-4 mt-2 home" activeClass="active" id="Home">Home</RouterLink>
          <RouterLink to="/about" class="link pl-4 mt-2 about" activeClass="active" id="About">About</RouterLink>
          <RouterLink to="/projects" class="link pl-4 mt-2 project" activeClass="active" id="About">Projects
          </RouterLink>
          <RouterLink to="/cv" class="link pl-4 mt-2 cv" activeClass="active" id="About">CV</RouterLink>
        </TransitionGroup>
      </v-col>

    </v-navigation-drawer>
    <v-main>
      <nav class="navCont d-flex justify-space-between align-center">
        <img src="@/assets/makita-logo.png" alt="portfolio logo" class="logo" />
        <v-btn @click.stop="drawer = !drawer" icon="mdi-menu" variant="text">
          <svg-icon type="mdi" :path="path" @click.stop="drawer = !drawer" />
        </v-btn>
      </nav>
    </v-main>
  </v-layout>
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
  font-size: 24px;
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

.active {
  text-decoration: underline;
}

@media (min-width: 600px) {
  .navCont {
    padding: 2rem 5rem 0 5rem;
  }
}

@media (min-width: 960px) {}
</style>
