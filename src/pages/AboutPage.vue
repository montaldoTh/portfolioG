<template>
  <q-page class="flex flex-center page-container column">
    <h2>Un jeune Illustrateur talentueux</h2>
    <div class="grid">
      <div class="row">
        <div class="text-h4 col-6 fPart">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          voluptas ducimus quae ea culpa sapiente? Eos doloremque recusandae a
          odio asperiores quo, quis quos aut, id nam cupiditate quidem facilis?
        </div>
        <div class="col-1"></div>
        <div class="col-5">
          <q-img src="public/img//monke.jpg" class="picture"></q-img>
        </div>
        <div class="badge">
          <p class="text-subtitle2">C'est moi</p>
        </div>
      </div>
      <div class="row">
        <div class="col-8"></div>
        <h3>Title</h3>
      </div>
      <div class="row tRow">
        <div class="col-4"></div>
        <div class="text-h4 col-8 sPart">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          voluptas ducimus quae ea culpa sapiente? Eos doloremque recusandae a
          odio asperiores quo, quis quos aut, id nam cupiditate quidem facilis?
        </div>
      </div>
    </div>
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

  * {
    z-index: 1;
  }
  .background {
    width: 100%;
    height: 100%;
    filter: brightness(0.4);
    position: absolute;
    z-index: 0;
    top: 170px;
  }
  .text-h4 {
    padding: 150px 40px;
  }

  .tRow .text-h4 {
    padding: 40px;
  }
  .picture {
    width: 80%;
    position: relative;
    top: 70px;
    border-radius: 10px;
  }

  .badge {
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px 15px 0 15px;
    right: 740px;
    top: 250px;
    box-shadow: 3 black;
  }

  .sPart {
    background-color: #fff;
    border-radius: 15px;
    position: relative;
    left: 10px;
  }
}
</style>
