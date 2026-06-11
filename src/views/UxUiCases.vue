<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { caseStudyContent } from '@/data/caseStudyContent'
import type { CaseStudy } from '@/data/caseStudyContent'
import { useDisplay } from 'vuetify'

const route = useRoute()
const display = useDisplay()
const links = computed(() => caseStudyData.value?.links)

const caseStudyData = computed<CaseStudy | null>(() => {
  const slug = route.params.slug as string

  if (slug && slug in caseStudyContent) {
    return caseStudyContent[slug as keyof typeof caseStudyContent] as CaseStudy
  }

  return null
})

const getTagColor = (tag: string) => {
  switch (tag) {
    case "UX/UI Design":
      return "bg-[var(--paleOrange)] font-semibold"

    case "Mobile":
      return "bg-[var(--paleGreen)] font-semibold"

    case "Web App":
      return "bg-[var(--paleBlue)] font-semibold"

    case "IOs":
      return "bg-[var(--blackish)] text-white font-semibold"

    case "Accessibility":
      return "bg-[var(--orange)] font-semibold"

    case "Design System":
      return "bg-[var(--brightGreenDark)] text-[var(--greenDark)] font-semibold"

    case "Illustration System":
      return "bg-[var(--paleLightRed)] font-semibold"

    case "Brand Design":
      return "bg-[var(--paleBlue)] font-semibold"

    default:
      return "bg-gray-300 font-semibold"
  }
}

</script>

<template>
  <div v-if="caseStudyData && links" class="d-flex">
    <v-col
      v-if="display.smAndUp"
      cols="3"
      xs="0"
      sm="3"
      md="2"
      class="d-flex flex-column sticky-sidebar links colNav d-none"
    >
      <p class="navTitles mb-4 mt-4" :style="`color: ${caseStudyData?.color};`">
        {{ caseStudyData?.title }}
      </p>
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
          hash: '#goals',
        }"
      >
        Goal
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#UX-decisions',
        }"
      >
        UX Decisions
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#design',
        }"
      >
        Brand Design
      </RouterLink>

      <RouterLink
        :to="{
          name: 'UxUiCases',
          params: { slug: $route.params.slug },
          hash: '#potential-expansion',
        }"
        v-if="caseStudyData?.sections['potential-expansion']?.length"
      >
        Potential Expansion
      </RouterLink>
    </v-col>
    <v-col class="customPadding">
      <section id="overview">
        <img
          v-if="caseStudyData?.sections.overview.imgHeader"
          :src="caseStudyData?.sections.overview.imgHeader"
          alt="Project Hero"
        />
        <h1 :style="`color:${caseStudyData?.color};`" class="sticky-title">
          {{ caseStudyData?.title }}
        </h1>
        <p class="pb-2" style="width: 100%">
          <b>{{ caseStudyData?.sections.overview.subtitle }}</b>
        </p>
        <div class="tags d-flex mb-8 flex-wrap">
          <p v-for="(tag, index) in caseStudyData?.sections.overview.tags" :key="index" class="py-1 px-4 mr-4 mb-2 rounded-xl tag whitespace-nowrap capitalize" :class="getTagColor(tag)">{{ tag }}</p>
        </div>
        <div class="mt-4">
          <p class="mr-4 mb-2"><b>Prototype:</b></p>

          <div
            v-if="caseStudyData?.links"
            v-html="caseStudyData?.links"
            class="mb-6"
          />
        </div>
        <img
          v-if="caseStudyData?.sections.overview.imgPreview"
          :src="caseStudyData?.sections.overview.imgPreview"
          alt="Project Hero"
        />

        <p class="mb-4">{{ caseStudyData?.sections.overview.text }}</p>
        <p v-if="caseStudyData?.sections.overview.text2" class="mb-4">
          {{ caseStudyData?.sections.overview.text2 }}
        </p>
        <p v-if="caseStudyData?.sections.overview.text3" class="mb-4">
          {{ caseStudyData?.sections.overview.text3 }}
        </p>
      </section>

      <section id="problem">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">The Problem:</p>
        <div v-for="(block, index) in caseStudyData?.sections.problem" :key="index">
          <p v-if="block.type === 'subtitle'" class="subtitle">{{ block.subtitle }}</p>
          <p v-else-if="block.type === 'text'" class="mb-4">
            {{ (block as any).content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ (block as any).content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ (block as any).title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in (block as any).items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in (block as any).items" :key="item?.label">
              <strong>{{ item?.label }}</strong> - {{ item?.text }}
            </li>
          </ul>

          <div v-else-if="block.type === 'img'">
            <img
              :src="(block as any).img"
              :alt="(block as any).alt"
              class="caseStudyImg"
              :class="(block as any).caption ? 'img-caption' : ''"
            />
            <p v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</p>
          </div>
        </div>
      </section>

      <section id="goals">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">Goals:</p>
        <div v-for="(block, index) in caseStudyData?.sections['goals']" :key="index">
          <p v-if="block.type === 'subtitle'" class="subtitle">{{ block.subtitle }}</p>
          <!-- TEXT -->
          <p v-else-if="block.type === 'text'" class="mb-4">
            {{ (block as any).content }}
          </p>

          <!-- RICH TEXT -->
          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>{{ (block as any).content }}</b>
          </p>

          <!-- SIMPLE LIST -->
          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ (block as any).title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="(item, i) in (block as any).items" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- DESCRIPTION LIST -->
          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in (block as any).items" :key="item.label">
              <strong>{{ item.label }}</strong> : {{ item.text }}
            </li>
          </ul>

          <!-- IMAGE -->
           <div v-else-if="block.type === 'img'">
             <img
               :src="(block as any).img"
               :alt="(block as any).alt"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
             <p v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</p>
           </div>
        </div>
      </section>

      <section id="UX-decisions">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          UX Decisions I Made Along The Way:
        </p>
        <div v-for="(block, index) in caseStudyData.sections['UX-decisions']" :key="index">
          <p v-if="block.type === 'subtitle'" class="subtitle">{{ (block as any).subtitle }}</p>
          <p v-else-if="block.type === 'text'" class="mb-4">
            {{ (block as any).content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ (block as any).content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ (block as any).title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in (block as any).items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in (block as any).items" :key="item?.label">
              <strong>{{ item?.label }}:</strong> {{ item?.text }}
            </li>
          </ul>

          <div v-else-if="block.type === 'img'">
             <img
               :src="(block as any).img"
               :alt="(block as any).alt"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
             <p v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</p>
          </div>
        </div>
      </section>

      <section id="design">
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">Brand Design:</p>
        <div v-for="(block, index) in caseStudyData?.sections.design" :key="index">
          <p v-if="block.type === 'subtitle'" class="subtitle">{{ block.subtitle }}</p>
          <p v-else-if="block.type === 'text'" class="mb-4">
            {{ (block as any).content }}
          </p>

          <p v-else-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ (block as any).content }}
            </b>
          </p>

          <div v-else-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ (block as any).title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in (block as any).items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-else-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in (block as any).items" :key="item?.label">
              <strong>{{ item?.label }}</strong> - {{ item?.text }}
            </li>
          </ul>

          <div v-else-if="block.type === 'img'">
             <img
               :src="(block as any).img"
               :alt="(block as any).alt"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
             <p v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</p>
           </div>
        </div>
      </section>

      <section
        v-if="caseStudyData?.sections['potential-expansion']?.length"
        id="potential-expansion"
      >
        <p class="sectionTitles mb-4" :style="`color: ${caseStudyData?.color};`">
          Potential Expansion:
        </p>
        <div v-for="(block, index) in caseStudyData?.sections['potential-expansion']" :key="index">
          <p v-if="block.type === 'subtitle'" class="subtitle">{{ block.subtitle }}</p>
          <p v-else-if="block.type === 'text'" class="mb-4">
            {{ (block as any).content }}
          </p>

          <p v-if="block.type === 'rich-text'" class="mb-4">
            <b>
              {{ (block as any).content }}
            </b>
          </p>

          <div v-if="block.type === 'list'">
            <p class="listTitles mb-2">{{ (block as any).title }}</p>
            <ul class="custom-list mb-4 ml-6">
              <li v-for="item in (block as any).items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <ul v-if="block.type === 'description-list'" class="desc-list mb-4 ml-6">
            <li v-for="item in (block as any).items" :key="item?.label">
              <strong>{{ item?.label }}</strong> - {{ item?.text }}
            </li>
          </ul>

          <div v-else-if="block.type === 'img'">
             <img
               :src="(block as any).img"
               :alt="(block as any).alt"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
             <p v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</p>
          </div>
        </div>
      </section>
    </v-col>
  </div>
  <p v-else class="text-center mt-20" style="min-height: 55vh">Sorry, Case Study not found.</p>
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
  border-radius: 1rem;
}

.img-caption{
  width: 100%;
  margin-bottom: 0;
}

p {
  color: var(--blackish);
}

.italic {
  font-style: italic;
}

.listTitles {
  font-weight: bold;
}

.sectionTitles {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
}

.navTitles {
  font-family: 'Nunito', sans-serif;
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

.subtitle {
  font-size: 1.2rem;
  font-weight: 600;
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

@media (min-width: 1200px) {
  .caseStudyImg {
    display: block;
    width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
