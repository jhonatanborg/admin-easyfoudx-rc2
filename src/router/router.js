import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
    redirect: { name: "campaigns" },

    children: [
      {
        path: "/",
        name: "campaigns",
        component: () => import("../views/Campaigns.vue"),
        redirect: { name: "start-campaign" },
        children: [
          {
            path: "/",
            name: "start-campaign",
            component: () => import("../components/campaign/StartCampaign.vue"),
          },
          {
            path: "/campanha-detalhes/",
            name: "campaign-details",
            props: (route) => ({ query: route.query.id }),
            component: () =>
              import("../components/campaign/CampaignDetails.vue"),
          },
        ],
      },
      {
        path: "/categorias",
        name: "categories",
        component: () => import("../views/Categories.vue"),
      },
      {
        path: "/carousels",
        name: "carousel",
        component: () => import("../views/Carousels.vue"),
        redirect: { name: "start-carousel" },
        children: [
          {
            path: "/",
            name: "start-carousel",
            component: () => import("../components/carousel/StartCarousel.vue"),
          },
          {
            path: "/novo-carrousel",
            name: "new-carousel",
            component: () => import("../components/carousel/NewCarousel.vue"),
          },
          {
            path: "/editar-carrousel/",
            name: "edit-carousel",
            props: (route) => ({ query: route.query.id }),

            component: () => import("../components/carousel/EditCarousel.vue"),
          },
        ],
      },
      {
        path: "/usuarios",
        name: "users",
        redirect: { name: "start-user" },

        component: () => import("../views/Users.vue"),
        children: [
          {
            path: "/",
            name: "start-user",
            component: () => import("../components/user/StartUser.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "/sessao",
    name: "session",
    component: () => import("../views/Session.vue"),
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("../components/session/Login.vue"),
      },
      {
        path: "/registro",
        name: "register",
        component: () => import("../components/session/Register.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/sessao"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");
  if (authRequired && !loggedIn) {
    return next({
      path: "/sessao",
    });
  }
  next();
});
export default router;
