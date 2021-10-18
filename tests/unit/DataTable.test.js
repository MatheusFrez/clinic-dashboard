import { createLocalVue, shallowMount } from "@vue/test-utils";

import DataTable from "../../src/components/DataTable.vue";
import SimpleTable from "../../src/components/SimpleTable.vue";

describe("Testing data table component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DataTable, {
      localVue,
      propsData: { filters: {} },
    });
  });

  it("Should has a v-data-table component", () => {
    expect(wrapper.findComponent({ name: "v-data-table" }).exists()).toBe(true);
  });

  it("Should have a simple table component", () => {
    const simpleTable = wrapper.findAllComponents(SimpleTable);

    expect(simpleTable).toHaveLength(1);
  });

  it("Should change some data values", () => {
    wrapper.setData({
      loading: true,
      page: 10,
      rowsPerPage: 50,
    });

    expect(wrapper.vm.loading).toBe(true);
    expect(wrapper.vm.page).toBe(10);
    expect(wrapper.vm.rowsPerPage).toBe(50);
  });
});
