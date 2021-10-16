<template>
  <v-card class="rounded-card">
    <v-card-title class="justify-center title-card">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GenericChartCard",
  props: {
    title: { type: String, default: null },
  },
};
</script>
<style lang="scss" scoped>
.title-card {
  font-family: "Titillium Web";
}
.rounded-card {
  border-radius: 0.8rem !important;
}
</style>
