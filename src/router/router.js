import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage")
    },
    { 
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage") 
    },
    { 
        // with the : we defined id as an argument
        path: '/pokemon/:id',
        name:'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"),
        props:( route ) => {
            // convertimos el id a Number
            const  id  = Number(route.params.id)

            // todo lo que retornamos van a ser properties siempre y cuando en el componente las tengamos definidas
            // como el id en este caso; tenemos id en este return {} pero en los props del componente PokemonPage,
            // tambien tenemos definido el id
            return {
                id: isNaN(id) ? 1 : id // si no es un numero mandamos 1 by default o si es mandamos el id
            }
        }
    },
    { 
        path:'/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NotFoundPage"*/ "@/modules/shared/pages/NoPageFound")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router