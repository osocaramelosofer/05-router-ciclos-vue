import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunckName: "ListPage"*/ "@/modules/pokemon/pages/ListPage")
    },
    { 
        path: '/about',
        component: () => import(/* webpackChunckName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage") 
    },
    { 
        path: '/id',
        component: () => import(/* webpackChunckName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage") 
    },
    { 
        path:'/:pathMatch(.*)*',
        component: () => import(/* webpackChunckName: "NotFoundPage"*/ "@/modules/shared/pages/NoPageFound")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router