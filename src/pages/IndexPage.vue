<template>
  <q-page class="flex column justify-center page-container">
    <q-card class="presentation-card q-mb-xl">
      <q-card-section class="q-ma-md">
        <div class="text-h3 text-weight-light">Bonjour,</div>
        <div class="text-h2 text-weight-light q-ml-xl">
          Je suis Gustave Choutri
        </div>
      </q-card-section>

      <q-card-section class="description text-h5"
        >Illustrateur et Graphiste de niveau licence et je vous souhaite une
        bonne visite sur StudioChoutri.com jeter un œil sur mon site pour
        découvrir mes projets !</q-card-section
      >

      <q-card-section class="find-me flex row q-ml-xl">
        <div class="location q-pa-md">
          <q-icon name="location_on" class="q-pl-md" />
          <div class="text-overline">Paris, France</div>
        </div>

        <div class="instagram q-pa-md">
          <q-icon name="ion-logo-instagram" class="q-pl-md" />
          <div class="text-overline">@lordoftempest</div>
        </div>

        <div class="mail q-pa-md">
          <q-icon name="mail" class="q-pl-md" />
          <div class="text-overline">gchoutri@unknow.idk</div>
        </div>

        <div class="linkedin q-pa-md">
          <q-icon name="ion-logo-linkedin" class="q-pl-md" />
          <div class="text-overline">@choutri.gus</div>
        </div>

        <div class="phone q-pa-md">
          <q-icon name="phone" class="q-pl-md" />
          <div class="text-overline">06.54.32.10.12</div>
        </div>
      </q-card-section>
    </q-card>

    <div
      class="project-title relative-position text-h2 text-italic text-capitalize q-mt-xl q-mb-lg q-ml-xl"
    >
      Some of my Illustrations
    </div>

    <div>
      <q-carousel
        arrows
        animated
        v-model="slide"
        height="950px"
        autoplay
        infinite
      >
        <q-carousel-slide
          name="first"
          img-src="/illustrations/Bembul_the_Hell_King.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 img-title">Bembul the Hell King</div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="second"
          img-src="/illustrations/Thallasorus_Rex.png"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 img-title">Thallasorus Rex</div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="third"
          img-src="/illustrations/Thallasorus_Rex.png"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 img-title">Thallasorus Rex</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      slide: ref("first"),
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);

  .presentation-card {
    width: 100%;
    height: 50vh;
    .description {
      margin-left: 110px;
      margin-right: 110px;
    }

    .find-me {
      justify-content: flex-end;
    }
  }
  .custom-caption {
    text-align: center;
    padding: 25px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
