<template>
  <div>
    <div v-if="detailsExpandedItem.length" class="pt-4">
      <h3 class="title-expanded-item">Dados de consulta</h3>
      <table class="font-titillium custom-mini-table">
        <thead class="table-header custom-table-line">
          <tr>
            <th class="text-left">Data</th>
            <th class="text-left">Tipo</th>
            <th class="text-left">Conduta médica</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in detailsExpandedItem"
            :key="item.id"
            class="custom-table-line"
          >
            <td>{{ item.created_at | formatData }}</td>
            <td>{{ item.type | formatTypeAppointment }}</td>
            <td>{{ item.details }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <td v-else :colspan="headers.length" class="p-8">
      <div class="pt-2 text-center">
        <h3 class="title-expanded-item">
          Não há dados de consulta para esse prontuário.
        </h3>
      </div>
    </td>
  </div>
</template>

<script>
export default {
  name: "SimpleTable",
  props: {
    detailsExpandedItem: { type: Array, default: () => [] },
  },
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {},
  },
};
</script>
<style lang="scss">
.title-expanded-item {
  color: #2e81d4;
}
.table-header {
  font-size: 0.9rem;
}
.custom-mini-table {
  width: 100%;
  padding: 1rem;
  border-collapse: collapse;
}
.custom-table-line {
  margin-bottom: 1px;
  border-bottom: 1pt solid #e0e0e0;
  line-height: 3rem;
}
</style>
