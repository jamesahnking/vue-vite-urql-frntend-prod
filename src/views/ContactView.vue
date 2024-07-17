// Vue Component Template for Project

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  provideClient,
  useQuery,
} from "@urql/vue";

export default defineComponent({
  name: "ContactView",
  // props: {},
  data() {
    return {
      posts: [],
      errors: "",
      postBody: "",
      contact: {},
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
      token:{},
      form: {
        name: "",
        email: "",
        company: "",
        message: "",
        response: "",
      },
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
            contact {
                data {
                  id
                  attributes {
                    header
                    subheader
                    field01
                    field02
                    field03
                    field04
                    brandimage {
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

// Form property using ref
    const form = ref({
      name: "",
      email: "",
      company: "",
      message: "",
      response: "",
      success: "",
    });

    console.log(result);
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      form
    };

  },
 
  mounted() {
    console.log("ContactView component mounted");
  },

  methods: {
      async submitForm() {
      axios
        .post("https://jakvitebackend.herokuapp.com/api/ezforms/submit", {
          formData: this.form,
        })
        .then((res) => {
          //Perform Success Action
          this.form.success = "Data saved posted to Strapi";
          this.form.response = JSON.stringify(this.form.response, null, 2);

          console.log(this.form.success,this.form.response)
        })
        .catch((error) => {
          // error.response.status Check status code
          this.form.response = "Error: " + error.response;
        })
        .finally(() => {
          //Perform action in always
          this.form.name = "";
          this.form.email = "";
          this.form.company = "";
          this.form.message = "";
        });
    },
  },

  components: {},
});
</script>
<template>
  <div class="surface-section py-8   ">
    <div class="grid justify-content-center">
      <div class="col-8">
        <div class="text-center">
          <span class="text-6xl font-bold">{{
            data?.contact.data.attributes.header
          }}</span>
          <p>{{ data?.contact.data.attributes.subheader }}</p>
        </div>
        <div v-if="form.response">
          <p>Message Sent! </p>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
          <!-- form start  -->
          <div class="p-fluid pr-0  text-left">
            <div class="field text">
              <label for="name" class="font-medium">{{
                data?.contact.data.attributes.field01
              }}</label>
              <InputText
                id="name"
                v-model="form.name"
                type="text"
                class="py-3 px-2 text-lg"
              />
            </div>
            <div class="field">
              <label for="email" class="font-medium">{{
                data?.contact.data.attributes.field02
              }}</label>
              <InputText
                id="email"
                v-model="form.email"
                type="text"
                class="py-3 px-2 text-lg"
              />
            </div>
            <div class="field">
              <label for="company" class="font-medium">{{
                data?.contact.data.attributes.field03
              }}</label>
              <InputText
                id="company"
                v-model="form.company"
                type="text"
                class="py-3 px-2 text-lg"
              />
            </div>
            <div class="field">
              <label for="message" class="font-medium">{{
                data?.contact.data.attributes.field04
              }}</label>
              <Textarea
                id="message"
                :rows="6"
                :autoResize="true"
                v-model="form.message"
                class="py-3 px-2 text-lg"
              ></Textarea>
            </div>
            <Button
              label="Send Message"
              icon="pi pi-send"
              class="w-100% font-bold px-5 py-3 mr-0 sm:mr-4 p-button-secondary p-button-rounded p-button-raised white-space-nowrap"
              rounded
              @click="submitForm"
            ></Button>
          </div>
        </form>

        <!-- form end  -->
      </div>

      
        <!-- <div
          class="bg-no-repeat bg-center border-round h-25rem w-full"
          style="background-image: url('src/images/jak_primary_tri_logo.svg')"
        ></div> -->

        <!-- <div class="p-0">
                    <div class="border-2 border-dashed surface-border border-round surface-card ">
                    </div>
                </div> -->
    </div>
  </div>
</template>
