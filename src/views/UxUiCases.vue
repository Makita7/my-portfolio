<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { caseStudyContent } from "@/data/caseStudyContent";

const route = useRoute();

const caseStudyData = computed(() => {
  const slug = route.params.slug as string;

  if (slug && slug in caseStudyContent) {
    return caseStudyContent[slug as keyof typeof caseStudyContent];
  }

  return null;
});
</script>

<template>
  <div class="d-flex">
    <v-col cols="2" class="d-flex flex-column sticky-sidebar links">
      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#overview',
        }"
      >
        Overview
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#problem',
        }"
      >
        Problem
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#goals-constraints',
        }"
      >
        Goal Constraints
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#research-insight',
        }"
      >
        Research & Insight
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#strategy',
        }"
      >
        Strategy
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#ux-framework',
        }"
      >
        UX Framework
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#design-principles',
        }"
      >
        Design Principles
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#reflection',
        }"
      >
        Reflection
      </RouterLink>
    </v-col>
    <v-col>
      {{ caseStudyData }}
      <section id="overview" style="height: 100vh; background-color: aquamarine">
        overview
      </section>

      <section id="problem" style="height: 100vh">problem</section>

      <section id="goals-constraints" style="height: 100vh">goals-constraints</section>

      <section id="research-insight" style="height: 100vh">research</section>

      <section id="strategy" style="height: 100vh">strategy</section>

      <section id="ux-framework" style="height: 100vh">ux-framework</section>

      <section id="design-principles" style="height: 100vh">design-principles</section>

      <section id="reflection" style="height: 100vh">reflection</section>
    </v-col>
  </div>
</template>

<style scoped>
.sticky-sidebar {
  position: sticky;
  top: 3rem;
  left: 2rem;
  height: fit-content;
}

.links a {
  text-decoration: none;
  font-family: inter;
  font-size: 1rem;
  color: var(--blackish);
  margin: 0.2rem 0;
}

.links a:hover {
  color: #6e1520;
}

.active a {
  color: #b80016 !important;
  font-weight: bold;
}
</style>
