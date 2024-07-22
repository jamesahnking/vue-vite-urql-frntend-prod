// Vue Component Template for Project
<script lang="ts">
import { defineComponent } from "vue";
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  provideClient,
  useQuery,
} from "@urql/vue";

import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

export default defineComponent({
  name: "DevSiteView",
  props: {},
  data() {
    return {
      project: {},
      imagetst: {},
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
      githubUrl: 'https://github.com/jamesahnking/vue-vite-urql-frntend-prod',
    };
  },

  setup() {
    const client = createClient({
      url: import.meta.env.VITE_STRAPI_URL_GQL,
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
    });

    provideClient(client);

    const result = useQuery({
      query: `
      {
        project(id: 5) {
            data {
            id
            attributes {
                title
                description
                category
                buttontext
                image {
                data {
                    attributes {
                    url
                    }
                }
                }
                stacktitle
                stackitemtext_01
                stackitemtext_02
                stackitemtext_03
                stackitemtext_04
                stackitemtext_05
                stackitemtext_06
                stackitemtext_07
                stackitem_ico_01
                stackitem_ico_02
                stackitem_ico_03
                stackitem_ico_04
                stackitem_ico_05
                lightBg
                lightText
                lightTextDesc
                imgStart
                descimage01
                descimage02
                descimage03
                descimage04
                descimage05
                dark
                primary
                darkText
                videoUrl
                repoUrl
                richprojectdescription
                nextprojecttext
                nextprojectpath
                image01 {
                data {
                    attributes {
                    url
                    }
                }
                }
                image02 {
                data {
                    attributes {
                    url
                    }
                }
                }
                image03 {
                data {
                    attributes {
                    url
                    }
                }
                }
                image04 {
                data {
                    attributes {
                    url
                    }
                }
                }
                image05 {
                data {
                    attributes {
                    url
                    }
                }
                }
            }
            }
        }
    }
      `,
    });

    console.log(result);
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  },
  mounted() {
    console.log("DexView component mounted");
  },

  methods: {},

  components: {
    LiteYouTubeEmbed,
  },
});
</script>

<template>
  <div class="surface-section px-4 py-6 md:px-6 lg:px-8">
    <!-- Grid 1 Header Mod-->
    <div class="grid mb-6 align-items-center">
      <!-- c1 -->
      <div class="col lg:w-6">
        <div class="text-6xl font-bold text-600">
          {{ data?.project.data.attributes.title }}
        </div>
        <div class="line-height-3 text-800 mt-3 sm:text-sm md:text-lg">
          {{ data?.project.data.attributes.description }}
        </div>
      </div>

      <!-- c2 -->
      <div class="col w-full col-12 lg:w-6 pl-0 lg:pr-5 pt-2">
        <img :src="data?.project.data.attributes.image.data.attributes.url" alt="Image"
          class="w-full border-round p-3 md: w-8" />
      </div>
    </div>

    <!-- Grid 2 Tech Stack -->
    <div class="grid">
      <!-- c1 -->
      <div class="col-12 lg:col-2">
        <div class="flex flex-column lg:flex-column lg:border-right-1 surface-border gap-3 mb-4 lg:px-5">
          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-semibold mr-3">
              {{ data?.project.data.attributes.stacktitle }}
            </span>
            <!-- <i class="pi pi-bookmark"></i> -->
          </div>

          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{ data?.project.data.attributes.stackitemtext_01 }}
            </span>
            <!-- <i class="pi pi-heart"></i> -->
          </div>

          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_02
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>

          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_03
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>

          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_04
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>

          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_05
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>
          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_06
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>
          <div class="text-900 flex flex-row align-items-center justify-content-start">
            <span class="font-normal mr-3">{{
              data?.project.data.attributes.stackitemtext_07
            }}</span>
            <!-- <i class="pi pi-comments"></i> -->
          </div>
        </div>
      </div>

      <!-- c2 Main Content Area -->

      <div class="col-12 lg:col-10 lg:px-5">
        <div class="flex flex-wrap align-items-center justify-content-between mb-5 gap-5">

          <!-- Github Repo -->
          <div class="col-12">
            <a :href="githubUrl" target="_blank">
              <div class="p-3 border-1 surface-border border-round surface-card">

                <div class="text-900 mb-2">
                  <i class="pi pi-github mr-2"></i>
                  <span class="font-medium">Github</span>
                </div>
                <div class="text-700">
                  Checkout the {{ data?.project.data.attributes.title }} project
                  repository
                </div>

              </div>
            </a>
          </div>

          <!-- #1 Image -->
          <div class="text-center mb-2">
            <img :src="data?.project.data.attributes.image01.data?.attributes.url" alt="Image"
              class="w-full border-round p-0" />
            <span class="block text-600 line-height-3">
              {{ data?.project.data.attributes.descimage01 }}</span>
          </div>

          <div class="line-height-3 text-lg text-left text-900 mb-5">
            <div v-html="data?.project.data.attributes.richprojectdescription"></div>
          </div>

          <!-- #2 Image -->
          <div class="text-center mb-2">
            <img :src="data?.project.data.attributes.image02.data?.attributes.url" alt="Image"
              class="w-full border-round p-0" />
            <span class="block text-600 line-height-3">
              {{ data?.project.data.attributes.descimage02 }}</span>
          </div>


          <!-- #3 Image -->

          <div class="text-center mb-2">
            <img :src="data?.project.data.attributes.image03.data?.attributes.url" alt="Image"
              class="w-full border-round p-0" />
            <span class="block text-600 line-height-3">
              {{ data?.project.data.attributes.descimage03 }}</span>
          </div>

          <!-- #4 Image -->

          <div class="text-center mb-2">
            <img :src="data?.project.data.attributes.image04.data?.attributes.url" alt="Image"
              class="w-full border-round p-0" />
            <span class="block text-600 line-height-3">
              {{ data?.project.data.attributes.descimage04 }}
            </span>

          </div>

          <!-- #5 Image -->

          <div class="text-center mb-2">
            <img :src="data?.project.data.attributes.image05.data?.attributes.url" alt="Image"
              class="w-full border-round p-0" />
            <span class="block text-600 line-height-3">
              {{ data?.project.data.attributes.descimage05 }}
            </span>
          </div>

        </div>

        <!-- Youtube Embed -->

        <div v-if="data?.project.data.attributes.videoUrl" class="loading-state">
          Loading...
        </div>
        <div v-else class="surface-section px-0 py-0">
          <!-- rest of your template -->
          <!-- Youtube Embed -->
          <!-- <LiteYouTubeEmbed
            :id="data?.project.data.attributes.videoUrl"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          /> -->
        </div>

        <div class="flex flex-wrap justify-content-between align-items-center gap-3 bg-white text-700 p-3 border-round">
          <span class="font-bold text-xl"><i class="pi pi-bolt mr-2"></i>{{ data?.project.data.attributes.title }}</span>

          <!-- Next Project Text/Button -->

          <div class="flex align-items-center cursor-pointer">
            <router-link to="/NftMarketPlace" class="no-underline">
              <span class="font-normal mr-3">
                {{ data?.project.data.attributes.nextprojecttext }}
              </span>

              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>


        </div>
      </div>

      <!-- Youtube Embed -->
    </div>
  </div>
</template>

<style scoped>
a:link {
  text-decoration: none;
}
</style>