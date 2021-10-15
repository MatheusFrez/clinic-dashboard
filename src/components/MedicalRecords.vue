<template>
  <div class="mx-16 my-16">
    <div>
      <span d-flex mb-4>
        <img :src="require('../assets/clipboard-data.svg')" height="25" />
        <span class="grid-title ml-4">Prontuários</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalRecords",
  // TO DO REFARAR OS CSS REPETIDOS
};
</script>
<style lang="scss" scoped>
.grid-title {
  font-family: "Titillium Web";
  color: #2e81d4;
  font-size: 1.5rem;
  align-self: center;
}
</style>
