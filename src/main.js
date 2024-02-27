import { createApp } from 'vue'
import App from './App.vue'

// import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap'

import BootstrapVue from 'bootstrap-vue-3'
import router from './config/router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faCaretRight, faArrowTurnUp, faCertificate, faArrowUpRightFromSquare, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faUser, faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faCompass, faCheckCircle, faCaretRight, faArrowTurnUp, faCertificate, faArrowUpRightFromSquare, faLaptopCode)

const app = createApp(App)

app.use(BootstrapVue)
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
