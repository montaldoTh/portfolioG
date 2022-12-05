<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <q-carousel
          swipeable
          navigation
          animated
          arrows
          infinite
          :autoplay="autoplay"
          v-model="slide"
          v-model:fullscreen="fullscreen"
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
      </q-card-section>

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
        <div class="text-caption text-grey-9">
          {{ description }}
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="grey"
          round
          flat
          dense
          side
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section
            class="text-subitle1"
            v-for="(image, index) in images"
            :key="index"
          >
            L'image n°{{ image.id }} ce nomme "{{ image.title }}"
          </q-card-section>
          <q-card-section class="text-subitle2"
            >Ses images sont retrouvables
            <a href="#/illustrations" target="_blank" rel="noopener noreferrer"
              >ici</a
            ></q-card-section
          >
        </div>
      </q-slide-transition>
    </q-card>
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
.my-card {
  width: 50vw;
}
</style>
