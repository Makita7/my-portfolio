<script lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="d-flex">
    <v-col cols="2" class="d-flex flex-column sticky-sidebar">
      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#overview',
      }">
        Overview
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#problem',
      }">
        Problem
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#visual-system',
      }">
        Goal Constraints
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#research-insight',
      }">
        Research & Insight
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#strategy',
      }">
        Strategy
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#ux-framework',
      }">
        UX Framework
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#design-principles',
      }">
        Design Principles
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#reflection',
      }">
        Reflection
      </RouterLink>
    </v-col>
    <v-col>
      <section id="overview" style="height: 100vh; background-color: aquamarine">
        overview
      </section>

      <section id="problem" style="height: 100vh">problem</section>

      <section id="goals-constraints" style="height: 100vh">goals-constraints</section>

      <section id="research" style="height: 100vh">research</section>

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
  top: 20px;
  height: fit-content;
}
</style>
