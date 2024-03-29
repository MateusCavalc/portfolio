import { createApp } from 'vue'
import App from './App.vue'

// import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap'

import BootstrapVue from 'bootstrap-vue-3'
import router from './config/router'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCheckCircle, faCaretRight, faArrowTurnUp,
    faCertificate, faArrowUpRightFromSquare, faLaptopCode,
    faPhone,
    faDatabase,
    faUserLock
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faCompass, faEnvelope, faImage } from "@fortawesome/free-regular-svg-icons";
import { faBootstrap, faCss3Alt, faDocker, faGithub, faHtml5, faJs, faLinkedinIn, faVuejs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faUser, faCompass, faCheckCircle,
    faCaretRight, faArrowTurnUp, faCertificate,
    faArrowUpRightFromSquare, faLaptopCode, faGithub,
    faLinkedinIn, faEnvelope, faPhone,
    faVuejs, faDatabase, faUserLock,
    faHtml5, faCss3Alt, faJs,
    faDocker, faBootstrap, faImage
)

const app = createApp(App)

app.use(BootstrapVue)
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
