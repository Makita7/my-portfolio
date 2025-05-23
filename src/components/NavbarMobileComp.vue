<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu, mdiWindowClose, mdiHomeOutline, mdiAccountHeartOutline, mdiGridLarge, mdiNoteOutline } from '@mdi/js';

const drawer = ref(false);
const menuIconPath = mdiMenu;
const iconCross = mdiWindowClose;
const iconHome = mdiHomeOutline;
const iconAbout = mdiAccountHeartOutline;
const iconProjects = mdiGridLarge;
const iconCV = mdiNoteOutline;

</script>

<template>
  <v-layout class="fade">
    <v-navigation-drawer v-model="drawer" temporary location="right">

      <v-col style="display: grid;">
        <TransitionGroup name="fade" mode="in-out">
          <RouterLink to="/" class="link pl-4 mt-4 pt-2 pb-2 mb-1 home d-flex align-center" activeClass="active"
            id="Home">
            <svg-icon type="mdi" width="32" height="32" :path="iconHome" class="mr-2" />
            Home
          </RouterLink>
          <RouterLink to="/about" class="link pl-4 pt-2 pb-2 mb-1 about d-flex align-center" activeClass="active"
            id="About">
            <svg-icon type="mdi" width="32" height="32" :path="iconAbout" class="mr-2" />
            About
          </RouterLink>
          <RouterLink to="/projects" class="link pl-4 pt-2 pb-2 mb-1 project d-flex align-center" activeClass="active"
            id="About">
            <svg-icon type="mdi" width="32" height="32" :path="iconProjects" class="mr-2" />
            Projects
          </RouterLink>
          <RouterLink to="/cv" class="link pl-4 pt-2 pb-2 mb-1 cv d-flex align-center" activeClass="active" id="About">
            <svg-icon type="mdi" width="32" height="32" :path="iconCV" class="mr-2" />
            CV
          </RouterLink>
        </TransitionGroup>
      </v-col>

    </v-navigation-drawer>
    <v-main>
      <nav class="navCont d-flex justify-space-between align-center">
        <img src="@/assets/makita-logo.png" alt="portfolio logo" class="logo" />
        <v-btn @click.stop="drawer = !drawer" icon="mdi-menu" variant="text">
          <svg-icon type="mdi" width="32" height="32" :path="menuIconPath" @click.stop="drawer = !drawer" />
        </v-btn>
      </nav>
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped>
.navCont {
  padding: 1rem 1rem 0 1rem;
}

.logo {
  height: 1.5rem;
}

.link {
  text-decoration: none;
  font-size: 24px;
  color: var(--blackish);
  border-radius: 8px;
}

.active {
  text-decoration: underline;
  font-weight: bold;
}

.active.home {
  background-color: var(--lightRed);
}

.active.about {
  background-color: var(--lightGreen);
}

.active.project {
  background-color: var(--orange);
}

.active.cv {
  background-color: var(--lightBlue);
}


@media (min-width: 600px) {
  .navCont {
    padding: 2rem 5rem 0 5rem;
  }
}

@media (min-width: 960px) {}
</style>
