import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DexView from "../views/DexView.vue";
import WalletView from "../views/WalletView.vue";
import MarketPlaceView from "../views/MarketPlaceView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import BlogView from "../views/BlogView.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";
import DevSiteView from "../views/DevSiteView.vue";
import NftAiGeneratorView from "../views/NftAiGeneratorView.vue";
import PillarsAndRingsView from "../views/PillarsAndRingsView.vue";
import PineLangView from "../views/PineLangView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/Adex",
    name: "Adex",
    component: DexView,
  },
  {
    path: "/MultiSigWallet",
    name: "MultiSigWallet",
    component: WalletView,
  },

  {
    path: "/NftMarketPlace",
    name: "NftMarketPlace",
    component: MarketPlaceView,
  },

  {
    path: "/About",
    name: "About",
    component: AboutView,
  },
  
  {
    path: "/DevSite",
    name: "DevSite",
    component: DevSiteView,
  },
  
  {
    path: "/PillarsAndRings",
    name: "PillarsAndRings",
    component: PillarsAndRingsView,
  },
  
  {
    path: "/NftAiGen",
    name: "NftAiGen",
    component: NftAiGeneratorView,
  },
  
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },

  {
    path: "/PineLangView",
    name: "PineLangView",
    component: PineLangView,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
