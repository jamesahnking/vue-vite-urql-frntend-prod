<script lang="ts">

import {
    createClient,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    provideClient,
    useQuery,
} from "@urql/vue";

import { defineComponent } from "vue";

export default defineComponent({
    name: "HeroModule",
    // props: {},
    data() {
        return {
            hero: {},
            imagetst: {},
            strapiUrl: import.meta.env.VITE_STRAPI_URL,
        };
    },

    mounted() {
        console.log("HeroMod mounted")
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
            hero {
            data {
            id
            attributes {
                title
                subtitle
                buttontext
                herotext
                herologo {
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
});

</script>

    <template>
        <div class="bg-yellow-100 text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8" >
          
            <img :src="data?.hero.data.attributes.herologo.data?.attributes?.url" alt="Logo" height="250" />
       
            <p class="text-900 font-semibold line-height-3 text-center">{{ data?.hero.data.attributes.title }}
                <br/>
                <span class="text-600 font-normal line-height-1 mt-2 text-sm text-center">{{ data?.hero.data.attributes.subtitle }}</span>
            </p>

            <div class="flex justify-content-center">
                <h2 class="px-2 md:px-6 text-900 text-base font-medium line-height-3 mb-4 max-w-28rem" style="max-width: 1350px">{{ data?.hero.data.attributes.herotext }}</h2>
            </div>
        
        </div>
    </template>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
