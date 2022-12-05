<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 100vh"
    class="layout shadow-2"
  >
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="header-title">
          <a href="/">Gustave Choutri</a>
        </q-toolbar-title>
        <div class="navtab">
          <q-tabs>
            <q-route-tab to="/projects" label="Projets" icon="folder" />
            <q-route-tab
              to="/illustrations"
              label="illustrations"
              icon="wallpaper"
            />
            <q-route-tab to="/about" label="A Propos" icon="psychology" />
            <q-route-tab to="/contact" label="contact" icon="public" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    id: 1,
    name: "Accueil",
    destination: "/",
  },
  {
    id: 2,
    name: "Projets",
    destination: "/projects",
  },
  {
    id: 3,
    name: "Illustrations",
    destination: "/illustrations",
  },
  {
    id: 4,
    name: "A Propos",
    destination: "/about",
  },
  {
    id: 5,
    name: "Contact",
    destination: "/contact",
  },
];

export default defineComponent({
  name: "MainLayout",
});
</script>

<style lang="scss" scoped>
.header-title a {
  color: white;
  text-decoration: none;
  padding: 0 16px;
  min-height: 48px;
  transition: color 0.3s, background-color 0.3s;
  white-space: nowrap;
  color: inherit;
}
</style>
