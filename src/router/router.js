import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },

    {
      path:'/pokemon',
      name:'pokemon',
      component: ()=> import(/* webpackChunkName: PokemonLayout*/ '../modules/pokemon/layouts/PokemonLayout'),
        children:[
          {
            path: 'home',
            name: 'pokemon-home',
            component: () => import(/* webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage")
          },
          {
            path: 'about',
            name: 'pokemon-about',
            component: () => import(/* webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage")
          },
          {
            // with the : we defined id as an argument
            path: 'pokemon/:id',
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
            path: '',
            name: 'redirectByDefaultPkm',
            redirect: { name: 'pokemon-about' }
          }
        ]
    },

  {
    path: '/dbz',
    name:'dbz',
    component: () => import(/* webpackChunkName: 'dbzLayout' */ '../modules/dbz/layouts/DragonBallLayout'),
    children: [
      {
        path:'characters',
        name:'dbz-characters',
        component: () => import('../modules/dbz/pages/Characters')
      },
      {
        path:'about',
        name:'dbz-about',
        component: () => import('../modules/dbz/pages/About')
      },
      {
        path: '',
        name:'redirectByDefaultDbz',
        redirect: { name: 'dbz-about' }
      }
    ]
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