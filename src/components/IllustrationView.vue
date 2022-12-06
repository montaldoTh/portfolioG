<template>
  <q-card class="my-card" flat bordered>
    <q-img class="illustration" :src="image" fit="cover" />

    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ description }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IllustrationView",
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 1050px;
}
</style>
