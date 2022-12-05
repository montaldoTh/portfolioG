<template>
  <q-page class="flex flex-center page-container">
    <q-list>
      <div class="proj-cont">
        <ProjectView
          v-for="project in projectList"
          :key="project.id"
          v-bind="project"
        />
      </div>
    </q-list>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import ProjectView from "src/components/ProjectView.vue";

const projectList = [
  {
    id: 1,
    title: "Project V",
    description:
      "Dummy description cause its a test. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque voluptatum dolorum earum doloribus, architecto quos non pariatur tempore tempora ipsam eaque voluptates sint asperiores, similique vitae veritatis accusamus ad!",
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
      {
        id: 3,
        title: "Thallasorus Rex",
        path: "illustrations/building-1.svg",
      },
      {
        id: 4,
        title: "Thallasorus Rex",
        path: "illustrations/building-2.svg",
      },
      {
        id: 5,
        title: "Thallasorus Rex",
        path: "illustrations/logo avec nom.svg",
      },
    ],
  },
  {
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
  },
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
