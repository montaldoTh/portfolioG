<template>
  <q-img class="illustration" :src="image" fit="cover" />
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
