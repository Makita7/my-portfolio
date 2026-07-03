<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { FrontContent } from '@/data/frontContent'
import type { FrontPiece } from '@/data/frontContent'
import { useDisplay } from 'vuetify'

const route = useRoute()
const display = useDisplay()
const links = computed(() => FrontContentData.value?.links)

const FrontContentData = computed<FrontPiece | null>(() => {
  const slug = route.params.slug as string

  if (slug && slug in FrontContent) {
    return FrontContent[slug as keyof typeof FrontContent] as FrontPiece
  }

  return null
})

const getTagColor = (tech: string) => {
  switch (tech) {
    case "HTML":
      return "bg-[var(--paleOrange)] font-semibold"

    case "Vue":
      return "bg-[var(--paleGreen)] font-semibold"

    case "React":
      return "bg-[var(--paleBlue)] font-semibold"

    case "Typescript":
      return "bg-[var(--blackish)] text-white font-semibold"

    case "CSS":
      return "bg-[var(--orange)] font-semibold"

    case "NextNuxt":
      return "bg-[var(--brightGreenDark)] text-[var(--greenDark)] font-semibold"

    case "TailwindCSS":
      return "bg-[var(--paleBlue)] font-semibold"

    default:
      return "bg-gray-300 font-semibold"
  }
}

</script>

<template>
  <div v-if="FrontContentData && links" class="d-flex">
    <v-col
      v-if="display.smAndUp"
      cols="3"
      xs="0"
      sm="3"
      md="2"
      class="d-flex flex-column sticky-sidebar links colNav d-none"
    >
      <p class="navTitles mb-4 mt-4" :style="`color: ${FrontContentData?.color};`">
        {{ FrontContentData?.title }}
      </p>
      <RouterLink
        :to="{
          name: 'FrontView',
          params: { slug: $route.params.slug },
          hash: '#overview',
        }"
      >
        Overview
      </RouterLink>

      <RouterLink
        :to="{
          name: 'FrontView',
          params: { slug: $route.params.slug },
          hash: '#goals',
        }"
      >
        Goal
      </RouterLink>

      <RouterLink
        :to="{
          name: 'FrontView',
          params: { slug: $route.params.slug },
          hash: '#tech',
        }"
      >
        Tech
      </RouterLink>

    </v-col>
    <v-col class="customPadding" style="max-width: 1000px;">
      <section id="overview">
        <img
          v-if="FrontContentData?.sections.overview.imgHeader"
          :src="FrontContentData?.sections.overview.imgHeader"
          alt="Project Hero"
        />
        <div class="d-flex align-center justify-between">
          <h1 :style="`color:${FrontContentData?.color};`" class="sticky-title">
            {{ FrontContentData?.title }}
          </h1>
          <a
            v-if="FrontContentData?.links"
            :href="FrontContentData?.links"
            target="_blank"
            class="mr-4 live-link"
            :style="{ '--color': FrontContentData?.color }"
          >
            Live Link
          </a>
        </div>
        <p class="pb-2" style="width: 100%">
          <b>{{ FrontContentData?.sections.overview.subtitle }}</b>
        </p>
        <div class="tags d-flex mb-8 flex-wrap">
          <p v-for="(tag, index) in FrontContentData?.sections.overview.tags" :key="index" class="py-1 px-4 mr-4 mb-2 rounded-xl tag whitespace-nowrap capitalize" :class="getTagColor(tag)">{{ tag }}</p>
        </div>
        <div class="mt-4">
          <a v-if="FrontContentData?.links" :href="FrontContentData?.links" target="_blank" class="mr-4 mb-2" ><b>Live Link</b></a>
        </div>
        <img
          v-if="FrontContentData?.sections.overview.imgPreview"
          :src="FrontContentData?.sections.overview.imgPreview"
          alt="Project Hero"
        />

        <p class="mb-4">{{ FrontContentData?.sections.overview.text }}</p>
        <p v-if="FrontContentData?.sections.overview.text2" class="mb-4">
          {{ FrontContentData?.sections.overview.text2 }}
        </p>
        <p v-if="FrontContentData?.sections.overview.text3" class="mb-4">
          {{ FrontContentData?.sections.overview.text3 }}
        </p>
      </section>

      <section id="goals">
        <p class="sectionTitles mb-4" :style="`color: ${FrontContentData?.color};`">Goals:</p>
        <div v-for="(block, index) in FrontContentData?.sections['challange']" :key="index">
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
            <ul class="  mb-4 ml-6">
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
               :alt="(block as any).caption"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
             <figcaption v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</figcaption>
           </div>
        </div>
      </section>

      <section id="tech">
        <p class="sectionTitles mb-4" :style="`color: ${FrontContentData?.color};`">Tech:</p>
        <div v-for="(block, index) in FrontContentData?.sections.tech" :key="index">
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
            <ul class="  mb-4 ml-6">
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
               :alt="(block as any).caption"
               class="caseStudyImg"
               :class="(block as any).caption ? 'img-caption' : ''"
             />
              <figcaption v-if="(block as any).caption" class="text-center italic mb-8">{{ (block as any).caption }}</figcaption>
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
  top: 4rem;
  left: 5rem;
  height: fit-content;
}

.live-link{
  border-radius: 1rem;
  color: white;
  padding: 0.2rem 1rem;
  background-color: var(--color);
  transition: all 0.4s;
}

.live-link:hover {
  background: var(--color);
  opacity: .8;
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

ul {
  list-style-type: disc;
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
    margin: 0 10% 0 10%;
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
