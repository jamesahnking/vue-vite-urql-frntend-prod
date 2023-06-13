// Vue Component Template for Project
<script lang="ts">

import { defineComponent } from 'vue';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  provideClient,
  useQuery,
} from "@urql/vue";

export default defineComponent({
    name: "NftAiGeneratorView",
    props: {},
    data() {
    return {
      project: {},
      imagetst: {},
      strapiUrl: 'http://localhost:1337',
    };
  },

//   setup() {
//     const client = createClient({
//       url: "http://localhost:1337/graphql",
//       exchanges: [dedupExchange, cacheExchange, fetchExchange],
//     });

//     provideClient(client);

//     const result = useQuery({
//       query: `
//       {
//         project(id: 3) {
//             data {
//             id
//             attributes {
//                 title
//                 description
//                 category
//                 buttontext
//                 image {
//                 data {
//                     attributes {
//                     url
//                     }
//                 }
//                 }
//                 stacktitle
//                 stackitemtext_01
//                 stackitemtext_02
//                 stackitemtext_03
//                 stackitemtext_04
//                 stackitemtext_05
//                 stackitem_ico_01
//                 stackitem_ico_02
//                 stackitem_ico_03
//                 stackitem_ico_04
//                 stackitem_ico_05
//                 lightBg
//                 lightText
//                 lightTextDesc
//                 imgStart
//                 dark
//                 primary
//                 darkText
//                 videoUrl
//                 repoUrl
//                 richprojectdescription
//                 image01 {
//                 data {
//                     attributes {
//                     url
//                     }
//                 }
//                 }
//                 image02 {
//                 data {
//                     attributes {
//                     url
//                     }
//                 }
//                 }
//             }
//             }
//         }
//     }
//       `,
//     });

//     console.log(result);
//     return {
//       fetching: result.fetching,
//       data: result.data,
//       error: result.error,
//     };
//   },
    mounted() {
        console.log("DexView component mounted");
    },

    methods: {
        
    },

    components: {},
});
</script>

<template>
 <h1>NFT AI Generator</h1>
</template>