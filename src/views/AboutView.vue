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

// Vue Lite Player
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

export default defineComponent({
  name: "AboutView",
  props: {},
  data() {
    return {
      project: {},
      imagetst: {},
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
    };
  },
// https://jakvitebackend.herokuapp.com/
  setup() {
    const client = createClient({
      url: import.meta.env.VITE_STRAPI_URL_GQL,
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
    });
    provideClient(client);

    const result = useQuery({
      query: `
                {
                    about {
                    data {
                    id
                    attributes {
                    abouttext
                    descimage01
                    image01 {
                    data{
                        id
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
    console.log("AboutView component mounted");
  },

  methods: {},

  components: {},
});
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-700">
    <div class="flex flex-wrap">
      <!-- COL 1 -->
      <div class="w-full lg:w-6 pr-0 lg:pr-5">
        
        <!-- Image  -->
        <img
          :src="data?.about.data.attributes.image01.data?.attributes?.url"
          alt="J Image"
          class="w-full border-round md: w-10"
        />
        <!-- Image Description  -->
        <div class="text-center text-sm font-medium mt-3">
            {{ data?.about.data?.attributes?.descimage01 }}
        </div>
      </div>

      <!-- COL 2 -->
      <div class="w-full lg:w-6 pl-0 lg:pl-5 pt-5 text-left">

        <div class="line-height-3 text-600 mb-5">
          <div v-html="data?.about.data.attributes.abouttext"></div>
        </div>
      </div>
    </div>
  </div>
</template>
