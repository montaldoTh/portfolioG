<template>
  <q-page class="flex flex-center page-container column">
    <h2>Un jeune Illustrateur talentueux</h2>
    <div class="grid">
      <div class="row">
        <div class="text-h4 col-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          voluptas ducimus quae ea culpa sapiente? Eos doloremque recusandae a
          odio asperiores quo, quis quos aut, id nam cupiditate quidem facilis?
        </div>
      </div>
      <div class="row">
        <div class="col-8"></div>
        <h3>Title</h3>
      </div>
      <div class="row tRow">
        <div class="col-4"></div>
        <div class="text-h4 col-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          voluptas ducimus quae ea culpa sapiente? Eos doloremque recusandae a
          odio asperiores quo, quis quos aut, id nam cupiditate quidem facilis?
        </div>
      </div>
    </div>

    <img src="illustrations/Thallasorus_Rex.png" alt="" class="background" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
.page-container {
  background: rgb(210, 210, 210);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  .text-h4 {
    color: white;
  }
  * {
    z-index: 1;
  }
  .background {
    width: 100%;
    height: 100%;
    filter: brightness(0.4);
    position: relative;
    z-index: 0;
    bottom: 700px;
  }
  .text-h4 {
    padding: 150px 40px;
    color: rgba(255, 255, 255, 0.808);
  }

  .tRow .text-h4 {
    padding: 40px;
  }
  .picture {
    border-radius: 50%;
    width: 10%;
    height: 10%;
  }
}
</style>
