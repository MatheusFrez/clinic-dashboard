<template>
  <div>
    <h3
      v-if="detailsExpandedItem.length"
      ref="title-expanded-item"
      class="title-expanded-item pt-4 pl-4"
    >
      Dados de consulta
    </h3>
    <div v-if="detailsExpandedItem.length">
      <v-data-table
        :headers="headers"
        :items="detailsExpandedItem"
        class="mt-2 mb-4 datatable-without-shadow row-normal"
        hide-default-footer
      >
        <template #item.created_at="{ item }">
          <div style="font-variant-numeric: tabular-nums" class="text-no-wrap">
            {{ item.created_at | formatData }}
          </div>
        </template>
        <template #item.type="{ item }">
          <div style="font-variant-numeric: tabular-nums" class="text-no-wrap">
            {{ item.type | formatTypeAppointment }}
          </div>
        </template>
      </v-data-table>
    </div>
    <div v-else class="p-8">
      <div class="pt-2 text-center">
        <h3 class="title-expanded-item">
          Não há dados de consulta para esse prontuário.
        </h3>
      </div>
    </div>
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
    headers: [
      {
        text: "Data",
        align: "right",
        sortable: false,
        value: "created_at",
        class: "bold",
      },
      {
        text: "Tipo",
        align: "center",
        value: "type",
        sortable: false,
        class: "bold",
      },
      {
        text: "Conduta médica",
        align: "left",
        value: "details",
        sortable: false,
        class: "bold",
      },
    ],
  }),
};
</script>
<style lang="scss">
.title-expanded-item {
  color: #2e81d4;
}
.datatable-without-shadow {
  box-shadow: none !important;
}
.row-normal > .v-data-table__wrapper > table > tbody > tr:hover {
  cursor: default;
}
</style>
