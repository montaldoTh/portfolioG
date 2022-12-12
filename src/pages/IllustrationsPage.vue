<template>
  <q-page class="page-container flex column">
    <h1>Voici les illustrations que j'ai réalisé</h1>
    <div class="gallery-cont">
      <IllustrationView
        v-for="illustra in illustrationList"
        :key="illustra.title"
        v-bind="illustra"
        class="gallery-item"
        @click="
          imgFullscreen = true;
          actualImg = illustra.id - 1;
        "
      />
    </div>

    <q-dialog v-model="imgFullscreen" full-width class="popup-container">
      <q-card class="popup">
        <q-card-section class="q-pa-xs popup_content">
          <q-img
            :src="illustrationList[actualImg].image"
            class="popup_content_img"
            fit="contain"
            :ratio="16 / 9"
            height="885px"
          />
        </q-card-section>

        <q-card-actions align="right" class="popup_action absolute-top-right">
          <q-btn
            flat
            label="X"
            color="black"
            class="popup_action_btn"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import IllustrationView from "components/IllustrationView.vue";
// Liste des illustrations
const illustrationList = [
  {
    // Pour faire du copier coller c'est d'ici
    id: 1,
    title: "Beambul the Hell King",
    description: "You shouldn't done this shit",
    image: "illustrations/Bembul_the_Hell_King.jpg", // les 2 propriétés d'avant son évidente, comme d'hab ici c'est ton chemin
  }, // à la virgule comprise
  {
    id: 2,
    title: "Thallasorus Rex",
    description: "A really big fish who's hungry",
    image: "illustrations/Thallasorus_Rex.png",
  },
];

let actualImg;

export default defineComponent({
  name: "IllustrationPage",
  components: {
    IllustrationView,
  },
  setup() {
    return {
      actualImg,
      imgFullscreen: ref(false),
      illustrationList,
      IllustrationView: illustrationList,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);

  .gallery-cont {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    width: 99%;
    padding: 10px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
    margin: 0px auto;

    .gallery-item {
      opacity: 0.85;
      flex-basis: 32.7%;
      margin-bottom: 6px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .gallery-item:hover {
      opacity: 1;
    }
  }
  .popup-container {
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 100;
    .popup {
      &_content {
        overflow: hidden;
      }
    }
  }
}
</style>
