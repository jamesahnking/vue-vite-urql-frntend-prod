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
import { RouterLink } from "vue-router";
import HeroModule from "../components/HeroModule.vue";

export default defineComponent({
  name: "HomeView",
  // props: {},
  data() {
    return {
      project: {},
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
    };
  },

  setup() {
    const client = createClient({
      url: import.meta.env.VITE_STRAPI_URL_GQL,
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
    });

    provideClient(client);

    const resultHero = useQuery({
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
      }`,
    });

    const resultOne = useQuery({
      query: `
         {
                project(id: 1) {
                data {
                id
                attributes {
                    title
                    description
                    category
                    buttontext
                    route
                    imgStart
                    image {
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

    const resultTwo = useQuery({
      query: `
         {
                project(id: 2) {
                data {
                id
                attributes {
                    title
                    description
                    category
                    buttontext
                    route
                    image {
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
    const resultThree = useQuery({
      query: `
         {
                project(id: 3) {
                data {
                id
                attributes {
                    title
                    description
                    category
                    buttontext
                    route
                    image {
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
    const resultFour = useQuery({
      query: `
         {
                project(id: 4) {
                data {
                id
                attributes {
                    title
                    description
                    category
                    buttontext
                    route
                    image {
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

    const resultFive = useQuery({
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
                    route
                    image {
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

    const resultSix = useQuery({
      query: `
         {
                project(id: 6) {
                data {
                id
                attributes {
                    title
                    description
                    category
                    buttontext
                    route
                    image {
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

    console.log(resultOne);
    console.log(resultTwo);
    console.log(resultThree);
    console.log(resultFour);
    console.log(resultFive);
    console.log(resultSix);

    return {
      fetchingOne: resultOne.fetching,
      fetchingTwo: resultTwo.fetching,
      fetchingThree: resultThree.fetching,
      fetchingFour: resultFour.fetching,
      fetchingFive: resultFive.fetching,
      fetchingSix: resultSix.fetching,
      fetchingHero: resultHero.fetching,
      dataHero: resultHero.data,
      dataOne: resultOne.data,
      dataTwo: resultTwo.data,
      dataThree: resultThree.data,
      dataFour: resultFour.data,
      dataFive: resultFive.data,
      dataSix: resultSix.data,
      errorHero: resultHero.error,
      errorOne: resultOne.error,
      errorTwo: resultTwo.error,
      errorThree: resultThree.error,
      errorFour: resultFour.error,
      errorFive: resultFive.error,
      errorSix: resultSix.error,

      // fetching: {...result.fetching, ...anotherResult.fetching},
      // data: {...result.data,  ...anotherResult.data},
      // error: {...result.error, ...anotherResult.error},
    };
  },
  mounted() {
    console.log("HomeView mounted");
  },
  components: {
    HeroModule,
  },
  methods: {},
});
</script>

<template>
  <!-- <div>
    <HeroModule></HeroModule>
  </div> -->
  <ScrollTop />
  <!--
  <div class="bg-yellow-100 text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8" >
          
          <img :src="dataHero?.hero.data.attributes.herologo.data?.attributes?.url" alt="Logo" height="250" />
     
          <p class="text-900 font-semibold line-height-3 text-center">{{ dataHero?.hero.data.attributes.title }}
              <br/>
              <span class="text-600 font-normal line-height-1 mt-2 text-sm text-center">{{ dataHero?.hero.data.attributes.subtitle }}</span>
          </p>

           <div class="flex justify-content-center">
              <h2 class="px-2 md:px-6 text-900 text-base font-medium line-height-2 mb-4 max-w-28rem" style="max-width: 1350px">{{ dataHero?.hero.data.attributes.herotext }}</h2>
          </div> 
          
      </div>
  <div

    class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <span class="no-underline font-bold">Development Examples</span>
  </div>
-->

  <!-- Loading -->

  <!-- Module 6 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1 -->
    <div class="col-12 md:col-6 flex-auto justify-content-around">
      <img
        v-bind:src="
          dataSix?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>

    <!-- col 2-->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataSix?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataSix?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-900 line-height-3">
          {{ dataSix?.project?.data?.attributes?.description }}
        </p>

        <router-link :to="dataSix?.project?.data?.attributes?.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a> 
        </router-link>
      </section>
    </div>
  </div>
  <!-- grid end -->

  <Divider align="center" type="dotted">
    <span class="text-400"><b>-</b></span>
  </Divider>

  <!-- Module 1 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1  -->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataFive?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataFive?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-800 line-height-3">
          {{ dataFive?.project?.data?.attributes?.description }}
        </p>
        <router-link :to="dataFive?.project?.data?.attributes.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a>
        </router-link>
      </section>
    </div>

    <!-- col 2 -->
    <div
      class="col-12 md:col-6 flex-auto flex align-items-center justify-content-around"
    >
      <img
        v-bind:src="
          dataFive?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>
  </div>
  <!-- grid end -->

  <Divider align="center" type="dotted">
    <span class="text-400"><b>-</b></span>
  </Divider>

  <!-- Module 2 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1 -->
    <div class="col-12 md:col-6 flex-auto justify-content-around">
      <img
        v-bind:src="
          dataTwo?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>

    <!-- col 2-->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataTwo?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataTwo?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-900 line-height-3">
          {{ dataTwo?.project?.data?.attributes?.description }}
        </p>

        <router-link :to="dataTwo?.project?.data?.attributes.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a>
        </router-link>
      </section>
    </div>
  </div>
  <!-- grid end -->

  <Divider align="center" type="dotted">
    <span class="text-400"><b>-</b></span>
  </Divider>

  <!-- Module 3 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1  -->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataThree?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataThree?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-800 line-height-3">
          {{ dataThree?.project?.data?.attributes?.description }}
        </p>
        <router-link :to="dataOne?.project?.data?.attributes.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a>
        </router-link>
      </section>
    </div>

    <!-- col 2 -->
    <div
      class="col-12 md:col-6 flex-auto flex align-items-center justify-content-around"
    >
      <img
        v-bind:src="
          dataThree?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>
  </div>
  <!-- grid end -->

  <Divider align="center" type="dotted">
    <span class="text-400"><b>-</b></span>
  </Divider>

  <!-- Module 4 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1 -->
    <div class="col-12 md:col-6 flex-auto justify-content-around">
      <img
        v-bind:src="
          dataFour?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>

    <!-- col 2-->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataFour?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataFour?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-900 line-height-3">
          {{ dataFour?.project?.data?.attributes?.description }}
        </p>

        <router-link :to="dataFour?.project?.data?.attributes.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a>
        </router-link>
      </section>
    </div>
  </div>
  <!-- grid end -->

  <Divider align="center" type="dotted">
    <span class="text-400"><b>o</b></span>
  </Divider>

  <!-- Module 5 * -->

  <div class="grid grid-nogutter text-800 bg-white py-6 my-3">
    <!-- col 1  -->
    <div
      class="col-12 md:col-6 p-6 text-center md:text-center flex align-items-center justify-content-around"
    >
      <section>
        <span class="block text-xl font-bold mb-1 text-500">
          {{ dataOne?.project?.data?.attributes?.category }}
        </span>
        <div class="text-6xl font-bold mb-3 text-700">
          {{ dataOne?.project?.data?.attributes?.title }}
        </div>
        <p class="mt-0 mb-4 text-800 line-height-3">
          {{ dataOne?.project?.data?.attributes?.description }}
        </p>
        <router-link :to="dataOne?.project?.data?.attributes.route || '/'">
          <a v-ripple class="no-underline">
            <Button
              label="View Project"
              type="button"
              class="font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
            />
          </a>
        </router-link>
      </section>
    </div>

    <!-- col 2 -->
    <div
      class="col-12 md:col-6 flex-auto flex align-items-center justify-content-around"
    >
      <img
        v-bind:src="
          dataOne?.project.data.attributes.image.data?.attributes?.url
        "
        alt="Image"
        height="300"
      />
    </div>
  </div>
  <!-- grid end -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

a:link {
  text-decoration: none;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
