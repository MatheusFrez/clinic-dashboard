<template>
  <v-data-table
    :loading="loading"
    :headers="headers"
    :items="items"
    :items-per-page.sync="rowsPerPage"
    :page.sync="page"
    class="v-sheet--outlined rounded-lg font-titillium row-pointer"
    :expanded.sync="expanded"
    single-expand
    @click:row="(item, slot) => showExpandItem && slot.expand(!slot.isExpanded)"
  >
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      v-slot:[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length" style="padding: 0px">
        <SimpleTable :details-expanded-item="detailsExpandedItem" />
      </td>
    </template>
  </v-data-table>
</template>

<script>
import API from "@/API";
import SimpleTable from "@/components/SimpleTable";

export default {
  name: "DataTable",
  components: { SimpleTable },
  props: {
    urlApi: { type: Function, default: () => {} },
    headers: { type: Array, default: () => [] },
    filters: { type: Object, default: () => [] },
    showExpandItem: { type: Boolean, default: false },
  },
  data: () => ({
    loading: false,
    page: 1,
    rowsPerPage: 10,
    items: [],
    itemsPerPageOptions: [10, 20, 50],
    expanded: [],
    detailsExpandedItem: [],
  }),
  watch: {
    page() {
      this.listar();
    },
    rowsPerPage() {
      this.listar();
    },
    filters: {
      deep: true,
      handler() {
        this.filtrar();
      },
    },
    async expanded(value) {
      this.loading = true;
      try {
        const itemExpanded = value[0];
        const idAnimal = (itemExpanded || {}).id;
        if (idAnimal) {
          const details = await API.getAnimalAppointments({}, idAnimal);
          this.detailsExpandedItem = details.data;
        }
      } catch (e) {
        console.log("DEU RUIMM AQUI EM", e); //TO DO CRIAR COMPONENTE GLOBAL PARA TRATAMENTO DE ERROS
      }
      this.loading = false;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.listar();
    },
    async filtrar() {
      await this.listar();
      this.page = 1;
    },
    async listar() {
      if (this.loading) return;
      this.loading = true;
      await this.$nextTick();

      try {
        const limit = this.rowsPerPage;
        const skip = (1 - this.page) * this.rowsPerPage;
        const data = await this.urlApi({
          limit,
          skip,
          ...this.filters,
        });
        this.items = data.data;
      } catch (e) {
        console.log("DEU RUIM AQUI", e); //TO DO CRIAR UMA JANELA AMIGÁVEL PARA TRATAMENTO DE ERROS
      }
      this.loading = false;
    },
  },
};
</script>
<style lang="scss">
.datatable {
  font-family: "Titillium Web";
}

.row-pointer > .v-data-table__wrapper > table > tbody > tr:hover {
  cursor: pointer;
}
</style>
