<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="project-title text-h3">
      {{ title }}
    </div>

    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      autoplay
      v-model:fullscreen="fullscreen"
      class="my-carousel"
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index + 1"
        :img-src="image.path"
      />
      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

    <div class="desc-cont text-subtitle1">
      {{ description }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProjectView",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      slide: ref(1),
      expanded: ref(false),
      autoplay: ref(true),
      fullscreen: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.project-title {
  position: relative;
  left: 50px;
  top: 90px;
  z-index: 1;
  color: rgb(197, 197, 197);
}
.my-carousel {
  width: 100%;
  height: 700px;
  border-radius: 15px;
}

.desc-cont {
  width: 40%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  left: 20px;
  bottom: 250px;
}
</style>
