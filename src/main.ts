import { createApp } from "vue";
import Root from "./App.vue";
import router from "./router";

// GraphQL Client
import urql from "@urql/vue";

// PrimeVue
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Ripple from "primevue/ripple";
import Dropdown from "primevue/dropdown";
import StyleClass from "primevue/styleclass";
import Image from "primevue/image";
import Card from "primevue/card";
import Panel from "primevue/panel";
import Accordion from "primevue/accordion";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';


// -jic
import Dialog from "primevue/dialog";
import Badge from "primevue/badge";
import Chip from "primevue/chip";
import Chart from "primevue/chart";
import Toast from "primevue/toast";
import AccordionTab from "primevue/accordiontab";
import Divider from "primevue/divider";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ProgressSpinner from "primevue/progressspinner";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

// FA Library add icons to this library to use in App 
library.add(faGithub, faLinkedin, faMedium);

// Primevue CSS
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const app = createApp(Root);

app
  .use(urql, {
    url: "https://jakvitebackend.herokuapp.com/graphql",
  })
  .use(PrimeVue)
  .use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Textarea", Textarea);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Card", Card);
app.component("Image", Image);
app.component("Button", Button);
app.component("Panel", Panel);
app.component("Accordion", Accordion);
app.component("Divider", Divider);
app.directive("styleclass", StyleClass);
app.directive("ripple", Ripple);

app.mount("#app");
