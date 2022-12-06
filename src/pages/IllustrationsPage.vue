<template>
  <q-page class="page-container">
    <q-list class="illustration">
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
// Liste des illustrations
const illustrationList = [
  {
    // Pour faire du copier coller c'est d'ici
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg", // les 2 propriétés d'avant son évidente, comme d'hab ici c'est ton chemin
  }, // à la virgule comprise
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
    flex-direction: column;
    align-items: center;
    .my-card {
      margin: 20px;
    }
  }
}
</style>
