<template>
  <v-data-table
    :loading="loading"
    :headers="headers"
    :items="items"
    :disable-sort="loading"
    :items-per-page.sync="rowsPerPage"
    :page.sync="page"
    class="v-sheet--outlined rounded-lg datatable"
    return-object
    lang="pt-br"
  >
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      v-slot:[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    urlApi: { type: Function, default: () => {} },
    headers: { type: Array, default: () => [] },
    filters: { type: Object, default: () => [] },
  },
  data: () => ({
    loading: false,
    page: 1,
    rowsPerPage: 10,
    items: [],
    itemsPerPageOptions: [10, 20, 50],
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
</style>
