const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/projects", component: () => import("pages/ProjectsPage.vue") },
      {
        path: "/illustrations",
        component: () => import("pages/IllustrationsPage.vue"),
      },
      {
        path: "/contact",
        component: () => import("src/pages/ContactPage.vue"),
      },
      { path: "/about", component: () => import("pages/AboutPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
