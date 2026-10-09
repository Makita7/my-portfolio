<script setup lang="ts">
import figma from '@/assets/icons/figma.svg'
import photoshop from '@/assets/icons/photoshop.svg'
import procreate from '@/assets/icons/procreate.svg'
import illustrator from '@/assets/icons/illustrator.svg'
import afterEffects from '@/assets/icons/after-effects.svg'
import css from '@/assets/icons/css.svg'
import html from '@/assets/icons/html.svg'
import git from '@/assets/icons/git.svg'
import vue from '@/assets/icons/vue.svg'

const tools = [
  { name: 'Figma', icon: figma },
  { name: 'Photoshop', icon: photoshop },
  { name: 'Procreate', icon: procreate },
  { name: 'Illustrator', icon: illustrator },
  { name: 'After Effects', icon: afterEffects },
  { name: 'CSS', icon: css },
  { name: 'HTML', icon: html },
  { name: 'Git', icon: git },
  { name: 'Vue', icon: vue },
]
</script>

<template>
  <section class="about d-flex flex-column flex-lg-row align-center justify-center fade">
    <v-col cols="12" lg="auto" class="d-flex justify-center">
      <img src="@/assets/my-photo.png" alt="Sofi, UX/UI designer" class="myPhoto" />
    </v-col>

    <v-col cols="12" lg="auto" class="content fadeInLeft">
      <h2>About Me</h2>
      <p>
        UX/UI Designer with 5+ years of experience designing user-centered digital products for web and mobile. I work
        end-to-end: research, problem definition, wireframing, prototyping and UI delivery, collaborating closely with
        PMs and developers.
      </p>
      <p class="mt-3">
        My strong visual foundations and frontend background help me design scalable, feasible solutions aligned with
        user needs and business goals.
      </p>

      <ul class="meta mt-4">
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <span>Mendoza, Argentina (UTC-3) · Available for US Eastern hours (ET)</span>
        </li>
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
          </svg>
          <span>Bilingual: English and Spanish</span>
        </li>
      </ul>

      <h2 class="mt-8">Tools &amp; Tech</h2>
      <ul class="tools d-flex justify-md-start justify-center flex-wrap">
        <li v-for="tool in tools" :key="tool.name" class="tool">
          <img :src="tool.icon" :alt="`${tool.name} icon`" />
          <span>{{ tool.name }}</span>
        </li>
      </ul>
    </v-col>
  </section>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  background-color: var(--paleBlue);
  margin: 1.5rem 1rem;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  gap: 1rem;
}

.content {
  max-width: 40rem;
}

/* Headings: stronger weight + clear spacing from the content below */
h2 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

/* Location / languages row */
.meta {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}

/* Tools grid: icon with a visible label underneath */
.tools {
  list-style: none;
  padding: 0;
  gap: 1rem 1.25rem;
}

.tool {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  width: 4.5rem;

  img {
    height: 32px;
    width: auto;
    transition: filter 0.3s ease-in-out;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.2;
    text-align: center;
  }

  &:hover img {
    filter: invert(15%) sepia(100%) saturate(1641%) hue-rotate(33deg) brightness(96%) contrast(105%);
  }
}

.myPhoto {
  width: 100%;
  max-width: 30rem;
  height: auto;
  animation: fadeScale 0.8s ease-in-out;
}

.fadeInLeft {
  animation: fadeInLeft 2s ease-in-out;
}

/* Mobile only: center all text */
@media (max-width: 599.98px) {
  .content {
    text-align: center;
  }

  .meta {
    text-align: left;
  }

  .tools {
    justify-content: center;
  }
}

@media (min-width: 600px) {
  .about {
    padding: 3rem;
    margin: 1.5rem 5rem;
  }
}

@media (min-width: 1300px) {
  .about {
    gap: 4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .myPhoto,
  .fadeInLeft {
    animation: none;
  }
}
</style>
