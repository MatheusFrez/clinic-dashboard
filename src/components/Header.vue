<template>
  <div>
    <v-app-bar app class="app-bar">
      <div>
        <v-img
          :src="require('../assets/logo-pet-vital.svg')"
          class="mx-16"
          contain
          height="200"
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css" scoped>
.app-bar {
  background: transparent
    linear-gradient(
      90deg,
      var(--unnamed-color-4ad295) 0%,
      var(--unnamed-color-2e81d4) 48%,
      var(--unnamed-color-184b7e) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent
    linear-gradient(90deg, #4ad295 0%, #2e81d4 48%, #184b7e 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 1px 10px #0000001f;
}
</style>
