<template>
  <q-page class="flex column page-container">
    <div class="title-cont">
      <h1 class="text-h2 text-p1">Bonjour,</h1>
      <p class="text-h4 text-p2">Gustave Choutri, votre humbre illustrateur.</p>
      <p class="text-h5 text-p3">graphisme, infographie, illustrations,</p>
      <p class="text-h5 text-p3">
        Je suis disponible pour toute vos commisions,
      </p>
      <p class="text-h5 text-p4">
        Veuillez me contacter par l'un des moyens de contact, présent ci dessous
        ou dans la page contact.
      </p>
    </div>
    <q-card dark bordered class="bg-grey-9 my-card flex row">
      <q-card-section>
        <div class="location q-pa-md">
          <q-icon name="location_on" class="icon q-pl-md" />
          <div class="text-overline">Paris, France</div>
        </div>
      </q-card-section>
      <q-separator vertical dark inset />
      <q-card-section>
        <div class="instagram q-pa-md">
          <q-icon name="ion-logo-instagram" class="icon q-pl-md" />
          <br />
          <a
            href="https://www.instagram.com/lordoftempest/"
            target="_blank"
            class="text-overline"
            >@lordoftempest</a
          >
        </div>
      </q-card-section>
      <q-separator vertical dark inset />
      <q-card-section>
        <div class="linkedin q-pa-md">
          <q-icon name="ion-logo-linkedin" class="icon q-pl-md" />
          <br />
          <a
            href="https://www.linkedin.com/in/gustave-choutri-852b8b1b1/"
            target="_blank"
            class="text-overline"
            >@gustave.choutri</a
          >
        </div>
      </q-card-section>
      <q-separator vertical dark inset />
      <q-card-section>
        <div class="discord q-pa-md">
          <q-icon name="fa-brands fa-discord" class="icon q-pl-md" />
          <div class="text-overline">Lord of Tempests#9620</div>
        </div>
      </q-card-section>
      <q-separator vertical dark inset />
      <q-card-section>
        <div class="phone q-pa-md">
          <q-icon name="fa-solid fa-phone" class="icon q-pl-md" />
          <div class="text-overline">+337.52.67.93.45</div>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-carousel" flat bordered>
      <q-card-section>
        <q-carousel
          swipeable
          animated
          autoplay
          arrows
          height="850px"
          v-model="slide"
          v-model:fullscreen="fullscreen"
          infinite
        >
          <q-carousel-slide
            :name="1"
            img-src="public/illustrations/Bembul_the_Hell_King.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="public/illustrations/img-gus.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="public/illustrations/Thallasorus_Rex.png"
          />

          <template v-slot:control>
            <q-carousel-control position="top-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-card-section>
    </q-card>

    <div class="illu-title flex column justify-evenly items-center">
      <p class="text-h4">Voici</p>
      <p class="text-h4">quelques-unes</p>
      <p class="text-h4">de mes</p>
      <p class="text-h4">illustrations</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);
  overflow-x: hidden;
  .title-cont {
    background-color: white;
    width: 50%;
    height: 50%;
    margin: 60px 0 40px 250px;
    padding: 50px;
    border-radius: 20px;
    p {
      margin: 30px 0;
    }
    .text-p2 {
      padding-right: 75px;
    }
    .text-p3,
    .text-p4 {
      padding-left: 75px;
    }
  }
  .my-card {
    width: 60%;
    justify-content: space-evenly;
    position: relative;
    bottom: 85px;
    left: 450px;
  }

  .text-overline {
    color: white;
    text-decoration: none;
  }
  .my-carousel {
    width: 70%;
    margin: 0 0 10px 50px;
  }

  .illu-title {
    width: 380px;
    height: 350px;
    position: absolute;
    bottom: 400px;
    right: 80px;
    background-color: rgb(130, 130, 130);
    padding: 45px;
    border-radius: 25px;
    color: white;
  }
}
</style>
