import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import App from "./App.vue";
import About from "./page/About.vue";
import Contact from "./page/Contact.vue";
import Items from "./page/Items.vue";
import Home from "./page/Home.vue";
import Login from "./page/Login.vue";
import SingUp from "./page/SingUp.vue";


export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            component : App
        },
        {
            path : "/home",
            component : Home
        },
        {
            path : "/about",
            component : About,
            meta : {isAuth : true}
        },
        {
            path : "/contact",
            component : Contact,
            meta : {isAuth : true}
        },
        {
            path : "/item",
            component : Items,
            meta : {isAuth : true}
        },
        {
            path : '/login',
            component : Login
        },
        {
            path : "/singUp",
            component : SingUp
        }
    ]
})

router.beforeEach((to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) => {
    const userSingIn = localStorage.getItem("user")
    if(to.meta.isAuth && !userSingIn) {
        next({path : "/login"})
    } else {
        next()
    }
})