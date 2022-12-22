<template>
  <q-page class="flex page-container">
    <div class="proj-cont">
      <ProjectView
        v-for="project in projectList"
        :key="project.id"
        v-bind="project"
        class="project"
        @click="
          imgFullscreen = true;
          actualProj = project.id - 1;
          actualImg = project.images.id;
        "
      />
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import ProjectView from "src/components/ProjectView.vue";

// Liste des tes projets
const projectList = [
  {
    id: 1, // Comme dans les autres cas, si tu ajoute un projet suis l'ordre des id/name, il est OBLIGATOIRE
    title: "Project V", // Titre du projet entier
    // Description du projet entier
    description:
      "Dummy description cause its a test. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad!",
    images: [
      // Toutes les images du projet, si tu veux en rajouter c'est ici
      {
        id: 1, // Je renvoie a au-dessus
        title: "Thallasorus Rex",
        path: "illustrations/Thallasorus_Rex.png",
      },
      {
        id: 2,
        title: "Beambul the Hell King",
        path: "illustrations/Bembul_the_Hell_King.jpg", //Lien du chemin vers ton images
      },
    ],
  },
  {
    //Si tu veux rajouter un projet copie d'ici
    id: 2,
    title: "Project II",
    description:
      "Dummy description cause its a test Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad!",
    images: [
      {
        id: 1,
        title: "Beambul the Hell King",
        path: "illustrations/Bembul_the_Hell_King.jpg",
      },
      {
        id: 2,
        title: "Thallasorus Rex",
        path: "illustrations/Thallasorus_Rex.png",
      },
    ],
  }, //à la virgule comprise sinon, tout casser
];

export default defineComponent({
  name: "ProjectsPage",
  components: {
    ProjectView,
  },
  setup() {
    return {
      projectList,
      ProjectView: projectList,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);
}
</style>
