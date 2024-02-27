import {
    createRouter
    , createWebHistory
} from 'vue-router'

import aboutMe from "@/components/pages/AboutMe.vue"
import myExp from "@/components/pages/Experiencias.vue"
import myComp from "@/components/pages/Competencias.vue"
import myCerts from '@/components/pages/Certificados.vue'
import myProjects from '@/components/pages/Projetos.vue'

const routes = [{
    name: 'home',
    path: '/',
    component: aboutMe
}, {
    name: 'exp',
    path: '/exp',
    component: myExp
}, {
    name: 'comp',
    path: '/comp',
    component: myComp
}, {
    name: 'certs',
    path: '/certs',
    component: myCerts
}, {
    name: 'projects',
    path: '/projects',
    component: myProjects
}]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router