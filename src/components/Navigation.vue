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
    makeResult,
} from "@urql/vue";

export default defineComponent({
    name: "Navigation",

    // props: {},
    data() {
        return {
            navigation: {},
            strapiUrl: "https://jakvitebackend.herokuapp.com",
            githublink: "https://github.com/jamesahnking",
            linkedInlink: "https://www.linkedin.com/in/james-ahn-king-6176841/",
            mediumlink: "https://medium.com/@jamesahnking",
        };
    },

    // URQL Client
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
        console.log("Navigation component mounted");
    },
    methods: {},
    components: {},
});
</script>
<template>
    <div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"
        style="min-height: 80px">
        <!-- Site Logo  -->
        <router-link to="/" class="no-underline">
            <img v-bind:src="data?.navigation.data.attributes.jaklogowhite.data.attributes.url
                " alt="Image" height="40" class="mr-0 lg:mr-6" />
        </router-link>

        <!-- Hamburger Menue  -->
        <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple" v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            leaveToClass: 'hidden',
            hideOnOutsideClick: true,
        }">
            <i class="pi pi-bars text-4xl"></i>
        </a>

        <!-- Menu Item List -->
        <div
            class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none flag">
            <ul
                class="bg-grey-900 list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row surface-900">
                
                <!-- Nav Item 1 -->
                <router-link to="/DevSite" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">
                            <span>{{ data?.navigation.data.attributes.navitem01 }}</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/NftMarketPlace" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"                             v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">
                            <span>{{ data?.navigation.data.attributes.navitem02 }}</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/MultiSigWallet" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">
                            <span>{{ data?.navigation.data.attributes.navitem03 }}</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/Adex" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }"> 
                            <span>{{ data?.navigation.data.attributes.navitem04 }}</span>
                        </a>
                        </li>
                </router-link>

                <router-link to="/PillarsAndRings" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">
                            
                            <span>{{ data?.navigation.data.attributes.navitem05 }}</span>
                        </a>
                    </li>
                </router-link>

                <router-link to="/About" class="no-underline">
                    <li>
                        <a v-ripple
                            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-100 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">

                            <span>{{ data?.navigation.data.attributes.navitem06 }}</span>
                        </a>
                    </li>
                </router-link>

                <li>
                    <a :href="githublink" target="_blank" v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <span><font-awesome-icon icon="fa-brands fa-github" size="lg" /></span>
                    </a>
                </li>
                <li>
                    <a :href="linkedInlink" target="_blank" v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <span><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></span>
                    </a>
                </li>

                <router-link to="/Contact">
                    <li>
                        <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-sm text-600"
                        v-styleclass="{
                                selector: '.flag',
                                enterClass: 'hidden',
                                leaveToClass: 'hidden',
                            }">
                        
                            <span><Button label="Contact Me" class="text-sm p-button-secondary" rounded /></span>
                        </a>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
