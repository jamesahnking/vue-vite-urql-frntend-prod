<script lang="ts">

import { defineComponent } from 'vue';
import {
    createClient,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    provideClient,
    useQuery,
    makeResult,
} from "@urql/vue";

export default defineComponent({
    name: "SiteFooter",
    // props: {},
    setup() {
        const client = createClient({
            url: "https://jakvitebackend.herokuapp.com/graphql",
            exchanges: [dedupExchange, cacheExchange, fetchExchange],
        });

        provideClient(client);

        // GraphQL Query
        const result = useQuery({
            query: `
            {
                navigation {
                    data {
                    id
                    attributes {
                        navitem01
                        navitem02
                        navitem03
                        navitem04
                        navitem05
                        navitem06   
                        linkedinlink
                        githublink
                        buttontext
                        footertext
                        jaklogowhite {
                        data {
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
`
        });

        console.log(result);
        return {
            fetching: result.fetching,
            data: result.data,
            error: result.error,
        };
    },

    data() {
        return {
            footer: {},
            strapiUrl: 'https://jakvitebackend.herokuapp.com/',
            // githublink: 'https://github.com/jamesahnking',
            // linkedInlink: 'https://www.linkedin.com/in/james-ahn-king-6176841/',
            mediumlink: 'https://medium.com/@jamesahnking'
        };
    },

    methods: {},

    components: {},
});
</script>

<template>
    <!-- bg-gray-900 -->
    <div class="bg-gray-900 px-4 md:px-6 lg:px-8">
        <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
            <div>
                <router-link to="/" class="no-underline">
                    <img v-bind:src="data?.navigation.data.attributes.jaklogowhite.data.attributes.url"
                        alt="Image" height="40" class="mr-0 lg:mr-6">

                </router-link>

                <div class="mt-2 line-height-3 text-500 text-sm">
                    {{ data?.navigation.data.attributes.footertext }}</div>
            </div>
            <div class="mt-3 sm:mt-0">

                <a :href="data?.navigation.data.attributes.githublink" target="_blank"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700 px-2">
                    <i><font-awesome-icon icon="fa-brands fa-github" size="xl" /></i>
                </a>

                <a :href="data?.navigation.data.attributes.linkedinlink" target="_blank"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700 px-2">
                    <i><font-awesome-icon icon="fa-brands fa-linkedin" size="xl" /></i>
                </a>
            </div>
        </div>
</div></template>