<template>
  <div class="mx-4 my-8 mx-md-16 my-md-16">
    <div>
      <span d-flex mb-4>
        <img :src="require('../assets/journal-text.svg')" height="30" />
        <span class="grid-title ml-4">Prontuários</span>
      </span>
    </div>
    <div>
      <v-row class="mt-4">
        <v-col cols="12" md="4">
          <v-text-field
            ref="search-filter"
            v-model="search"
            outlined
            class="font-titillium"
            hide-details
            clearable
            append-icon="bi-search"
            label="Pesquise por animal, tutor, espécie..."
            :disabled="loading"
            @click:clear="setFilter(null)"
          />
        </v-col>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
        <v-col cols="12" md="3">
          <v-select
            ref="specie-filter"
            v-model="filters.specie"
            :items="species"
            label="Filtrar por espécie"
            outlined
            class="font-titillium"
            hide-details
          ></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            ref="tutor-filter"
            v-model="filters.tutor"
            :items="tutors"
            label="Filtrar por tutor"
            outlined
            class="font-titillium"
            hide-details
          ></v-select>
        </v-col>
      </v-row>
      <DataTable
        class="mt-4"
        :url-api="urlApi"
        :filters="filters"
        :headers="headers"
        show-expand-item
      >
        <template #item.birth="{ item }">
          <div style="font-variant-numeric: tabular-nums" class="text-no-wrap">
            {{ item.birth | formatData }}
          </div>
        </template>
        <template #item.animal_type="{ item }">
          <div style="font-variant-numeric: tabular-nums" class="text-no-wrap">
            {{ item.animal_type | formatAnimalType }}
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import API from "@/API";
import DataTable from "@/components/DataTable";
import { debounce } from "@/utils";

export default {
  name: "MedicalRecords",
  components: { DataTable },
  data: () => ({
    loading: false,
    headers: [
      {
        text: "Nome do animal",
        value: "name",
        sortable: false,
        class: "bold",
      },
      {
        text: "Espécie",
        value: "animal_type",
        sortable: false,
        class: "bold",
      },
      {
        text: "Nascimento",
        value: "birth",
        sortable: false,
        class: "bold",
      },
      {
        text: "Tutor",
        value: "owner",
        sortable: false,
        class: "bold",
      },
    ],
    species: [
      { text: "Cachorro", value: "DOG" },
      { text: "Cobra", value: "SNAKE" },
      { text: "Gato", value: "CAT" },
      { text: "Peixe", value: "FISH" },
      { text: "Tigre", value: "TIGER" },
      { text: "Outros", value: "OTHER" },
    ],
    tutors: [
      { text: "Anderson", value: "Anderson" },
      { text: "Angelo", value: "Angelo" },
      { text: "Camila", value: "Camila" },
      { text: "Fabiana", value: "Fabiana" },
      { text: "Jaqueline", value: "Jaqueline" },
      { text: "Jayro", value: "Jayro" },
      { text: "Lara", value: "Lara" },
      { text: "Lucas", value: "Lucas" },
      { text: "Vanessa", value: "Vanessa" },
      { text: "Vinicius", value: "Vinicius" },
    ],
    search: null,
    filters: {},
    urlApi: API.listAnimal,
  }),
  watch: {
    search: debounce(function (val) {
      this.setFilter(val);
    }, 1000),
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    setFilter(val) {
      this.$set(this.filters, "filter", val);
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-title {
  font: normal normal normal "Titillium Web";
  color: #2e81d4;
  font-size: 1.5rem;
  align-self: center;
}
</style>
