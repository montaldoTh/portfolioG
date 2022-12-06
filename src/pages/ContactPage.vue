<template>
  <q-page class="flex flex-center page-container">
    <q-img src="illustrations/img-gus.jpg" class="img" />
    <!-- Si tu as des choses a changé ici, les éléments que tu cherche sont : -->
    <!-- div class="text-overline"-->
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="location q-pa-md">
          <q-icon name="location_on" class="icon q-pl-md" />
          <div class="text-overline">Paris, France</div>
        </div>
      </q-card-section>
      <q-separator dark inset />
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
      <q-separator dark inset />
      <q-card-section>
        <div class="linkedin q-pa-md">
          <q-icon name="ion-logo-linkedin" class="icon q-pl-md" />
          <br />
          <a
            href="https://www.linkedin.com/in/gustave-choutri-852b8b1b1/"
            target="_blank"
            class="text-overline"
            >@choutri.gus</a
          >
        </div>
      </q-card-section>
    </q-card>
    <!-- Ou cette div -->
    <div class="flex column text-list items-center">
      <div class="text-h5">Vous pouvez me contacté via les réseaux indiqué</div>
      <div class="text-h4">Ou par mail</div>
      <div class="text-h3">gchoutri@unknow.idk</div>
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
  .img {
    width: 35%;
    border-radius: 2%;
    position: relative;
    bottom: 55px;
    right: 100px;
  }
  .my-card {
    position: relative;
    right: 150px;
    top: 190px;
  }
  .text-list div {
    margin-top: 15px;
  }

  .text-overline {
    color: white;
    text-decoration: none;
  }
}
</style>
