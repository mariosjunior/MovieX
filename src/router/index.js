import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     let isLoggedIn = false
//     if (localStorage.getItem('user_id')) isLoggedIn = true

//     if (to.name !== 'Login' && !isLoggedIn) next({
//         name: 'Login'
//     })
//     else next()

//     if (to.name == 'Login' && isLoggedIn) next({
//         name: 'Home'
//     })
// })

export default router