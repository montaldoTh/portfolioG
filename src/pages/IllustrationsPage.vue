<template>
  <q-page class="page-container">
    <q-list>
      <div class="illu-cont">
        <IllustrationView
          v-for="illustra in illustrationList"
          :key="illustra.title"
          v-bind="illustra"
        />
      </div>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IllustrationView from "components/IllustrationView.vue";

const illustrationList = [
  {
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg",
  },
  {
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
  {
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg",
  },
  {
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
  {
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg",
  },
  {
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
  {
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg",
  },
  {
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
  {
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg",
  },
  {
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
];

export default defineComponent({
  name: "IllustrationPage",
  components: {
    IllustrationView,
  },
  setup() {
    return {
      illustrationList,
      IllustrationView: illustrationList,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);

  .illu-cont {
    display: flex;
    flex-wrap: wrap;
    .illustration {
      position: relative;
      height: 530px;
    }
  }
}
</style>
