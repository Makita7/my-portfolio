<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { caseStudyContent } from "@/data/caseStudyContent";
import type { CaseStudy } from "@/data/caseStudyContent";
import { useDisplay } from "vuetify";

const route = useRoute();
const display = useDisplay();
const links = computed(() => caseStudyData.value?.links);

const caseStudyData = computed<CaseStudy | null>(() => {
  const slug = route.params.slug as string;

  if (slug && slug in caseStudyContent) {
    return caseStudyContent[slug as keyof typeof caseStudyContent] as CaseStudy;
  }

  return null;
});
</script>

<template>
  <div v-if="caseStudyData && links" class="d-flex">
    <v-col v-if="display.smAndUp" cols="3" xs="0" sm="3" md="2"
      class="d-flex flex-column sticky-sidebar links colNav d-none">
      <p class="navTitles mb-4 mt-4" :style="`color: ${caseStudyData?.color};`">
        {{ caseStudyData?.title }}
      </p>
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
        hash: '#goals-constraints',
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
        hash: '#potential-expansion',
      }">
        Potential Expansion
      </RouterLink>

      <RouterLink :to="{
        name: 'UxUiCases',
        params: { slug: $route.params.slug },
        hash: '#reflection',
      }">
        Reflection
      </RouterLink>
    </v-col>
    <v-col class="customPadding">
      <section id="overview">
        <h1 :style="`color:${caseStudyData?.color};`" class="sticky-title">
          {{ caseStudyData?.title }}
        </h1>
        <p class="pb-2" style="width: 100%">
          <b>{{ caseStudyData?.sections.overview.subtitle }}</b>
        </p>
        <p><b>Scope: </b>{{ caseStudyData?.sections.overview.scope }}</p>
        <div class="d-flex align-center mt-4">
          <p class="mr-4"><b>Link to Prototype:</b></p>
          <p v-if="'web' in (caseStudyData?.links || {})" class="link-sub">Web</p>
          <a v-if="'web' in (caseStudyData?.links || {})" :href="(caseStudyData?.links as any).web" target="_blank"
            class="d-flex align-center mr-2">
            <img src="@/assets/icons/figma.svg" alt="figma icon" class="ml-2 mr-2 figmaIconImg" />
          </a>
          <p v-if="'tablet' in (caseStudyData?.links || {})" class="link-sub">Tablet</p>
          <a v-if="'tablet' in (caseStudyData?.links || {})" :href="(caseStudyData?.links as any).tablet"
            target="_blank" class="d-flex align-center mr-2">
            <img src="@/assets/icons/figma.svg" alt="figma icon" class="ml-2 mr-2 figmaIconImg" />
          </a>
          <p v-if="links.mobile" class="link-sub">Mobile</p>
          <a v-if="links.mobile" :href="links.mobile" target="_blank" class="d-flex align-center mr-2"
            style="width: auto">
            <img src="@/assets/icons/figma.svg" alt="figma icon" class="ml-2 mr-2 figmaIconImg" />
          </a>
        </div>
        <img v-if="caseStudyData?.sections.overview.img" :src="caseStudyData?.sections.overview.img"
          alt="Project Hero" />

        <p>{{ caseStudyData?.sections.overview.text }}</p>
        <p v-if="caseStudyData?.sections.overview.text2">
          {{ caseStudyData?.sections.overview.text2 }}
        </p>
        <p v-if="caseStudyData?.sections.overview.text3">
          {{ caseStudyData?.sections.overview.text3 }}
        </p>
      </section>

      <section id="problem">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          The Problem
        </p>
        <div v-for="(block, index) in caseStudyData?.sections.problem" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="goals-constraints">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Goals & Constraints
        </p>
        <div v-for="(block, index) in caseStudyData?.sections['goals-constraints']" :key="index">
          <!-- TEXT -->
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <!-- RICH TEXT -->
          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>{{ block.content }}</b>
          </p>

          <!-- SIMPLE LIST -->
          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="(item, i) in block.items" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- DESCRIPTION LIST -->
          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item.label">
              <strong>{{ item.label }}</strong> — {{ item.text }}
            </li>
          </ul>

          <!-- IMAGE -->
          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="research-insight">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Research & Insight
        </p>
        <div v-for="(block, index) in caseStudyData.sections['research-insight']" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="strategy">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Strategy
        </p>
        <div v-for="(block, index) in caseStudyData?.sections.strategy" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="ux-framework">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Ux Framework
        </p>
        <div v-for="(block, index) in caseStudyData?.sections['ux-framework']" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="design-principles">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Design Principles
        </p>
        <div v-for="(block, index) in caseStudyData?.sections['design-principles']" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="potential-expansion">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Potential Expension
        </p>
        <div v-for="(block, index) in caseStudyData?.sections['potential-expansion']" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>

      <section id="reflection">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Reflection
        </p>
        <div v-for="(block, index) in caseStudyData.sections.reflection" :key="index">
          <p v-if="block.type === 'text'" class="mb-4">
            {{ block.content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ block.content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ block.title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in block.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in block.items" :key="item?.label">
              <strong>{{ item?.label }}</strong> — {{ item?.text }}
            </li>
          </ul>

          <img v-else-if="block.type === 'img'" :src="block.img" alt="Project Problem" />
        </div>
      </section>
    </v-col>
  </div>
  <p v-else>Case Study not fund.</p>
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
  font-weight: bold;
}

img {
  width: 100%;
  margin: 2rem 0;
}

p {
  color: var(--blackish);
}

.listTitles {
  font-weight: bold;
}

.sectionTitles {
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
}

.navTitles {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
}

section {
  margin-bottom: 4rem;
}

.link-sub {
  font-weight: 400;
}

.figmaIconImg {
  height: 32px;
  margin: 0;
}

@media (max-width: 800px) {
  .d-none {
    display: none !important;
  }

  .customPadding {
    margin: 0;
  }
}

@media (min-width: 801px) {
  .d-none {
    display: flex !important;
  }

  .customPadding {
    margin: 0 15% 0 2%;
  }
}
</style>
