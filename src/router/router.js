import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/campanhas",
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
        path: "/campanha-detalhes/:id",
        name: "campaign-details",
        component: () => import("../components/campaign/CampaignDetails.vue"),
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
        path: "/editar-carrousel/:id",
        name: "edit-carousel",
        component: () => import("../components/carousel/EditCarousel.vue"),
      },
    ],
  },
  {
    path: "/usuarios",
    name: "users",
    component: () => import("../views/Users.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
