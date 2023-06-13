<script lang="ts">
import Navigation from "./components/Navigation.vue";
import HomeView from "./views/HomeView.vue";
import SiteFooter from "./components/SiteFooter.vue";

// Loading reCAPTCHA

export default {
  name: "App",
  // props: {},
  data() {
    return {
    };
  },

  setup() {
  },

  methods: {
  },

  components: {
    Navigation,
    HomeView,
    SiteFooter,
  },
}

</script>

<template>
  <Navigation></Navigation>
  <router-view></router-view>
  <SiteFooter></SiteFooter>
  
</template>

<style>
#app {
font-family: 'Inter 800', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
/* margin-top: 40px; */
/* background-color: black; */
}

</style>
